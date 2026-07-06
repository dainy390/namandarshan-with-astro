import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  CheckCircle,
  Trophy,
  Plus,
  Flame,
  Sparkles,
  LogIn,
  UserPlus,
  Camera,
  Save,
  LogOut,
  Pencil,
  Trash2,
} from "lucide-react";
import { DevoteeJourney, DevoteeReview } from "@/data/devoteeWallData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import PollWidget from "./PollWidget";

interface RealDevoteeSidebarProps {
  journeys: DevoteeJourney[];
  reviews: DevoteeReview[];
  posts: any[];
  showProfileOnly?: boolean;
  showCommunityOnly?: boolean;
}

const RealDevoteeSidebar: React.FC<RealDevoteeSidebarProps> = ({
  journeys,
  posts,
  showProfileOnly,
  showCommunityOnly,
}) => {
  const navigate = useNavigate();
  const {
    isUserAuthenticated,
    user,
    logoutUser,
    isLoading: isAuthLoading,
    updateUserProfile,
  } = useAuth();

  // Profile State (Derived from Auth or fallback to local for guest mode)
  const [inputName, setInputName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userPostCount, setUserPostCount] = useState(0);
  const [userTempleCount, setUserTempleCount] = useState(0);
  const [userPhotos, setUserPhotos] = useState<any[]>([]);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
  const [isRemoveConfirmOpen, setIsRemoveConfirmOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  // Source of truth for identity
  const profileName = user?.name || localStorage.getItem("devotee_name") || "";

  // Robust Avatar logic: Treat '""' or 'DELETED' as explicitly empty to prevent accidental fallbacks
  const localAvatar = localStorage.getItem("user.profileImage");

  // Hard Override: If anyone (local, server, or current session) says it's deleted, show initials
  const isExplicitlyDeleted =
    previewAvatar === "DELETED" ||
    localAvatar === "DELETED" ||
    user?.avatar === "";

  const profileAvatar = isExplicitlyDeleted
    ? null
    : previewAvatar && previewAvatar !== "DELETED"
    ? previewAvatar
    : user?.avatar && user.avatar.trim() !== ""
    ? user.avatar
    : localAvatar && localAvatar !== "DELETED"
    ? localAvatar
    : null;

  const profileBanner =
    user?.banner || localStorage.getItem("user.banner") || null;

  const currentUserName = profileName;

  // Sync with Live Wall Posts (real data from API)
  useEffect(() => {
    if (posts && Array.isArray(posts)) {
      // Filter posts for the current authenticated user OR by name if guest-local
      const userPosts = posts.filter(
        (p: any) =>
          (user && p.userId === user._id) || p.userName === currentUserName,
      );

      setUserPostCount(userPosts.length);

      // Count unique temples visited
      const uniqueTemples = new Set(
        userPosts
          .filter(
            (p: any) =>
              p.templeName &&
              p.templeName.trim() !== "" &&
              p.templeName !== "Sacred Temple",
          )
          .map((p: any) => p.templeName),
      );
      setUserTempleCount(uniqueTemples.size);

      const photosWithIds = userPosts
        .filter((p: any) => p.image && p.image.trim() !== "")
        .map((p: any) => ({
          id: p.id || p._id,
          image: p.image,
        }));
      setUserPhotos(photosWithIds);
    }
  }, [posts, currentUserName, user]);

  // Initialize input name when editing starts
  useEffect(() => {
    if (isEditing) {
      setInputName(profileName);
    }
  }, [isEditing, profileName]);

  // Sync with Auth Context for guest to auth transition
  useEffect(() => {
    if (isUserAuthenticated && user && !isEditing) {
      if (user.name) {
        localStorage.setItem("devotee_name", user.name);
      }
    } else if (!isUserAuthenticated && !isAuthLoading) {
      setUserPhotos([]);
      setIsEditing(false);
    }
  }, [isUserAuthenticated, user, isAuthLoading, isEditing]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Limit to 2MB
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Sacred photos must be smaller than 2MB for the wall 🙏");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setIsSaving(true);
        try {
          const result = await updateUserProfile({ avatar: base64String });
          if (result.success) {
            localStorage.setItem("user.profileImage", base64String);
            setPreviewAvatar(base64String);
            toast.success("Profile photo updated! ✨");
            window.dispatchEvent(new Event("storage_sync"));
            window.dispatchEvent(new Event("profile_update"));
            window.dispatchEvent(
              new CustomEvent("avatar_changed", { detail: base64String }),
            );
          } else {
            toast.error(result.message || "Failed to update profile image.");
          }
        } catch (err) {
          toast.error("Failed to save profile photo.");
        } finally {
          setIsSaving(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoveConfirmOpen(true);
  };

  const confirmRemoveAvatar = async () => {
    setIsSaving(true);
    setIsRemoveConfirmOpen(false);
    try {
      // 1. Force local state to 'DELETED' immediately for instant UI feedback
      setPreviewAvatar("DELETED");

      // 2. Clear all local storage variants
      localStorage.removeItem("user.profileImage");
      localStorage.removeItem("profileImage"); // possible variant
      // We set it to a specific marker instead of REMOVE to avoid any truthy string issues
      localStorage.setItem("user.profileImage", "DELETED");

      if (isUserAuthenticated) {
        // 3. Try to clear on server - Using null as it's more likely to be accepted as 'delete'
        // than an empty string in many backends.
        const result = await updateUserProfile({ avatar: null as any });
        if (!result.success) {
          // Fallback to empty string if null fails or is rejected
          await updateUserProfile({ avatar: "" });
        }
      }

      toast.success("Profile photo removed! ✨");

      // 4. Force a global sync
      window.dispatchEvent(new Event("storage_sync"));
      window.dispatchEvent(new Event("profile_update"));
      window.dispatchEvent(new CustomEvent("avatar_changed", { detail: null }));
    } catch (err) {
      toast.error("Failed to remove profile photo.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Limit to 2MB
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Banners must be smaller than 2MB 🙏");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setIsSaving(true);
        try {
          if (isUserAuthenticated) {
            await updateUserProfile({ banner: base64String });
          }
          localStorage.setItem("user.banner", base64String);
          toast.success("Profile banner updated! 🌅");
        } catch (err) {
          toast.error("Failed to save banner.");
        } finally {
          setIsSaving(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    if (!inputName.trim()) {
      toast.error("Please enter your name 🙏");
      return;
    }
    setIsSaving(true);
    try {
      if (isUserAuthenticated) {
        await updateUserProfile({ name: inputName });
      }
      localStorage.setItem("devotee_name", inputName);
      setIsEditing(false);
      toast.success("✨ Profile saved successfully!");
    } catch (err) {
      toast.error("Failed to save profile.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteMyPhoto = async (postId: string) => {
    if (!window.confirm("Remove this sacred moment from your journey? 🙏"))
      return;

    try {
      // Import getApiUrl if necessary - it's already used in DevoteeWallPage
      const { getApiUrl } = await import("@/utils/api");
      const response = await fetch(getApiUrl(`/api/posts/${postId}`), {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("✨ Post removed from your journey.");
        window.dispatchEvent(new Event("naman_post_deleted"));
        // Note: The wall will update via socket.io, and the sidebar will follow
        // via the 'posts' prop dependency in the useEffect above.
      } else {
        toast.error("Failed to sync deletion. Please try again.");
      }
    } catch (err) {
      console.error("Deletion error:", err);
      toast.error("Something went wrong during deletion.");
    }
  };

  const handleLogout = () => {
    setUserPhotos([]);
    logoutUser();
    toast.success("Logged out successfully. Om Shanti! 🙏");
    navigate("/devotee-wall");
  };

  const topDevs = [
    {
      id: 1,
      name: "Sunita Reddy",
      temples: 12,
      posts: 48,
      initial: "S",
      color: "bg-orange-500",
    },
    {
      id: 2,
      name: "Anjali Gupta",
      temples: 15,
      posts: 36,
      initial: "A",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Mahesh Pandey",
      temples: 9,
      posts: 29,
      initial: "M",
      color: "bg-green-600",
    },
    {
      id: 4,
      name: "Priya Sharma",
      temples: 8,
      posts: 22,
      initial: "P",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="space-y-10 sticky top-32">
      {/* 1. Profile Section (Visible on Desktop OR when showProfileOnly is true) */}
      {!showCommunityOnly && (
        <div className="min-h-[420px] transition-all duration-300">
          {isAuthLoading && localStorage.getItem("userToken") ? (
            // Loader placeholder while checking auth status
            <Card className="card-light-sacred border-none bg-white p-8 animate-pulse h-full flex flex-col justify-center items-center gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full" />
              <div className="w-48 h-6 bg-gray-100 rounded-lg" />
              <div className="w-full h-24 bg-gray-50 rounded-2xl" />
            </Card>
          ) : (!isUserAuthenticated &&
              !isAuthLoading &&
              !localStorage.getItem("userToken")) ||
            (!isUserAuthenticated && !localStorage.getItem("userToken")) ? (
            <Card className="card-light-sacred border-none bg-white p-8 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col justify-center">
              <div className="mx-auto w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-3xl shadow-inner border border-orange-100/50">
                ✨
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  Start Your Devotion Journey
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  Login to share your darshan experiences, post temple visits,
                  and connect with millions of devotees.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <Button
                  onClick={() =>
                    navigate(
                      `/login?redirect=${encodeURIComponent(
                        window.location.pathname,
                      )}`,
                    )
                  }
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-sacred-orange to-orange-400 text-white font-bold shadow-lg shadow-orange-200 hover:scale-[1.02] transition-all gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login to Continue
                </Button>
                <Button
                  onClick={() =>
                    navigate(
                      `/login?mode=signup&redirect=${encodeURIComponent(
                        window.location.pathname,
                      )}`,
                    )
                  }
                  variant="outline"
                  className="w-full h-12 rounded-xl border-orange-100 text-sacred-orange font-bold hover:bg-orange-50 transition-all gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Create New Account
                </Button>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] pt-2">
                Join 4M+ devotees sharing experiences
              </p>
            </Card>
          ) : !profileName || isEditing ? (
            <Card className="card-light-sacred border-none bg-white p-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  Setup Your Profile
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete these quick steps to start sharing.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-28 h-28 rounded-full border-4 border-dashed border-orange-100 bg-orange-50/30 group cursor-pointer hover:border-sacred-orange transition-all overflow-hidden shadow-inner">
                  {profileAvatar ? (
                    <img
                      src={profileAvatar}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 flex flex-col items-center justify-center text-sacred-orange/30 group-hover:text-sacred-orange"
                    >
                      <Camera className="w-8 h-8 mb-1" />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Avatar
                      </span>
                    </div>
                  )}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold"
                  >
                    Update
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[10px] font-black uppercase tracking-widest text-sacred-orange hover:underline flex items-center gap-1.5"
                  >
                    <Camera className="w-3 h-3" />
                    Add / Change
                  </button>

                  {profileAvatar && (
                    <button
                      onClick={handleRemoveAvatar}
                      className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:underline flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3 h-3" />
                      Remove Photo
                    </button>
                  )}
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
              <div className="space-y-4">
                <div className="text-left">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Your Devotee Name
                  </label>
                  <Input
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Enter your full name..."
                    className="h-12 bg-gray-50 border-orange-50 rounded-xl mt-1.5 focus-visible:ring-1 focus-visible:ring-sacred-orange"
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleSaveProfile}
                    disabled={isSaving || !inputName.trim()}
                    className="flex-grow h-14 rounded-xl bg-sacred-orange text-white font-bold shadow-xl shadow-orange-100 hover:scale-[1.02] transition-all gap-2"
                  >
                    {isSaving ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        {isEditing ? "Save Changes" : "Save & Continue"}
                      </>
                    )}
                  </Button>
                  {isEditing && (
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="ghost"
                      className="h-14 px-6 rounded-xl border border-gray-100 text-gray-400 font-bold hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ) : (
            <Card className="card-light-sacred card-sacred-hover overflow-hidden p-0 border-none bg-white animate-in zoom-in-95 duration-500 h-full relative">
              {/* Banner Section */}
              <div className="h-32 relative bg-orange-50 overflow-hidden group/banner border-b border-orange-100">
                {profileBanner ? (
                  <img
                    src={profileBanner}
                    alt="Banner"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center opacity-40">
                    <Camera className="w-8 h-8 text-sacred-orange mb-1" />
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-sacred-orange">
                      Add Cover Photo
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/banner:opacity-100 transition-opacity" />
                <button
                  onClick={() => bannerInputRef.current?.click()}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-white shadow-md rounded-full text-sacred-orange hover:bg-sacred-orange hover:text-white transition-all scale-100 border border-orange-100"
                  title="Edit Banner"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <input
                  type="file"
                  ref={bannerInputRef}
                  className="hidden"
                  onChange={handleBannerChange}
                  accept="image/*"
                />
              </div>

              <button
                onClick={handleLogout}
                className="absolute top-4 right-16 z-20 p-2.5 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 shadow-lg border border-white/20"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>

              <div className="px-6 pb-8 text-center -mt-14 relative z-10">
                <div className="mx-auto w-24 h-24 rounded-full p-1 bg-white shadow-xl">
                  <div className="w-full h-full rounded-full bg-sacred-orange overflow-hidden border-4 border-white flex items-center justify-center text-white text-4xl font-bold relative group shadow-inner">
                    {profileAvatar ? (
                      <img
                        src={profileAvatar}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="uppercase">
                        {profileName ? profileName.charAt(0) : "ॐ"}
                      </span>
                    )}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <Camera className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {profileName}
                  </h3>
                  <p className="text-sm font-bold text-sacred-orange tracking-widest lowercase">
                    @{profileName.toLowerCase().replace(/\s/g, "")}.devotee
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-orange-50 mt-8">
                  <div className="border-r border-orange-50 pr-4">
                    <div className="text-xl font-black text-sacred-orange">
                      {userPostCount}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Posts
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-sacred-orange">
                      {userTempleCount}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Temples
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                  className="w-full mt-8 h-12 rounded-xl border-orange-100 text-gray-400 font-bold hover:bg-orange-50 hover:text-sacred-orange transition-all"
                >
                  Edit Profile
                </Button>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* 2. Community Poll (Visible to all, High Visibility) */}
      {!showProfileOnly && (
        <div className="pt-2">
          <PollWidget
            userId={user?._id || localStorage.getItem("temp_user_id")}
          />
        </div>
      )}

      {/* 3. My Photos Section (Visible on Desktop OR when showProfileOnly is true) */}
      {!showCommunityOnly && (
        <div
          className={`space-y-4 transition-all duration-500 ${
            !isUserAuthenticated
              ? "opacity-30 pointer-events-none grayscale"
              : ""
          }`}
        >
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-gray-900 tracking-tighter text-lg uppercase">
              My Photos
            </h3>
            <Link
              to="/profile"
              className="text-[11px] font-black text-sacred-orange uppercase tracking-widest hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {userPhotos.slice(0, 3).map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-orange-50 relative"
              >
                <img
                  src={photo.image}
                  alt={`My post ${i}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />

                {/* Delete Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteMyPhoto(photo.id);
                    }}
                    className="p-2 bg-white/20 hover:bg-red-500/80 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
            {userPhotos.length < 3 &&
              userPhotos.length > 0 &&
              Array.from({ length: 3 - userPhotos.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="aspect-square rounded-2xl border border-orange-50 bg-gray-50/50"
                />
              ))}
          </div>
        </div>
      )}

      {/* 4. Community & Top Devotees (Visible on Desktop OR when showCommunityOnly is true) */}
      {!showProfileOnly && (
        <div className="space-y-6 pt-2">
          <Card className="card-light-sacred p-8 border-none bg-white space-y-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-sacred-orange" />
              <h3 className="font-black text-gray-900 tracking-tighter uppercase text-lg">
                Top Devotees
              </h3>
            </div>
            <div className="space-y-6">
              {topDevs.map((dev) => (
                <div
                  key={dev.id}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${dev.color} border-2 border-white shadow-md`}
                      >
                        {dev.initial}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 group-hover:text-sacred-orange transition-colors tracking-tight text-[15px]">
                        {dev.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest leading-none mt-1">
                        {dev.temples} Temples • {dev.posts} posts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-gradient-to-br from-gray-900 via-[#1A1A1A] to-gray-800 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-1000 rotate-12">
              <Sparkles className="w-40 h-40" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] uppercase border border-white/10">
                <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                Spiritual Community
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black tracking-tighter">4M+</div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  Global Devotees
                </p>
              </div>
              <Link
                to="/bhajan-aarti"
                className="inline-block mt-4 bg-sacred-orange hover:bg-orange-500 transition-all duration-300 text-white text-xs font-bold px-5 py-3 rounded-full"
              >
                Explore Aarti
              </Link>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sacred-orange" />
                  <span className="text-xs font-bold leading-tight">
                    100% Genuine Darshan Stories
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sacred-orange" />
                  <span className="text-xs font-bold leading-tight">
                    Verified Sacred Journey Tracking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AlertDialog
        open={isRemoveConfirmOpen}
        onOpenChange={setIsRemoveConfirmOpen}
      >
        <AlertDialogContent className="rounded-[32px] border-none shadow-2xl p-8 max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-black text-gray-900 tracking-tight mb-2">
              Remove Photo?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 text-[15px] leading-relaxed">
              Are you sure you want to remove your sacred profile photo? You
              will still be identified by your initials. 🙏
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8 gap-3">
            <AlertDialogCancel className="h-12 px-6 rounded-2xl border-orange-100 text-gray-400 font-bold hover:bg-orange-50 transition-all outline-none">
              Keep it
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmRemoveAvatar}
              className="h-12 px-8 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all border-none outline-none"
            >
              Confirm Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RealDevoteeSidebar;
