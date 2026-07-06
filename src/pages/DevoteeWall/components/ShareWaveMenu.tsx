import React, { useState, useEffect } from "react";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface SocialPlatform {
    name: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    url: string;
}

interface ShareWaveMenuProps {
    postId: string;
    postTitle: string;
    onClose?: () => void;
}

const ShareWaveMenu: React.FC<ShareWaveMenuProps> = ({ postId, postTitle, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            if (onClose) onClose();
        }, 500); // Wait for animations to finish
    };

    const shareUrl = `${window.location.origin}/devotee-wall?post=${postId}`;
    
    const platforms: SocialPlatform[] = [
        { 
            name: "WhatsApp", 
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" alt="WhatsApp" />, 
            color: "#25D366", 
            bgColor: "bg-white",
            url: `https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle + " " + shareUrl)}`
        },
        { 
            name: "Facebook", 
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" className="w-5 h-5" alt="Facebook" />, 
            color: "#1877F2", 
            bgColor: "bg-white",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        },
        { 
            name: "LinkedIn", 
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-5 h-5" alt="LinkedIn" />, 
            color: "#0A66C2", 
            bgColor: "bg-white",
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        },
        { 
            name: "Instagram", 
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="w-5 h-5" alt="Instagram" />, 
            color: "#E4405F", 
            bgColor: "bg-white",
            url: `https://www.instagram.com/`
        },
        { 
            name: "X", 
            icon: <span className="font-black text-black text-lg leading-none">X</span>, 
            color: "#000000", 
            bgColor: "bg-white",
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(shareUrl)}`
        },
        { 
            name: "Copy Link", 
            icon: <Link2 className="w-5 h-5 text-gray-600" />, 
            color: "#6B7280", 
            bgColor: "bg-white",
            url: "copy"
        }
    ];

    const handleShare = (platform: SocialPlatform) => {
        if (platform.url === "copy") {
            navigator.clipboard.writeText(shareUrl);
            toast.success("✨ Blessing link copied to clipboard!");
        } else {
            window.open(platform.url, '_blank', 'width=600,height=400');
        }
        handleClose();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ width: 0, opacity: 0, scale: 0.9 }}
                    animate={{ width: 'auto', opacity: 1, scale: 1 }}
                    exit={{ width: 0, opacity: 0, scale: 0.9 }}
                    onMouseLeave={handleClose}
                    className="flex items-center gap-2.5 bg-sacred-orange px-4 py-2 rounded-full shadow-2xl shadow-orange-200/50 h-[56px] border border-white/20 origin-left overflow-hidden"
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        className="text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap ml-2 mr-3"
                    >
                        Share
                    </motion.span>
                    
                    <div className="flex items-center gap-2">
                        {platforms.map((platform, index) => (
                            <motion.button
                                key={platform.name}
                                onClick={() => handleShare(platform)}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{ 
                                    y: 0, 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: { delay: index * 0.08, type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.25, 
                                    rotate: 6,
                                    transition: { duration: 0.2, delay: 0 } // No delay on hover!
                                }}
                                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:shadow-xl ${platform.bgColor} border border-orange-50/20`}
                                title={platform.name}
                            >
                                {platform.icon}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShareWaveMenu;
