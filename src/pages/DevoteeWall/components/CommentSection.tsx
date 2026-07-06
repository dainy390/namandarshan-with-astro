import React, { useState } from "react";
import { Send, User, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";

interface Comment {
    _id?: string;
    userId?: string;
    userName: string;
    userAvatar?: string;
    text: string;
    createdAt: string | Date;
    isOptimistic?: boolean;
}

interface CommentSectionProps {
    postId: string;
    postOwnerId: string;
    currentUserId: string | null;
    initialComments: Comment[];
    onCommentDeleted: (commentId: string) => void;
    onCommentAdded: (newComment: Comment) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ 
    postId, 
    postOwnerId, 
    currentUserId,
    initialComments, 
    onCommentAdded,
    onCommentDeleted 
}) => {
    const { user } = useAuth();
    const [commentText, setCommentText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleAddComment = async () => {
        if (!commentText.trim()) return;
        if (!currentUserId) {
            toast.error("Please login to post comments 🙏");
            return;
        }

        const userName = user?.name || localStorage.getItem("devotee_name") || "Devotee";
        const userId = currentUserId; 
        const userAvatar = user?.avatar || localStorage.getItem("user.profileImage") || "";

        // Check if this is a demo post (IDs are short or numeric)
        const isDemoPost = postId.length < 10;

        if (isDemoPost) {
            // Sacred Simulation: Allow commenting on demo posts for testing/visuals
            const newComment: Comment = {
                userId,
                userName,
                userAvatar,
                text: commentText.trim(),
                createdAt: new Date(),
                _id: 'demo-' + Date.now(),
                isOptimistic: false // Treat as permanent for the current session
            };
            onCommentAdded(newComment);
            setCommentText("");
            toast.success("🙏 Your blessings have been shared (Demo Post)!");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(getApiUrl(`/api/posts/${postId}/comment`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    userName,
                    userAvatar,
                    text: commentText.trim()
                })
            });

            if (!response.ok) throw new Error('Failed to post comment');
            
            const data = await response.json(); 
            
            // Extract new comment or use placeholder for optimistic UI
            const newComment: Comment = (Array.isArray(data) ? data[0] : (data.comment || data)) || {
                userId,
                userName,
                userAvatar,
                text: commentText.trim(),
                createdAt: new Date(),
                _id: 'temp-' + Date.now(),
                isOptimistic: true // Help the parent component identify this as optimistic
            };

            onCommentAdded(newComment);
            setCommentText("");
            toast.success("🙏 Your comment has been shared!");
        } catch (error) {
            console.error("Error adding comment:", error);
            toast.error("Failed to share comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!commentId) return;
        
        setIsDeleting(commentId);
        try {
            const response = await fetch(getApiUrl(`/api/posts/${postId}/comment/${commentId}`), {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                    'x-user-id': currentUserId || ''
                }
            });

            if (response.ok) {
                onCommentDeleted(commentId);
                toast.success("🙏 Comment removed.");
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
            toast.error("Could not remove comment. Please try again.");
        } finally {
            setIsDeleting(null);
        }
    };

    return (
        <div className="mt-6 pt-6 border-t border-orange-50 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Comment List */}
            <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {initialComments.length === 0 ? (
                    <div className="text-center py-6">
                        <p className="text-xs font-bold text-gray-300 uppercase tracking-widest italic">Be the first to share your blessings 🙏</p>
                    </div>
                ) : (
                    initialComments.map((comment, index) => (
                        <div key={comment._id || index} className="flex gap-3 group/comment animate-in fade-in slide-in-from-left-2 duration-300">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 overflow-hidden border border-orange-50 flex items-center justify-center">
                                {/* Live Identity Override for Comments: Always use current user avatar for their comments */}
                                {(comment.userId === currentUserId && (user?.avatar || localStorage.getItem("user.profileImage"))) ? (
                                    <img src={user?.avatar || localStorage.getItem("user.profileImage") || ""} alt={comment.userName} className="w-full h-full object-cover" />
                                ) : comment.userAvatar ? (
                                    <img src={comment.userAvatar} alt={comment.userName} className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-4 h-4 text-sacred-orange" />
                                )}
                            </div>
                            <div className="flex-grow">
                                <div className="bg-gray-50/80 rounded-2xl p-3 inline-block max-w-full">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[11px] font-black text-gray-900 tracking-tight">{comment.userName}</span>
                                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">
                                            {typeof comment.createdAt === 'string' ? new Date(comment.createdAt).toLocaleDateString() : 'Just now'}
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-gray-700 leading-snug">{comment.text}</p>
                                </div>
                                
                                {/* Delete Action - Visible for Author or Post Owner (Enhanced for owner visibility) */}
                                {(comment.userId === currentUserId || postOwnerId === currentUserId) && (
                                    <button 
                                        onClick={() => comment._id ? handleDeleteComment(comment._id!) : onCommentDeleted(index.toString())}
                                        disabled={!!isDeleting}
                                        className="opacity-40 hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 transition-all self-center ml-1"
                                        title="Remove comment"
                                    >
                                        {isDeleting === comment._id ? (
                                            <div className="w-3.5 h-3.5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <Trash2 className="w-4 h-4" />
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-3 bg-gray-50/50 p-2 rounded-2xl border border-orange-50/30">
                <div className="w-9 h-9 rounded-full bg-sacred-orange flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {localStorage.getItem("devotee_name")?.charAt(0) || "ॐ"}
                </div>
                <div className="flex-grow relative">
                    <Input 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Type your comment..."
                        className="h-10 border-none bg-transparent focus-visible:ring-0 text-sm placeholder:text-gray-400"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isSubmitting) {
                                handleAddComment();
                            }
                        }}
                    />
                </div>
                <Button 
                    onClick={handleAddComment}
                    disabled={isSubmitting || !commentText.trim()}
                    size="icon"
                    className="w-9 h-9 rounded-xl bg-sacred-orange hover:bg-orange-600 shadow-md shadow-orange-100 transition-all flex-shrink-0"
                >
                    {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <Send className="w-4 h-4" />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default CommentSection;
