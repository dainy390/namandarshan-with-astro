import React, { useEffect, useRef, useState } from "react";
import { Heart, MessageCircle, Share2, Music, Volume2, VolumeX, Play, Loader2, Edit3, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getApiUrl } from "@/utils/api";
import CommentSection from "./CommentSection";

interface Short {
    id?: string;
    _id?: string;
    userId: string;
    videoUrl: string;
    userName: string;
    userAvatar?: string;
    description: string;
    likes: number;
    comments?: any[];
    commentsCount?: number;
    templeName?: string;
}

interface ShortVideoProps {
    short: Short;
    onEnded: () => void;
    currentUserId?: string | null;
    onEdit?: (short: any) => void;
    onDelete?: (id: string) => void;
    isEditing?: boolean;
    onInteraction?: () => void;
    isMuted?: boolean;
    onToggleMute?: () => void;
}

const ShortVideo: React.FC<ShortVideoProps> = ({ short, onEnded, currentUserId, onEdit, onDelete, isEditing, onInteraction, isMuted = true, onToggleMute }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showComments, setShowComments] = useState(false);

    // Internal state for reactive updates
    const [likes, setLikes] = useState(short.likes || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [localComments, setLocalComments] = useState(short.comments || []);
    const [isLoading, setIsLoading] = useState(true);

    // Sync muted state directly to video element due to React quirks
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const isOwner = currentUserId && (short.userId === currentUserId);

    const resolvedVideoUrl = short.videoUrl?.startsWith('http')
        ? short.videoUrl
        : (short.videoUrl ? getApiUrl(short.videoUrl) : "");

    useEffect(() => {
        if (!resolvedVideoUrl) {
            setIsLoading(false);
            return;
        }

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play().catch(() => { setIsPlaying(false); });
                } else {
                    videoRef.current?.pause();
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleLike = async (e: React.MouseEvent) => {
        e.stopPropagation();
        onInteraction?.();
        const action = isLiked ? 'unlike' : 'like';

        // Optimistic UI
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);

        try {
            const response = await fetch(getApiUrl(`/api/posts/${short._id || short.id}/like`), {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action })
            });

            if (!response.ok) {
                // Revert
                setIsLiked(isLiked);
                setLikes(short.likes || 0);
            }
        } catch (err) {
            console.error("Failed to update like:", err);
            setIsLiked(isLiked);
            setLikes(short.likes || 0);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleShare = async (e: React.MouseEvent) => {
        e.stopPropagation();
        const shareData = {
            title: `Sacred Short by ${short.userName}`,
            text: short.description,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                // We can't use toast here easily without importing it, 
                // but let's assume it's available or just alert for now
                alert("Sacred link copied to clipboard! 🙏");
            }
        } catch (err) {
            console.error("Share failed:", err);
        }
    };

    return (
        <div ref={containerRef} className="w-full h-full snap-start snap-always relative bg-black flex items-center justify-center overflow-hidden">
            <video
                key={resolvedVideoUrl}
                ref={videoRef}
                src={resolvedVideoUrl}
                onEnded={onEnded}
                loop={false}
                muted={isMuted}
                playsInline
                autoPlay
                preload="auto"
                className={`w-full h-full object-contain cursor-pointer transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onClick={togglePlay}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => { setIsLoading(false); setIsPlaying(true); }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedData={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                onLoadedMetadata={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />

            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-900/40 backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-sacred-orange border-t-transparent rounded-full animate-spin" />
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">Divine Content Loading...</span>
                </div>
            )}

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Play className="w-10 h-10 text-white fill-current ml-1" />
                    </div>
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

            {/* Right Action Sidebar */}
            {!isEditing && (
                <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-20 pointer-events-auto">
                    {isOwner && (
                        <>
                            <div className="flex flex-col items-center gap-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-14 w-14 rounded-full bg-sacred-orange/20 backdrop-blur-xl border-2 border-sacred-orange/30 text-sacred-orange hover:bg-sacred-orange/40"
                                    onClick={(e) => { e.stopPropagation(); onEdit?.(short); }}
                                >
                                    <Edit3 className="w-8 h-8" />
                                </Button>
                                <span className="text-sacred-orange text-[11px] font-black uppercase tracking-tighter shadow-sm">Edit</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-14 w-14 rounded-full bg-red-500/20 backdrop-blur-xl border-2 border-red-500/30 text-red-500 hover:bg-red-500/40"
                                    onClick={(e) => { e.stopPropagation(); onDelete?.(short._id || short.id || ""); }}
                                >
                                    <Trash2 className="w-8 h-8" />
                                </Button>
                                <span className="text-red-500 text-[11px] font-black uppercase tracking-tighter shadow-sm">Delete</span>
                            </div>
                        </>
                    )}

                    <div className="flex flex-col items-center gap-1">
                        <Button
                            size="icon"
                            variant="ghost"
                            className={`h-14 w-14 rounded-full bg-black/30 backdrop-blur-xl border-2 border-white/10 hover:bg-white/20 ${isLiked ? 'text-red-500 border-red-500/50' : 'text-white'}`}
                            onClick={handleLike}
                        >
                            <Heart className={`w-8 h-8 ${isLiked ? 'fill-current' : ''}`} />
                        </Button>
                        <span className="text-white text-[13px] font-black shadow-sm">{likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <Button
                            size="icon"
                            variant="ghost"
                            className={`h-14 w-14 rounded-full bg-black/30 backdrop-blur-xl border-2 border-white/10 hover:bg-white/20 ${showComments ? 'text-sacred-orange border-sacred-orange/50' : 'text-white'}`}
                            onClick={(e) => { e.stopPropagation(); setShowComments(!showComments); onInteraction?.(); }}
                        >
                            <MessageCircle className="w-8 h-8" />
                        </Button>
                        <span className="text-white text-[13px] font-black shadow-sm">{localComments.length}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="h-14 w-14 rounded-full bg-black/30 backdrop-blur-xl border-2 border-white/10 text-white hover:bg-white/20"
                            onClick={handleShare}
                        >
                            <Share2 className="w-8 h-8" />
                        </Button>
                        <span className="text-white text-[11px] font-black uppercase tracking-tighter">Share</span>
                    </div>

                </div>
            )}

            {/* Bottom Info Section */}
            {!isEditing && (
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 pointer-events-none">
                    <div className="flex items-center gap-4 mb-4 pointer-events-auto">
                        <div className="w-12 h-12 rounded-full bg-sacred-orange border-2 border-white flex items-center justify-center text-white font-black text-xl">
                            {(short.userName || "ॐ").charAt(0)}
                        </div>
                        <span className="text-white font-black text-xl drop-shadow-lg">{short.userName || "Sacred Devotee"}</span>
                    </div>
                    <p
                        className="text-white/90 text-base font-medium mb-4 line-clamp-2 max-w-[85%] pointer-events-auto cursor-pointer hover:text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); setShowComments(true); }}
                    >
                        {short.description}
                    </p>
                </div>
            )}

            {/* Comments Overlay */}
            {showComments && (
                <div
                    className="absolute inset-0 z-[40] bg-black/60 backdrop-blur-md animate-in slide-in-from-bottom duration-300 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute inset-x-0 bottom-0 h-[75%] bg-white rounded-t-[40px] p-6 shadow-2xl flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Divine Comments</h3>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-orange-50 text-gray-400 h-10 w-10"
                                onClick={() => setShowComments(false)}
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </div>
                        <div className="flex-1 overflow-y-auto hide-scrollbar">
                            <CommentSection
                                postId={short._id || short.id || ""}
                                postOwnerId={short.userId}
                                currentUserId={currentUserId}
                                initialComments={localComments}
                                onCommentAdded={(newComment) => setLocalComments(prev => [newComment, ...prev])}
                                onCommentDeleted={(commentId) => setLocalComments(prev => prev.filter(c => (c._id || c.id) !== commentId))}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

interface ShortsViewerProps {
    shorts: Short[];
    initialIndex?: number;
    onClose?: () => void;
    currentUserId?: string | null;
    onEdit?: (short: any) => void;
    onDelete?: (id: string) => void;
    isEditing?: boolean;
}

const ShortsViewer: React.FC<ShortsViewerProps> = ({ shorts = [], initialIndex = 0, onClose, currentUserId, onEdit, onDelete, isEditing }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const [globalIsMuted, setGlobalIsMuted] = useState(false); // Play with sound by default inside viewer

    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const targetScrollTop = initialIndex * container.clientHeight;
                container.scrollTo({ top: targetScrollTop, behavior: 'auto' });
                setIsReady(true);
            }
        }, 100); // Slightly longer delay for stability
        return () => clearTimeout(timer);
    }, [initialIndex, shorts.length]);

    const displayShorts = shorts.length === 1 ? [shorts[0], shorts[0]] : shorts;

    const handleVideoEnded = (index: number) => {
        if (!isAutoScrollPaused && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const nextIndex = (index + 1) % displayShorts.length;
            container.scrollTo({ top: nextIndex * container.clientHeight, behavior: 'smooth' });
        }
    };

    if (!shorts || shorts.length === 0) return null;

    return (
        <div className={`fixed inset-0 ${isEditing ? 'z-[40]' : 'z-[60]'} flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300 ${isEditing ? 'pointer-events-none' : ''}`}>
            {/* Close Button */}
            {!isEditing && (
                <Button
                    onClick={(e) => { e.stopPropagation(); onClose?.(); }}
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 z-[70] text-white hover:bg-white/20 rounded-full h-12 w-12 bg-black/20 backdrop-blur-sm"
                >
                    <X className="w-8 h-8" />
                </Button>
            )}

            <div className="relative w-full max-w-[450px] h-[95vh] lg:h-[90vh] bg-black lg:rounded-[40px] overflow-hidden border-x lg:border-[4px] border-white/10 shadow-2xl">
                <div
                    ref={scrollContainerRef}
                    className="w-full h-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
                    style={{ visibility: isReady ? 'visible' : 'hidden' }}
                >
                    {displayShorts.map((short, index) => (
                        <ShortVideo
                            key={`${short._id || short.id || index}-${index}`}
                            short={short}
                            onEnded={() => handleVideoEnded(index)}
                            currentUserId={currentUserId}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            isEditing={isEditing}
                            onInteraction={() => setIsAutoScrollPaused(true)}
                            isMuted={globalIsMuted}
                            onToggleMute={() => setGlobalIsMuted(!globalIsMuted)}
                        />
                    ))}
                </div>

                {!isReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                        <Loader2 className="w-10 h-10 text-sacred-orange animate-spin" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShortsViewer;
