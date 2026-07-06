import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl, getApiBaseUrl } from "@/utils/api";
import PostCreationBox from "./components/PostCreationBox";
import RealDevoteeSidebar from "./components/RealDevoteeSidebar";
import PollWidget from "./components/PollWidget";
import {
    devoteeContributions as initialMockPosts,
    devoteeJourneys,
    devoteeReviews
} from "@/data/devoteeWallData";
import {
    Heart,
    MessageCircle,
    Share2,
    MoreHorizontal,
    MapPin,
    Calendar,
    BadgeCheck,
    Trash2,
    Edit3,
    Search,
    X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CommentSection from "./components/CommentSection";
import ShareWaveMenu from "./components/ShareWaveMenu";
import ShortsViewer from "./components/ShortsViewer";
import ShortCard from "./components/ShortCard";
import UploadShortModal from "./components/UploadShortModal";
import { io } from "socket.io-client";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, FileText, PlaySquare } from "lucide-react";

const ExpandableText: React.FC<{ text: string }> = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const words = text.split(/\s+/);

    if (words.length <= 30) {
        return <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{text}</p>;
    }

    const displayedText = isExpanded ? text : words.slice(0, 30).join(" ") + "...";

    return (
        <div className="mb-6">
            <p className="text-gray-600 text-[15px] leading-relaxed inline">
                {displayedText}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sacred-orange font-bold text-sm ml-2 hover:underline transition-all"
            >
                {isExpanded ? "Show Less" : "See More"}
            </button>
        </div>
    );
};

const PostSkeleton: React.FC = () => (
    <Card className="border-none bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-[32px] animate-pulse">
        <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-gray-100" />
            <div className="flex flex-col gap-2">
                <div className="w-24 h-4 bg-gray-100 rounded-lg" />
                <div className="w-32 h-3 bg-gray-50 rounded-lg" />
            </div>
        </div>
        <div className="space-y-3 mb-6">
            <div className="w-full h-4 bg-gray-100 rounded-lg" />
            <div className="w-5/6 h-4 bg-gray-100 rounded-lg" />
        </div>
        <div className="w-full h-64 bg-gray-50 rounded-[28px]" />
        <div className="flex items-center gap-8 mt-6 pt-6 border-t border-gray-50">
            <div className="w-12 h-8 bg-gray-50 rounded-full" />
            <div className="w-12 h-8 bg-gray-50 rounded-full" />
            <div className="w-12 h-8 bg-gray-50 rounded-full" />
        </div>
    </Card>
);

