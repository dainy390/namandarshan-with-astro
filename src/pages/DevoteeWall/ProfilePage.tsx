import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
    Calendar, 
    Share2, 
    Plus, 
    MapPin, 
    Heart, 
    MessageCircle, 
    MoreHorizontal,
    User,
    Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";
import { devoteeJourneys, devoteeReviews } from "@/data/devoteeWallData";
import RealDevoteeSidebar from "./components/RealDevoteeSidebar";
import CommentSection from "./components/CommentSection";
import { toast } from "sonner";

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
    </Card>
);

const ProfilePage: React.FC = () => {
    const { isUserAuthenticated, user, isLoading: authLoading } = useAuth();
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState(10);
    const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());

    const fetchUserPosts = async () => {
        // Removed auth blocking to speed up initial render
        setIsLoading(true);
        try {
            const response = await fetch(getApiUrl('/api/posts'));
            if (response.ok) {
                const allPosts = await response.json();
                
                const currentId = user?._id || localStorage.getItem('temp_user_id');
                const localLikes = JSON.parse(localStorage.getItem(`liked_posts_${currentId || 'guest'}`) || "[]");

                // Filter posts for the current user
                const filtered = Array.isArray(allPosts) ? allPosts.filter((p: any) => 
                    p.userId === user?._id || p.userName === user?.name
                ).map((p: any) => {
                    const pid = p._id || p.id;
                    return {
                        ...p,
                        id: pid,
                        userName: p.userName || user?.name || "Blessed Devotee",
                        userAvatar: p.userAvatar || user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${pid || 'spiritual'}`,
                        comment: p.description || "",
                        image: (p.image && typeof p.image === 'string') 
                            ? (p.image.startsWith('http') ? p.image : getApiUrl(p.image)) 
                            : null,
                        location: p.placeName ? `${p.placeName}${p.stateName ? ', ' + p.stateName : ''}` : (p.location || "Sacred Space"),
                        templeName: p.templeName || "",
                        date: p.createdAt ? (new Date(p.createdAt).toLocaleDateString()) : 'Recently',
                        likes: p.likes || 0,
                        isLiked: (Array.isArray(p.likedBy) && currentId && p.likedBy.includes(currentId)) || localLikes.includes(pid),
                        commentsCount: p.commentsCount || (Array.isArray(p.comments) ? p.comments.length : 0),
                        rawComments: Array.isArray(p.comments) ? p.comments : [],
                        isVerified: true
                    };
                }) : [];
                
                setPosts(filtered);
            }
        } catch (error) {
            console.error("Failed to fetch user profile posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fetch immediately if we have a token hint, or once auth is definitely finished
        if (isUserAuthenticated || (!authLoading && !localStorage.getItem('userToken')) || localStorage.getItem('userToken')) {
            fetchUserPosts();
        }
    }, [isUserAuthenticated, user?._id, authLoading]);

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
            const currentComments = Array.isArray(p.rawComments) ? p.rawComments : [];
            return {
                ...p,
                rawComments: [newComment, ...currentComments],
                commentsCount: (p.commentsCount || 0) + 1
            };
        }));
    };

    const handleLike = async (postId: string) => {
        if (!user) {
            toast.error("Please login to share your blessings 🙏");
            return;
        }

        const currentId = user?._id || localStorage.getItem('temp_user_id');
        const storageKey = `liked_posts_${currentId || 'guest'}`;
        const storedLikes = JSON.parse(localStorage.getItem(storageKey) || "[]");
        const alreadyLiked = storedLikes.includes(postId);

        setPosts(prev => prev.map(p => {
            if (p.id !== postId) return p;
            if (alreadyLiked) return { ...p, likes: Math.max(0, p.likes - 1), isLiked: false };
            else return { ...p, likes: p.likes + 1, isLiked: true };
        }));

        let nextLikes;
        if (alreadyLiked) nextLikes = storedLikes.filter((id: string) => id !== postId);
        else nextLikes = [...storedLikes, postId];
        
        localStorage.setItem(storageKey, JSON.stringify(nextLikes));

        try {
            await fetch(getApiUrl(`/api/posts/${postId}/like`), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            });
        } catch (err) {
            console.error("Like error:", err);
        }
    };

    const handleDeletePost = async (postId: string) => {
        if (!window.confirm("Are you sure you want to delete this spiritual story?")) return;
        
        try {
            const response = await fetch(getApiUrl(`/api/posts/${postId}`), {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            
            if (response.ok) {
                toast.success("Post removed from your wall");
                setPosts(prev => prev.filter(p => p.id !== postId));
            }
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    if (!isUserAuthenticated && !authLoading && !localStorage.getItem('userToken')) {
        return (
            <div className="min-h-screen bg-[#faf9f6] font-sans">
                <SEO 
                    title="User Profile | Naman Darshan"
                    description="View your spiritual journey, shared stories, and devotee profile on Naman Darshan."
                />
                <Header />
                <div className="flex flex-col items-center justify-center py-20 px-4">
                    <User className="w-16 h-16 text-gray-300 lg:w-24 lg:h-24 mb-6" />
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Please Login to View Your Profile</h2>
                    <p className="text-gray-500 mb-8 text-center max-w-md">Connect with the Sanatan community to see all your shared stories and photos.</p>
                    <Link to="/login">
                        <Button className="bg-sacred-orange hover:bg-orange-700 text-white rounded-full px-10 py-6 h-auto font-black shadow-xl shadow-orange-100 transition-all hover:scale-105 active:scale-95">
                            Login Now
                        </Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf9f6] font-sans">
            <SEO 
                title={`${user?.name || 'User'} Profile | Naman Darshan`}
                description={`Spiritual profile and devotee wall of ${user?.name || 'a blessed devotee'} on Naman Darshan.`}
            />
            <Header />
            
            <div className="pt-40 md:pt-56">
                <div className="bg-white border-b border-orange-50">
                    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-sacred-orange to-yellow-400 shadow-2xl">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-orange-50 flex items-center justify-center">
                                        {user?.avatar || localStorage.getItem("user.profileImage") ? (
                                            <img src={user?.avatar || localStorage.getItem("user.profileImage") || ""} alt={user?.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-sacred-orange font-black text-4xl">{user?.name?.charAt(0) || "D"}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">{user?.name || "Loading..."}</h1>
                                </div>
                                
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-bold text-gray-600 uppercase tracking-widest">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-gray-900">{posts.length}</span> Posts
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-gray-900">{posts.reduce((acc, p) => acc + (p.likes || 0), 0)}</span> Blessings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <div className="mb-12 flex items-center justify-between">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Your Sacred Feed</h2>
                                <div className="h-1 flex-1 mx-6 bg-gradient-to-r from-orange-100 to-transparent rounded-full hidden md:block"></div>
                                <Link to="/devotee-wall" className="text-sacred-orange font-black text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
                                    Go Back
                                </Link>
                            </div>

                            <div className="space-y-12 min-h-[500px]">
                                {isLoading && posts.length === 0 ? (
                                    <>
                                        <PostSkeleton />
                                        <PostSkeleton />
                                    </>
                                ) : posts.length === 0 ? (
                                    <div className="text-center py-24 bg-white rounded-[40px] border border-dashed border-gray-100 shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Stories Yet</h3>
                                        <p className="text-gray-500 mb-8 max-w-xs mx-auto">Share your first spiritual moment with the community on the Sanatan Wall.</p>
                                        <Link to="/devotee-wall">
                                            <Button className="bg-sacred-orange hover:bg-orange-700 text-white rounded-full px-8 py-4 h-auto font-black shadow-xl shadow-orange-100 transition-all">
                                                Go to Wall
                                            </Button>
                                        </Link>
                                    </div>
                                ) : (
                                    posts.slice(0, visibleItems).map((post) => (
                                        <div key={post.id} className="bg-white rounded-[40px] shadow-sm border border-orange-50/50 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-1 text-left">
                                            <div className="p-8 md:p-10">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-14 h-14 rounded-full border-2 border-sacred-orange p-0.5 shadow-lg shadow-orange-50 overflow-hidden">
                                                            <img 
                                                                src={user?.avatar || localStorage.getItem("user.profileImage") || post.userAvatar} 
                                                                alt={post.userName} 
                                                                className="w-full h-full rounded-full object-cover" 
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-900 uppercase tracking-wide text-lg flex items-center gap-2">
                                                                {post.userName}
                                                            </h3>
                                                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-70">
                                                                <div className="flex items-center gap-1">
                                                                    <MapPin className="w-3 h-3 text-sacred-orange" />
                                                                    {post.location}
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    <Calendar className="w-3 h-3" />
                                                                    {post.date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button 
                                                            onClick={() => handleDeletePost(post.id)}
                                                            className="p-3 rounded-full text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                        <button className="p-3 rounded-full text-gray-300 hover:text-gray-600 hover:bg-gray-50 transition-all">
                                                            <MoreHorizontal className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <ExpandableText text={post.comment} />

                                                {post.image && (
                                                    <div className="relative rounded-[32px] overflow-hidden mb-8 shadow-inner bg-gray-50">
                                                        <img src={post.image} alt="Pilgrimage" className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 hover:scale-105" />
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                                    <div className="flex items-center gap-8">
                                                        <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 group/btn cursor-pointer">
                                                            <div className={`p-2 rounded-full transition-colors ${post.isLiked ? 'bg-orange-50' : 'group-hover/btn:bg-orange-50'}`}>
                                                                <Heart className={`w-6 h-6 transition-colors ${post.isLiked ? 'fill-sacred-orange text-sacred-orange' : 'text-gray-400 group-hover/btn:text-sacred-orange'}`} />
                                                            </div>
                                                            <span className="text-sm font-black text-gray-600">{post.likes}</span>
                                                        </button>
                                                        <button 
                                                            onClick={() => toggleComments(post.id)}
                                                            className="flex items-center gap-2 group/btn cursor-pointer"
                                                        >
                                                            <div className={`p-2 rounded-full transition-colors ${expandedComments.has(post.id) ? 'bg-blue-50' : 'group-hover/btn:bg-blue-50'}`}>
                                                                <MessageCircle className={`w-6 h-6 transition-colors ${expandedComments.has(post.id) ? 'fill-blue-50 text-blue-500' : 'text-gray-400 group-hover/btn:text-blue-500'}`} />
                                                            </div>
                                                            <span className="text-sm font-black text-gray-600">{post.commentsCount}</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {expandedComments.has(post.id) && (
                                                    <CommentSection
                                                        postId={post.id}
                                                        postOwnerId={post.userId || user?._id}
                                                        currentUserId={(user as any)?._id || (user as any)?.id || localStorage.getItem("temp_user_id") || null}
                                                        initialComments={Array.isArray(post.rawComments) ? post.rawComments : []}
                                                        onCommentAdded={(newComment) => handleCommentAdded(post.id, newComment)}
                                                        onCommentDeleted={(commentId) => {
                                                            setPosts(prev => prev.map(p => {
                                                                if (p.id !== post.id) return p;
                                                                return { 
                                                                    ...p, 
                                                                    rawComments: (p.rawComments || []).filter((c: any) => (c._id || c.id) !== commentId),
                                                                    commentsCount: Math.max(0, (p.commentsCount || 0) - 1)
                                                                };
                                                            }));
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}

                                {posts.length > visibleItems && (
                                    <div className="text-center pt-12">
                                        <Button 
                                            onClick={() => setVisibleItems(prev => prev + 5)}
                                            className="bg-white border-2 border-orange-100 text-gray-600 hover:bg-sacred-orange hover:text-white hover:border-sacred-orange rounded-full px-12 py-6 h-auto font-black shadow-sm transition-all"
                                        >
                                            View More
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:w-1/3 text-left">
                            <div className="sticky top-24">
                                <RealDevoteeSidebar 
                                    journeys={devoteeJourneys} 
                                    reviews={devoteeReviews} 
                                    posts={posts}
                                    showProfileOnly={true}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;
