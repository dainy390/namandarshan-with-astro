import React, { useState } from "react";
import { 
    Heart, 
    MessageCircle, 
    Share2, 
    MapPin, 
    MoreHorizontal, 
    Bookmark, 
    Users,
    Sparkles,
    Navigation,
    HeartOff
} from "lucide-react";
import CommentModal from "./CommentModal";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";


const ExpandableText: React.FC<{ text: string, userName: string }> = ({ text, userName }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const words = text.split(/\s+/);
    
    if (words.length <= 30) {
        return (
            <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                <span className="font-black text-gray-900 mr-2 uppercase tracking-wide">{userName}</span>
                {text}
            </p>
        );
    }
    
    const displayedText = isExpanded ? text : words.slice(0, 30).join(" ") + "...";
    
    return (
        <div className="mb-2">
            <p className="text-gray-700 leading-relaxed text-[15px] font-medium inline">
                <span className="font-black text-gray-900 mr-2 uppercase tracking-wide">{userName}</span>
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

interface DevoteeContributionCardProps {
    userName: string;
    userAvatar?: string;
    templeName: string;
    location: string;
    comment: string;
    image: string;
    likes: number;
    comments: number;
    date: string;
}

const DevoteeContributionCard: React.FC<DevoteeContributionCardProps> = ({
    userName,
    userAvatar,
    templeName,
    location,
    comment,
    image,
    likes: initialLikes,
    comments,
    date,
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);
    const [isSaved, setIsSaved] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleLike = () => {
        setIsAnimating(true);
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `Spiritual Journey at ${templeName}`,
                text: `Check out ${userName}'s experience at ${templeName} on Namandarshan!`,
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    return (
        <Card className="card-light-sacred card-sacred-hover overflow-hidden p-0 border-none bg-white">
            {/* Header Section */}
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-sacred-orange to-yellow-400">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-orange-50 flex items-center justify-center">
                                {userAvatar ? (
                                    <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-orange-600 font-bold text-xl uppercase">
                                        {userName ? userName.charAt(0) : "ॐ"}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" title="Verified Devotee" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-x-2">
                            <h3 className="font-bold text-gray-900 group-hover:text-sacred-orange transition-colors text-lg leading-tight uppercase tracking-wide">{userName}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-sacred-orange font-black text-sm tracking-tight">{templeName}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-bold uppercase tracking-widest mt-1.5 opacity-60">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-sacred-orange" />
                                {location}
                            </div>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <div className="flex items-center gap-1">
                                {date}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-gray-600 transition-colors">
                    <MoreHorizontal className="w-6 h-6" />
                </button>
            </div>

            {/* Media Content */}
            <div 
                className="relative mx-4 mb-4 rounded-[28px] overflow-hidden bg-gray-100 cursor-pointer shadow-inner"
                onDoubleClick={handleLike}
            >
                <img
                    src={image}
                    alt={`Post by ${userName}`}
                    className="w-full h-auto min-h-[400px] max-h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Heart Pop Animation */}
                {isAnimating && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <Heart className="w-32 h-32 text-white/90 fill-white/90 animate-zoom-in-out opacity-80" />
                    </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Action Bar */}
            <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-10">
                        <button 
                            onClick={handleLike}
                            className={`flex flex-col items-center gap-1 transition-all group ${
                                isLiked ? "text-sacred-orange" : "text-gray-400 hover:text-sacred-orange"
                            }`}
                        >
                            <div className="p-2 rounded-full hover:bg-orange-50 transition-colors">
                                {isLiked ? (
                                    <Heart className="w-7 h-7 fill-sacred-orange text-sacred-orange stroke-[1.5]" />
                                ) : (
                                    <Heart className="w-7 h-7 stroke-[1.5] group-hover:scale-110 transition-transform" />
                                )}
                            </div>
                        </button>
                        
                        <button 
                            onClick={() => setIsCommentModalOpen(true)}
                            className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-500 group transition-all"
                        >
                            <div className="p-2 rounded-full hover:bg-blue-50 transition-colors text-gray-400">
                                <MessageCircle className="w-7 h-7 stroke-[1.5] group-hover:rotate-12 transition-transform" />
                            </div>
                        </button>
                        
                        <button 
                            onClick={handleShare}
                            className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-500 group transition-all"
                        >
                            <div className="p-2 rounded-full hover:bg-green-50 transition-colors">
                                <Share2 className="w-7 h-7 stroke-[1.5] group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                    
                    <button 
                        onClick={() => setIsSaved(!isSaved)}
                        className={`p-2 rounded-full transition-all ${
                            isSaved ? "bg-orange-50 text-sacred-orange" : "text-gray-300 hover:bg-orange-50 hover:text-sacred-orange"
                        }`}
                    >
                        <Bookmark className={`w-7 h-7 stroke-[1.5] ${isSaved ? "fill-sacred-orange" : ""}`} />
                    </button>
                </div>

                {/* Engagement Stats */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">

                        <span className="text-[15px] font-black text-gray-900 tracking-tight">
                            {likes.toLocaleString()} blessings
                        </span>
                    </div>

                    <div className="space-y-1.5">
                        <ExpandableText text={comment} userName={userName} />
                        <button 
                            onClick={() => setIsCommentModalOpen(true)}
                            className="text-[13px] font-bold text-muted-foreground hover:text-sacred-orange transition-colors uppercase tracking-widest pt-1"
                        >
                            View all {comments} comments
                        </button>
                    </div>
                </div>
            </div>

            {/* Comment Modal */}
            <CommentModal 
                isOpen={isCommentModalOpen} 
                onClose={() => setIsCommentModalOpen(false)} 
                templeName={templeName}
            />
        </Card>
    );
};

export default DevoteeContributionCard;
