import React, { useState, useRef, useEffect } from 'react';
import { Play, Heart, MessageCircle, Share2, MapPin, Loader2, Volume2, VolumeX, MoreHorizontal, Edit3, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getApiUrl } from '@/utils/api';

interface ShortCardProps {
    post: any;
    onPopOut?: () => void;
    onLike?: () => void;
    onCommentToggle?: () => void;
    onDelete?: (id: string) => void;
    onEdit?: (post: any) => void;
    onShare?: () => void;
    onCommentAdded?: (comment: any) => void;
    onCommentDeleted?: (commentId: string) => void;
    isCommentsExpanded?: boolean;
    currentUserId?: string | null;
    onToggleMute?: (muted: boolean) => void;
    isMuted?: boolean;
    variant?: 'grid' | 'wide';
    isBackgroundPaused?: boolean;
}

const ShortCard: React.FC<ShortCardProps> = ({ 
    post, 
    onPopOut, 
    onLike, 
    onCommentToggle,
    onEdit,
    onDelete,
    onShare,
    currentUserId,
    variant = 'grid',
    isBackgroundPaused = false
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [error, setError] = useState(false);
    const lastClickTime = useRef<number>(0);

    // Resolve URL with proper backend handling
    const resolvedVideoUrl = post.videoUrl?.startsWith('http')
        ? post.videoUrl
        : (post.videoUrl ? getApiUrl(post.videoUrl) : "");

    // Sync muted state directly to video element due to React quirks
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // Intersection Observer for Smart Autoplay
    useEffect(() => {
        if (!resolvedVideoUrl) {
            setIsLoading(false);
            return;
        }

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (videoRef.current) {
                    if (entry.isIntersecting && !isBackgroundPaused) {
                        videoRef.current.play().catch(() => {
                            // Autoplay might be blocked by browser
                            setIsPlaying(false);
                        });
                    } else {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (videoRef.current) observer.observe(videoRef.current);

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, [resolvedVideoUrl, isBackgroundPaused]);

    const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        const now = Date.now();
        const gap = now - lastClickTime.current;

        if (gap < 300) {
            onPopOut?.();
        } else {
            if (videoRef.current) {
                if (videoRef.current.paused) {
                    videoRef.current.play().catch(() => setIsPlaying(false));
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            }
        }
        lastClickTime.current = now;
    };

    if (variant === 'wide') {
        return (
            <Card className="group relative flex flex-col lg:flex-row bg-white border-orange-50 overflow-hidden rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 h-full lg:h-[500px]">
                {/* Video Section */}
                <div
                    onClick={handleInteraction}
                    className="w-full lg:w-[60%] bg-zinc-950 relative flex items-center justify-center overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-4 right-4 z-20">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMuted(!isMuted);
                            }}
                            className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 hover:bg-black/40 transition-all"
                        >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                    </div>

                    <video
                        key={resolvedVideoUrl}
                        ref={videoRef}
                        src={resolvedVideoUrl}
                        muted={isMuted}
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                        className={`w-full h-full lg:w-auto object-contain transition-all duration-1000 ${isLoading ? 'scale-110 blur-xl opacity-0' : 'scale-100 blur-0 opacity-100'}`}
                        onPlay={() => { setIsPlaying(true); setIsLoading(false); }}
                        onPause={() => setIsPlaying(false)}
                        onWaiting={() => setIsLoading(true)}
                        onLoadedData={() => setIsLoading(false)}
                        onCanPlay={() => setIsLoading(false)}
                        onError={() => { setError(true); setIsLoading(false); }}
                    />

                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-900/10 backdrop-blur-sm">
                            <Loader2 className="w-8 h-8 text-sacred-orange animate-spin" />
                            <span className="text-[10px] font-bold text-sacred-orange/60 uppercase tracking-widest">Loading Divine Short</span>
                        </div>
                    )}

                    {error && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-zinc-900/80 text-white p-4 text-center">
                            <span className="text-sm font-medium">Sacred video unavailable</span>
                            <span className="text-[10px] text-white/50 underline cursor-pointer" onClick={() => window.location.reload()}>Retry</span>
                        </div>
                    )}

                    {!isPlaying && !isLoading && !error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-sacred-orange/10 flex items-center justify-center text-sacred-orange font-bold text-xl border border-sacred-orange/20 shadow-sm">
                                    {post.userName?.charAt(0) || "ॐ"}
                                </div>
                                <div>
                                    <h3 className="font-black text-gray-900 tracking-tight">{post.userName}</h3>
                                    <div className="flex items-center text-[11px] text-gray-400 font-bold uppercase tracking-wider gap-1">
                                        <MapPin className="w-3 h-3 text-sacred-orange" />
                                        {post.location || "Sacred Space"}
                                    </div>
                                </div>
                            </div>

                            {(currentUserId === post.userId) && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-gray-400 rounded-full hover:bg-orange-50 outline-none">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl border-orange-50 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                        <DropdownMenuItem
                                            onClick={() => onEdit?.(post)}
                                            className="flex items-center gap-2 p-3 text-sm font-bold text-gray-700 hover:text-sacred-orange rounded-xl focus:bg-orange-50 cursor-pointer"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                            Edit Reflection
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => onDelete?.(post.id || post._id)}
                                            className="flex items-center gap-2 p-3 text-sm font-bold text-red-500 hover:text-red-600 rounded-xl focus:bg-red-50 cursor-pointer"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Delete Forever
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-4 font-medium italic">
                            "{post.description || post.comment}"
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-center gap-6">
                            <button onClick={onLike} className="group/btn flex flex-col items-center gap-1">
                                <Heart className={`w-6 h-6 transition-all ${post.isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-300 group-hover/btn:text-red-400'}`} />
                                <span className="text-[10px] font-bold text-gray-400">{post.likes || 0}</span>
                            </button>
                            <button onClick={onCommentToggle} className="group/btn flex flex-col items-center gap-1">
                                <MessageCircle className="w-6 h-6 text-gray-300 group-hover/btn:text-sacred-orange transition-colors" />
                                <span className="text-[10px] font-bold text-gray-400">{post.comments?.length || 0}</span>
                            </button>
                        </div>
                        <button onClick={onShare} className="p-3 rounded-2xl bg-sacred-orange/5 text-sacred-orange hover:bg-sacred-orange hover:text-white transition-all duration-300 shadow-sm">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </Card>
        );
    }

    // Default Grid Variant
    return (
        <Card
            className="group relative bg-white border-none p-0 overflow-hidden rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[9/16] max-w-[300px] w-full"
        >
            <div
                onClick={handleInteraction}
                className="relative w-full h-full bg-zinc-950 cursor-pointer overflow-hidden"
            >
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                        }}
                        className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 hover:bg-black/40 transition-all"
                    >
                        {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                    </button>
                </div>

                <video
                    key={resolvedVideoUrl}
                    ref={videoRef}
                    src={resolvedVideoUrl}
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    className={`w-full h-full object-cover transition-all duration-1000 ${isLoading ? 'scale-110 blur-xl opacity-0' : 'scale-100 blur-0 opacity-100'}`}
                    onPlay={() => { setIsPlaying(true); setIsLoading(false); }}
                    onPause={() => setIsPlaying(false)}
                    onWaiting={() => setIsLoading(true)}
                    onLoadedData={() => setIsLoading(false)}
                    onCanPlay={() => setIsLoading(false)}
                    onError={() => { setError(true); setIsLoading(false); }}
                />

                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/10 backdrop-blur-sm">
                        <Loader2 className="w-8 h-8 text-sacred-orange animate-spin" />
                    </div>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition-opacity" />

                {!isPlaying && !isLoading && !error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                    </div>
                )}

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sacred-orange flex items-center justify-center text-[10px] text-white font-black shadow-lg">
                            {post.userName?.charAt(0) || "ॐ"}
                        </div>
                        <span className="text-white text-[12px] font-black truncate drop-shadow-md">{post.userName}</span>
                    </div>
                    <p className="text-white/80 text-[10px] line-clamp-2 font-medium leading-relaxed drop-shadow-sm">
                        {post.description || post.comment}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default ShortCard;