const DevoteeWallPage: React.FC = () => {
    const { isUserAuthenticated, user, isLoading: authLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [visibleItems, setVisibleItems] = useState(6);

    const [isLoading, setIsLoading] = useState(false);

    // Stale-While-Revalidate: Initialize from cache if possible
    const [posts, setPosts] = useState<any[]>(() => {
        try {
            const cached = localStorage.getItem('naman_wall_cache');
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch (e) { console.error("Cache init failed", e); }
        return []; // Start empty if no cache
    });
    const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
    const [activeShareId, setActiveShareId] = useState<string | null>(null);
    const [postToDelete, setPostToDelete] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("all");
    const [isShortModalOpen, setIsShortModalOpen] = useState(false);
    const [postToEdit, setPostToEdit] = useState<any | null>(null);
    const [editDescription, setEditDescription] = useState("");
    const [activePopOutIndex, setActivePopOutIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Function to load all posts (DB + Mock + LocalStorage)
    const loadAllPosts = async (silent = false) => {
        if (!silent) setIsLoading(true);
        try {
            const currentUserId = user?._id || localStorage.getItem('temp_user_id');
            const storageKey = `liked_posts_${currentUserId || 'guest'}`;
            const localLikes = (() => {
                try {
                    const stored = localStorage.getItem(storageKey);
                    return stored ? JSON.parse(stored) : [];
                } catch { return []; }
            })();

            // Fetch both regular posts and dedicated shorts to ensure full coverage
            const [postsRes, shortsRes] = await Promise.all([
                fetch(getApiUrl('/api/posts')),
                fetch(getApiUrl('/api/posts/shorts'))
            ]);

            const dbPostsRaw = postsRes.ok ? await postsRes.json() : [];
            const shortsRaw = shortsRes.ok ? await shortsRes.json() : { data: [] };


            // console.log(shortsRaw , "thsi is the data coming from backend") ;
            const dbShorts = Array.isArray(shortsRaw) ? shortsRaw : (shortsRaw.data || []);

            // Combine and deduplicate by ID
            const combined = [...(Array.isArray(dbPostsRaw) ? dbPostsRaw : []), ...dbShorts];
            const uniquePosts = Array.from(new Map(combined.map(p => [p._id || p.id, p])).values());

            // Map to UI format
            const mappedPosts = uniquePosts.map((p: any) => {
                const pid = p._id || p.id;
                return {
                    ...p,
                    id: pid,
                    userName: p.userName || "Blessed Devotee",
                    userAvatar: p.userAvatar || "",
                    comment: p.description || "",
                    image: (p.image && typeof p.image === 'string')
                        ? (p.image.startsWith('http') ? p.image : getApiUrl(p.image))
                        : null,
                    videoUrl: (p.videoUrl && typeof p.videoUrl === 'string')
                        ? (p.videoUrl.startsWith('http') ? p.videoUrl : getApiUrl(p.videoUrl))
                        : p.videoUrl,
                    location: p.placeName ? `${p.placeName}${p.stateName ? ', ' + p.stateName : ''}` : (p.location || "Sacred Space"),
                    templeName: p.templeName || "Sacred Temple",
                    date: p.createdAt ? (new Date(p.createdAt).toLocaleDateString() === new Date().toLocaleDateString() ? 'Today' : new Date(p.createdAt).toLocaleDateString()) : 'Recently',
                    likes: p.likes || 0,
                    isLiked: (Array.isArray(p.likedBy) && currentUserId && p.likedBy.includes(currentUserId)) || localLikes.includes(pid),
                    targetLikes: p.targetLikes || 500,
                    comments: (p.comments || []).map((c: any) => ({
                        ...c,
                        userName: c.userName || c.user || "Devotee",
                        userAvatar: c.userAvatar || ""
                    }))
                };
            }).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

            const finalPosts = mappedPosts.filter((p: any) => {
                if (p.videoUrl && typeof p.videoUrl === 'string') {
                    // Exclude localhost and internal placeholder videos
                    return !p.videoUrl.includes('localhost') && !p.videoUrl.includes('/videos/');
                }
                return true;
            });

            // Randomize the posts so Shorts and regular Posts are mixed
            const shuffledPosts = finalPosts.sort(() => Math.random() - 0.5);

            setPosts(shuffledPosts);
            localStorage.setItem('naman_wall_cache', JSON.stringify(shuffledPosts.slice(0, 50)));
        } catch (err) {
            console.error("Failed to load spiritual wall:", err);
            if (posts.length === 0) setPosts(initialMockPosts);
        } finally {
            if (!silent) setIsLoading(false);
        }
    };

    useEffect(() => {
        // High Speed Background Sync:
        // We already have mock data in our initial state.
        // This call will silently fetch DB posts and update the feed.
        loadAllPosts(true);

        const apiBaseUrl = getApiBaseUrl();
        const socket = io(apiBaseUrl);

        socket.on('wall_post_global', (newPost: any) => {
            setPosts(prev => [newPost, ...prev]);
        });

        socket.on('wall_post_deleted', (postId: string) => {
            setPosts(prev => prev.filter(p => p.id !== postId));
        });

        socket.on('wall_comment_global', ({ postId, comment }: any) => {
            setPosts(prev => prev.map(p => {
                if (p.id !== postId) return p;

                const alreadyExists = p.comments?.some((existing: any) => {
                    const eid = String(existing._id || existing.id || '');
                    const cid = String(comment._id || comment.id || '');
                    const isSameId = eid !== '' && cid !== '' && eid === cid;
                    const isSameContent = existing.text === comment.text &&
                        existing.userId === comment.userId &&
                        Math.abs(new Date(existing.createdAt).getTime() - new Date(comment.createdAt).getTime()) < 5000;
                    return isSameId || isSameContent;
                });
                if (alreadyExists) {
                    console.log("[Socket] Duplicate comment detected, skipping", comment.text);
                    return p;
                }

                const optimisticMatchIndex = (p.comments || []).findIndex((c: any) =>
                    c.isOptimistic &&
                    c.userId === comment.userId &&
                    c.text === comment.text
                );

                if (optimisticMatchIndex !== -1) {
                    const updatedComments = [...(p.comments || [])];
                    updatedComments[optimisticMatchIndex] = { ...comment, isOptimistic: false };
                    return { ...p, comments: updatedComments };
                }

                return { ...p, comments: [comment, ...(p.comments || [])] };
            }));
        });

        socket.on('wall_comment_deleted', ({ postId, commentId }: any) => {
            setPosts(prev => prev.map(p =>
                p.id === postId ? { ...p, comments: (p.comments || []).filter((c: any) => (c._id || c.id) !== commentId) } : p
            ));
        });

        socket.on('wall_like_global', ({ postId, likes }: any) => {
            setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes } : p));
        });

        const handleNewPost = () => loadAllPosts();

        window.addEventListener("naman_post_created", handleNewPost);
        window.addEventListener("naman_post_deleted", handleNewPost);

        return () => {
            window.removeEventListener("naman_post_created", handleNewPost);
            window.removeEventListener("naman_post_deleted", handleNewPost);
            socket.disconnect();
        };
    }, [user, authLoading]);

    const handleLike = async (postId: string) => {
        if (!user) {
            toast.error("Please login to share your blessings 🙏");
            navigate("/login", { state: { from: location.pathname } });
            return;
        }

        const currentId = user?._id || localStorage.getItem('temp_user_id');
        const storageKey = `liked_posts_${currentId || 'guest'}`;
        const storedLikes = JSON.parse(localStorage.getItem(storageKey) || "[]");
        const alreadyLiked = storedLikes.includes(postId);

        // Optimistic UI update and toggle logic
        setPosts(prev => prev.map(p => {
            if (p.id !== postId) return p;

            if (alreadyLiked) {
                return { ...p, likes: Math.max(0, p.likes - 1), isLiked: false };
            } else {
                return { ...p, likes: p.likes + 1, isLiked: true };
            }
        }));

        // Persist locally
        let nextLikes;
        if (alreadyLiked) {
            nextLikes = storedLikes.filter((id: string) => id !== postId);
        } else {
            nextLikes = [...storedLikes, postId];
        }
        localStorage.setItem(storageKey, JSON.stringify(nextLikes));

        try {
            await fetch(getApiUrl(`/api/posts/${postId}/like`), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: JSON.stringify({ action: alreadyLiked ? 'unlike' : 'like' })
            });
        } catch (err) {
            console.error("Failed to sync like globally:", err);
        }
    };

    const toggleComments = (postId: string) => {
        setExpandedComments(prev => {
            const next = new Set(prev);
            if (next.has(postId)) next.delete(postId);
            else next.add(postId);
            return next;
        });
    };

    const handleCommentAdded = (postId: string, newComment: any) => {
        setPosts(prev => prev.map(p => {
            if (p.id !== postId) return p;

            // Check if already added by socket to prevent double-posting
            const alreadyExists = p.comments?.some((existing: any) => {
                const eid = String(existing._id || existing.id || '');
                const cid = String(newComment._id || newComment.id || '');
                const isSameId = eid !== '' && cid !== '' && eid === cid;
                const isSameContent = existing.text === newComment.text &&
                    existing.userId === newComment.userId &&
                    Math.abs(new Date(existing.createdAt).getTime() - new Date(newComment.createdAt).getTime()) < 5000;
                return isSameId || isSameContent;
            });

            if (alreadyExists) {
                console.log("[API] Duplicate comment detected, skipping", newComment.text);
                return p;
            }
            return { ...p, comments: [newComment, ...(p.comments || [])] };
        }));
    };

    const handleDelete = async () => {
        if (!user) return;
        if (!postToDelete) return;

        const id = postToDelete;
        setPosts(prev => prev.filter(p => p.id !== id));
        setPostToDelete(null);

        try {
            const response = await fetch(getApiUrl(`/api/posts/${id}`), {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                    'x-user-id': user?._id || ''
                }
            });
            if (response.ok) {
                toast.success("🙏 Post removed from the sacred wall.");
            }
        } catch (err) {
            console.error("Failed to sync delete globally:", err);
        }
    };

    const handleEditStart = (post: any) => {
        setPostToEdit(post);
        setEditDescription(post.description || post.comment || "");
    };

    const handleEditSubmit = async () => {
        if (!postToEdit || !user) return;

        const id = postToEdit.id || postToEdit._id;

        // Optimistic UI update
        setPosts(prev => prev.map(p =>
            p.id === id ? { ...p, description: editDescription, comment: editDescription } : p
        ));
        setPostToEdit(null);

        try {
            const response = await fetch(getApiUrl(`/api/posts/${id}`), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                    'x-user-id': user?._id || ''
                },
                body: JSON.stringify({ description: editDescription })
            });
            if (response.ok) {
                toast.success("🙏 Your sacred story has been updated.");
            }
        } catch (err) {
            console.error("Failed to update post:", err);
            toast.error("Failed to update post. Please try again.");
        }
    };

    const handleShare = async (post: any) => {
        const shareData = {
            title: `Sacred Story by ${post.userName}`,
            text: post.description || post.comment,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link Copied! 🙏 Sacred link copied to clipboard.");
            }
        } catch (err) {
            console.error("Share failed:", err);
        }
    };

    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(prev => prev + 4);
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
            <SEO
                title="Sanatan Wall | Connect with Spiritual Community"
                description="Share your darshan experiences, photos, and connect with millions of devotees on NamanDarshan."
            />
            <Header />

            <main className="flex-grow pt-48 md:pt-[240px] pb-20">
                <div className="container max-w-[1400px] mx-auto px-4 md:px-6">

                    {/* Welcome Header */}
                    <div className="mb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700 text-center flex flex-col items-center">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sacred-orange" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-sacred-orange">Community Gateway</span>
                            <div className="h-px w-8 bg-gradient-to-r from-sacred-orange to-transparent" />
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight max-w-4xl">
                            Welcome to <span className="text-gradient-sacred">Sanatan Wall</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed mx-auto">
                            A sacred space for the Naman Parivaar to share their divine experiences, DARSHAN journeys, and spiritual breakthroughs with 4 million+ devotees across the globe.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10">

                        {/* Mobile Profile & Photos (Top) */}
                        <div className="lg:hidden flex flex-col gap-8 order-1">
                            <RealDevoteeSidebar journeys={devoteeJourneys} reviews={devoteeReviews} posts={posts} showProfileOnly />
                        </div>

                        {/* Left Feed Section (col-span-8) */}
                        <div className="lg:col-span-8 space-y-8 order-2">

                            <div className={`transition-all duration-500 ease-in-out mb-8`}>
                                {isUserAuthenticated ? (
                                    <PostCreationBox onUploadShortClick={() => setIsShortModalOpen(true)} />
                                ) : (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                                        <PollWidget userId={null} />
                                    </div>
                                )}
                            </div>


                            <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 gap-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-sacred-orange animate-pulse" />
                                        <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                                            Spiritual Feed
                                        </h2>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium">Recently updated stories from the community</p>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                                    <div className="flex flex-col gap-1">
                                        <div className="relative w-full md:w-64 group">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-sacred-orange transition-colors" />
                                            <Input
                                                type="text"
                                                placeholder="Search sacred stories..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-11 h-12 rounded-2xl border-orange-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-sacred-orange/10 transition-all font-medium"
                                            />
                                            {searchQuery && (
                                                <button
                                                    onClick={() => setSearchQuery("")}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 text-gray-400"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4 px-2">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                Total: {posts.length}
                                            </span>
                                            <span className="text-[10px] font-bold text-sacred-orange uppercase tracking-widest">
                                                Shorts: {posts.filter(p => p.postType === 'short' || p.mediaType === 'video').length}
                                            </span>
                                        </div>
                                    </div>

                                    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                                        <TabsList className="grid w-full grid-cols-3 md:w-[350px] h-12 bg-white border border-orange-100 shadow-sm rounded-2xl p-1">
                                            <TabsTrigger value="all" className="rounded-xl font-bold data-[state=active]:bg-sacred-orange data-[state=active]:text-white transition-all gap-2">
                                                <LayoutGrid className="w-4 h-4" />
                                                All
                                            </TabsTrigger>
                                            <TabsTrigger value="posts" className="rounded-xl font-bold data-[state=active]:bg-sacred-orange data-[state=active]:text-white transition-all gap-2">
                                                <FileText className="w-4 h-4" />
                                                Posts
                                            </TabsTrigger>
                                            <TabsTrigger value="shorts" className="rounded-xl font-bold data-[state=active]:bg-sacred-orange data-[state=active]:text-white transition-all gap-2">
                                                <PlaySquare className="w-4 h-4" />
                                                Shorts
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </div>

                            <div className={activeTab === "shorts" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center" : "space-y-8 min-h-[500px]"}>
                                {isLoading && posts.length === 0 ? (
                                    <>
                                        <PostSkeleton />
                                        <PostSkeleton />
                                        <PostSkeleton />
                                    </>
                                ) : (
                                    posts
                                        .filter(post => {
                                            const query = searchQuery.toLowerCase().trim();
                                            const matchesSearch = !query ||
                                                (post.description?.toLowerCase().includes(query)) ||
                                                (post.comment?.toLowerCase().includes(query)) ||
                                                (post.userName?.toLowerCase().includes(query)) ||
                                                (post.templeName?.toLowerCase().includes(query)) ||
                                                (post.placeName?.toLowerCase().includes(query));

                                            if (!matchesSearch) return false;

                                            if (activeTab === "all") return true;
                                            if (activeTab === "posts") return !post.videoUrl && post.mediaType !== 'video';
                                            if (activeTab === "shorts") return post.videoUrl || post.mediaType === 'video';
                                            return true;
                                        })
                                        .slice(0, visibleItems)
                                        .map((post) => {
                                            const isShort = post.videoUrl || post.mediaType === 'video';
                                            if (isShort && (activeTab === "all" || activeTab === "shorts")) {
                                                return (
                                                    <div key={post.id} className="space-y-4">
                                                        <ShortCard
                                                            post={post}
                                                            variant={activeTab === 'shorts' ? 'grid' : 'wide'}
                                                            onDelete={(id) => setPostToDelete(id)}
                                                            onEdit={handleEditStart}
                                                            onLike={() => handleLike(post.id)}
                                                            onCommentToggle={() => toggleComments(post.id)}
                                                            isCommentsExpanded={expandedComments.has(post.id)}
                                                            onCommentAdded={(newComment) => handleCommentAdded(post.id, newComment)}
                                                            onCommentDeleted={(commentId) => {
                                                                setPosts(prev => prev.map(p => {
                                                                    if (p.id !== post.id) return p;
                                                                    return { ...p, comments: (p.comments || []).filter((c: any) => (c._id || c.id) !== commentId) };
                                                                }));
                                                            }}
                                                            onShare={() => handleShare(post)}
                                                            onPopOut={() => {
                                                                const videoPosts = posts.filter(p => p.videoUrl || p.mediaType === 'video');
                                                                const index = videoPosts.findIndex(p => p.id === post.id);
                                                                setActivePopOutIndex(index >= 0 ? index : 0);
                                                            }}
                                                            currentUserId={(user as any)?._id || (user as any)?.id || localStorage.getItem("temp_user_id") || null}
                                                            isBackgroundPaused={activePopOutIndex !== null}
                                                        />
                                                        {expandedComments.has(post.id) && activeTab !== 'shorts' && (
                                                            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-50 mt-[-20px] pt-10">
                                                                <CommentSection
                                                                    postId={post.id}
                                                                    postOwnerId={post.userId}
                                                                    currentUserId={(user as any)?._id || (user as any)?.id || localStorage.getItem("temp_user_id") || null}
                                                                    initialComments={Array.isArray(post.comments) ? post.comments : []}
                                                                    onCommentAdded={(newComment) => handleCommentAdded(post.id, newComment)}
                                                                    onCommentDeleted={(commentId) => {
                                                                        setPosts(prev => prev.map(p => {
                                                                            if (p.id !== post.id) return p;
                                                                            return { ...p, comments: (p.comments || []).filter((c: any) => (c._id || c.id) !== commentId) };
                                                                        }));
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            }
                                            return (
                                                <Card key={post._id || post.id} className="card-light-sacred border-none bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all card-sacred-hover group animate-in fade-in duration-500">
                                                    {/* Existing Post Content */}
                                                    <div className="flex items-center justify-between mb-5">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-50 shadow-sm flex items-center justify-center bg-sacred-orange">
                                                                {(user?._id === post.userId || post.isLocal) && (localStorage.getItem("user.profileImage") === "DELETED") ? (
                                                                    <span className="text-white text-lg font-bold uppercase" id={`avatar-initial-${post.id}`}>
                                                                        {post.userName ? post.userName.charAt(0) : "ॐ"}
                                                                    </span>
                                                                ) : (user?._id === post.userId || post.isLocal) && (user?.avatar && user.avatar.trim() !== "") ? (
                                                                    <img
                                                                        src={user.avatar}
                                                                        alt={post.userName}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (user?._id === post.userId || post.isLocal) && (localStorage.getItem("user.profileImage") && localStorage.getItem("user.profileImage") !== "" && localStorage.getItem("user.profileImage") !== "DELETED") ? (
                                                                    <img
                                                                        src={localStorage.getItem("user.profileImage") || ""}
                                                                        alt={post.userName}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (post.userAvatar && post.userAvatar.trim() !== "" && post.userAvatar !== "DELETED") ? (
                                                                    <img src={post.userAvatar} alt={post.userName} className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <span className="text-white text-lg font-bold uppercase" id={`avatar-initial-${post.id}`}>
                                                                        {post.userName ? post.userName.charAt(0) : "ॐ"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <div className="flex items-center gap-1.5">
                                                                    <span className="font-bold text-gray-900 text-base">{post.userName}</span>
                                                                    <BadgeCheck className="w-4 h-4 text-[#3897f0] fill-current border-2 border-white" />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="flex items-center text-[11px] text-muted-foreground font-black uppercase tracking-widest gap-1">
                                                                        <MapPin className="w-3 h-3 text-sacred-orange" />
                                                                        {post.location}
                                                                    </div>
                                                                    <span className="text-[10px] text-gray-300">•</span>
                                                                    <div className="flex items-center text-[10px] text-gray-400 font-bold gap-1">
                                                                        <Calendar className="w-3 h-3" />
                                                                        {post.date}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {(user?._id === post.userId || post.isLocal) && (
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger asChild>
                                                                    <Button variant="ghost" size="icon" className="text-gray-400 rounded-full hover:bg-orange-50 outline-none">
                                                                        <MoreHorizontal className="w-5 h-5" />
                                                                    </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl border-orange-50 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                                                    <DropdownMenuItem
                                                                        onClick={() => handleEditStart(post)}
                                                                        className="flex items-center gap-2 p-3 text-sm font-bold text-gray-700 hover:text-sacred-orange rounded-xl focus:bg-orange-50 cursor-pointer"
                                                                    >
                                                                        <Edit3 className="w-4 h-4" />
                                                                        Edit Reflection
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem
                                                                        onClick={() => setPostToDelete(post.id)}
                                                                        className="flex items-center gap-2 p-3 text-sm font-bold text-red-500 hover:text-red-600 rounded-xl focus:bg-red-50 cursor-pointer"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                        Delete Forever
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        )}
                                                    </div>

                                                    <ExpandableText text={post.comment} />

                                                    {post.image && (
                                                        <div className="relative rounded-[28px] overflow-hidden mb-6 border border-orange-50/50 group/image bg-orange-50/20 aspect-video md:aspect-auto">
                                                            <img
                                                                src={post.image}
                                                                alt={post.templeName}
                                                                loading={posts.indexOf(post) < 2 ? "eager" : "lazy"}
                                                                className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover/image:scale-[1.02]"
                                                            />
                                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity" />
                                                        </div>
                                                    )}

                                                    <div className="flex flex-col pt-4 border-t border-orange-50">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-6">
                                                                <button
                                                                    onClick={() => handleLike(post.id)}
                                                                    className="flex items-center gap-2 text-gray-500 hover:text-sacred-orange transition-colors group/btn"
                                                                >
                                                                    <div className="p-2 rounded-full group-hover/btn:bg-orange-50 transition-all">
                                                                        <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-sacred-orange text-sacred-orange' : ''}`} />
                                                                    </div>
                                                                    <span className="text-sm font-black tracking-tight">{post.likes}</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => toggleComments(post.id)}
                                                                    className={`flex items-center gap-2 transition-colors group/btn-c ${expandedComments.has(post.id) ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
                                                                >
                                                                    <div className="p-2 rounded-full group-hover/btn-c:bg-blue-50 transition-all">
                                                                        <MessageCircle className={`w-6 h-6 ${expandedComments.has(post.id) ? 'fill-blue-50' : ''}`} />
                                                                    </div>
                                                                    <span className="text-sm font-black tracking-tight">{post.commentsCount || (post.comments ? post.comments.length : 0)}</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => handleShare(post)}
                                                                    className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors group/btn-s"
                                                                >
                                                                    <div className="p-2 rounded-full group-hover/btn-s:bg-green-50 transition-all">
                                                                        <Share2 className="w-6 h-6" />
                                                                    </div>
                                                                    <span className="text-[11px] font-black uppercase tracking-widest">Share</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {expandedComments.has(post.id) && (
                                                            <CommentSection
                                                                postId={post.id}
                                                                postOwnerId={post.userId}
                                                                currentUserId={(user as any)?._id || (user as any)?.id || localStorage.getItem("temp_user_id") || null}
                                                                initialComments={Array.isArray(post.comments) ? post.comments : []}
                                                                onCommentAdded={(newComment) => handleCommentAdded(post.id, newComment)}
                                                                onCommentDeleted={(commentId) => {
                                                                    setPosts(prev => prev.map(p => {
                                                                        if (p.id !== post.id) return p;
                                                                        return { ...p, comments: (p.comments || []).filter((c: any) => (c._id || c.id) !== commentId) };
                                                                    }));
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </Card>
                                            );
                                        })
                                )}

                                {activeTab !== "shorts" && visibleItems < posts.length && (
                                    <div className="flex justify-center pt-8">
                                        <Button
                                            onClick={loadMore}
                                            disabled={isLoading}
                                            className="h-14 px-10 rounded-[20px] bg-white border border-orange-100 text-sacred-orange font-black uppercase tracking-widest hover:bg-orange-50 hover:scale-105 transition-all shadow-sm"
                                        >
                                            {isLoading ? "Loading Sacred Stories..." : "View More Experiences"}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:hidden flex flex-col gap-8 order-3">
                            <RealDevoteeSidebar journeys={devoteeJourneys} reviews={devoteeReviews} posts={posts} showCommunityOnly />
                        </div>

                        <div className="hidden lg:block lg:col-span-4">
                            <RealDevoteeSidebar journeys={devoteeJourneys} reviews={devoteeReviews} posts={posts} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <AlertDialog open={!!postToDelete} onOpenChange={() => setPostToDelete(null)}>
                <AlertDialogContent className="rounded-[32px] border-none shadow-2xl p-8 max-w-md z-[100]">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-black text-gray-900 tracking-tight mb-2">
                            Delete Spiritual Story?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600 text-base leading-relaxed">
                            Are you sure you want to remove this experience from the sacred wall? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-8 gap-3">
                        <AlertDialogCancel className="h-12 px-6 rounded-2xl border-orange-100 text-gray-500 font-bold hover:bg-orange-50 transition-all outline-none">
                            Keep Story
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            className="h-12 px-8 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all border-none outline-none"
                        >
                            Confirm Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {activeShareId && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                        <ShareWaveMenu
                            postId={activeShareId}
                            postTitle={posts.find(p => p.id === activeShareId)?.templeName || "Sacred Story"}
                            onClose={() => setActiveShareId(null)}
                        />
                    </div>
                </div>
            )}

            <UploadShortModal
                isOpen={isShortModalOpen}
                onClose={() => setIsShortModalOpen(false)}
                onSuccess={() => loadAllPosts()}
            />

            {/* Shorts Pop-out Viewer */}
            {activePopOutIndex !== null && (
                <ShortsViewer
                    shorts={posts.filter(p => p.videoUrl || p.mediaType === 'video')}
                    initialIndex={activePopOutIndex}
                    onClose={() => setActivePopOutIndex(null)}
                    currentUserId={(user as any)?._id || (user as any)?.id || localStorage.getItem("temp_user_id") || null}
                    onEdit={handleEditStart}
                    onDelete={(id) => setPostToDelete(id)}
                    isEditing={!!postToEdit}
                />
            )}

            {/* Edit Description Modal */}
            <AlertDialog open={!!postToEdit} onOpenChange={() => { setPostToEdit(null); setEditDescription(""); }}>
                <AlertDialogContent className="rounded-[32px] border-none shadow-2xl p-8 max-w-lg z-[100]">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-black text-gray-900 tracking-tight mb-2">
                            Edit Your Sacred Story
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600 text-base leading-relaxed">
                            Refine your reflection to better share your spiritual experience.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="mt-6">
                        <textarea
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            className="w-full h-40 p-5 rounded-[24px] border border-orange-100 focus:ring-2 focus:ring-sacred-orange focus:border-transparent resize-none font-medium text-gray-700 outline-none transition-all"
                            placeholder="Share your spiritual journey..."
                        />
                    </div>

                    <AlertDialogFooter className="mt-8 gap-3">
                        <AlertDialogCancel className="h-12 px-6 rounded-2xl border-orange-100 text-gray-500 font-bold hover:bg-orange-50 transition-all outline-none">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleEditSubmit}
                            className="h-12 px-8 rounded-2xl bg-sacred-orange text-white font-bold hover:bg-orange-600 transition-all border-none outline-none"
                        >
                            Update Story
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DevoteeWallPage;
