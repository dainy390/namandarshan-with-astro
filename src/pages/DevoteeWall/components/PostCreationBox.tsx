import React, { useState, useRef, useEffect } from "react";
import { Camera, Send, X, Film } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";

interface PostCreationBoxProps {
    onUploadShortClick?: () => void;
}

const PostCreationBox: React.FC<PostCreationBoxProps> = ({ onUploadShortClick }) => {
    const [inputText, setInputText] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [compressedFile, setCompressedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useAuth();
    const [userProfileImage, setUserProfileImage] = useState<string | null>(
        (user?.avatar && user.avatar.trim() !== "") ? user.avatar : localStorage.getItem("user.profileImage")
    );
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Synchronize avatar when updated in user context or local
    useEffect(() => {
        const updateAvatar = () => {
            const avatar = user?.avatar;
            const local = localStorage.getItem("user.profileImage");

            // Strictly check for empty strings or 'DELETED' sentinel
            if (avatar === "" || local === "" || local === "DELETED") {
                setUserProfileImage("");
            } else {
                setUserProfileImage((avatar && avatar.trim() !== "") ? avatar : ((local && local !== "DELETED") ? local : ""));
            }
        };

        updateAvatar();

        window.addEventListener("avatar_changed", updateAvatar);
        window.addEventListener("profile_update", updateAvatar);

        return () => {
            window.removeEventListener("avatar_changed", updateAvatar);
            window.removeEventListener("profile_update", updateAvatar);
        };
    }, [user?.avatar]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Limit to 2MB
            if (file.size > 2 * 1024 * 1024) {
                toast.error("Images must be smaller than 2MB 🙏");
                return;
            }

            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImagePreview(result); // Set preview immediately for reliability

                const img = new Image();
                img.onload = () => {
                    // Create a canvas for compression
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Max dimensions
                    const MAX_SIZE = 1200;
                    if (width > height) {
                        if (width > MAX_SIZE) {
                            height *= MAX_SIZE / width;
                            width = MAX_SIZE;
                        }
                    } else {
                        if (height > MAX_SIZE) {
                            width *= MAX_SIZE / height;
                            height = MAX_SIZE;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);

                    // Convert to compressed Blob for submission only
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const sacredFile = new File([blob], "spiritual-journey.jpg", { type: 'image/jpeg' });
                            setCompressedFile(sacredFile);
                        }
                    }, 'image/jpeg', 0.82); // High quality compression
                };
                img.src = result;
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
        setCompressedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };



    const handlePost = async () => {
        if (!inputText.trim() && !selectedImage) return;

        setIsSubmitting(true);

        try {
            const data = new FormData();
            data.append("description", inputText);

            if (compressedFile) {
                // Sacred Compression: Convert the compressed file for upload
                data.append("image", compressedFile);
            } else if (selectedImage) {
                // Fallback for non-compressed images
                data.append("image", selectedImage);
            }

            data.append("postType", "devotee_story");

            // Add user identity
            const userName = user?.name || localStorage.getItem("devotee_name") || "Blessed Devotee";

            // Prioritize the real profile image from user context or localStorage
            const userAvatar = user?.avatar || localStorage.getItem("user.profileImage") || "";

            // Avoid sending huge base64 strings in the metadata if they exceed 2MB
            const optimizedAvatar = (userAvatar?.startsWith('data:') && userAvatar.length > 2000000)
                ? ""
                : userAvatar;

            console.log(`[PostCreation] Payload breakdown:
              - Image Blob Size: ${compressedFile ? (compressedFile.size / 1024).toFixed(2) : 0} KB
              - Avatar Size: ${(optimizedAvatar?.length || 0) / 1024} KB
              - Total Body Length: ~${(JSON.stringify({ description: inputText, userId: user?._id, userName, userAvatar: optimizedAvatar }).length / 1024).toFixed(2)} KB
            `);

            data.append("userId", user?._id || "");
            data.append("userName", userName);
            data.append("userAvatar", optimizedAvatar);
            data.append("userEmail", user?.email || "");

            const targetUrl = getApiUrl("/api/posts");
            const response = await fetch(targetUrl, {
                method: "POST",
                body: data
            });

            if (response.ok) {
                const savedPost = await response.json();

                // Notify other components (Feed)
                window.dispatchEvent(new CustomEvent("naman_post_created", { detail: savedPost }));

                setInputText("");
                removeImage();
                toast.success("🙏 Your sacred journey has been shared with the community!");
            } else {
                const errData = await response.json();
                console.error(`[API Error] Status: ${response.status} at ${targetUrl}:`, errData);
                toast.error(errData.message || `Failed to connect to the sacred gateway (Status ${response.status}).`);
            }
        } catch (err) {
            const currentApi = getApiUrl("/api/posts");
            console.error(`[Network Error] Failed to reach ${currentApi}:`, err);

            if (window.location.protocol === "https:" && currentApi.startsWith("http://")) {
                toast.error("Blocked: Mixed Content. Your production site is HTTPS but your API is HTTP. Please contact support.");
            } else if (err instanceof TypeError && err.message.includes('Content Security Policy')) {
                toast.error("Content Security Policy Blocked the request. Please check your browser or contact the divine administrator.");
            } else {
                toast.error(`Divine Connection Error. The sacred gateway at namandarshan.com could not be reached. (Details in Console)`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-[32px] p-6 shadow-2xl shadow-orange-100/30 border-2 border-sacred-orange flex flex-col gap-6 group transition-all card-sacred-hover">
            <div className="flex items-center gap-4 w-full">
                {/* User Avatar */}
                <div className="w-14 h-14 rounded-full bg-sacred-orange shadow-lg shadow-orange-200 flex items-center justify-center text-white text-2xl font-bold border-2 border-white flex-shrink-0 overflow-hidden">
                    {userProfileImage ? (
                        <img src={userProfileImage} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                        <span className="mb-0.5 leading-none uppercase">
                            {user?.name ? user.name.charAt(0) : "ॐ"}
                        </span>
                    )}
                </div>

                {/* Input Bar */}
                <div className="flex-grow relative flex flex-col justify-center">
                    <textarea
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value);
                            // Auto-resize logic
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                        placeholder={window.innerWidth < 768 ? "Post Here" : "Share your darshan experience..."}
                        className="w-full min-h-[56px] max-h-[200px] bg-gray-50/50 border-none rounded-2xl pl-6 pr-24 py-4 text-gray-700 font-medium placeholder:text-gray-400 focus:ring-1 focus:ring-sacred-orange outline-none resize-none overflow-y-auto transition-all"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handlePost();
                            }
                        }}
                        rows={1}
                    />

                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        {/* Image Upload Trigger */}
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="p-2.5 text-sacred-orange/40 hover:text-sacred-orange hover:bg-orange-50 rounded-xl transition-all"
                            title="Add Photos"
                        >
                            <Camera className="w-6 h-6" />
                        </button>

                        {/* Shorts Upload Trigger */}
                        <button
                            onClick={onUploadShortClick}
                            className="p-2.5 text-blue-400/50 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
                            title="Upload Short"
                        >
                            <Film className="w-6 h-6" />
                        </button>

                        {/* Send Button */}
                        <button
                            onClick={handlePost}
                            disabled={isSubmitting || (!inputText.trim() && !imagePreview)}
                            className={`p-2.5 rounded-xl transition-all ${(inputText.trim() || imagePreview) && !isSubmitting
                                    ? "text-sacred-orange hover:bg-orange-50"
                                    : "text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-sacred-orange border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Send className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/png, image/jpeg, image/jpg, image/webp, image/gif, image/*"
                    />
                </div>
            </div>

            {/* Image Preview Area */}
            {imagePreview && (
                <div className="relative mt-2 ml-1 animate-in fade-in zoom-in duration-300 lg:ml-[72px]">
                    <div className="relative rounded-[24px] overflow-hidden border-2 border-orange-100 shadow-xl group/preview max-w-full lg:max-w-[500px] bg-gray-50/50">
                        <img
                            src={imagePreview}
                            alt="Selected preview"
                            className="w-full h-auto max-h-[450px] object-contain block" // Changed to object-contain for full image
                        />
                        <button
                            onClick={removeImage}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all shadow-2xl scale-90 hover:scale-100"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostCreationBox;
