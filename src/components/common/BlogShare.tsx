import React from 'react';
import { Facebook, Link as LinkIcon, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

interface BlogShareProps {
    title?: string;
    pageTitle?: string;
    description?: string;
    className?: string;
}

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298l13.311 17.399z" />
    </svg>
);

const BlogShare: React.FC<BlogShareProps> = ({ title = "SHARE", pageTitle, description, className = "" }) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const displayTitle = pageTitle || (typeof document !== 'undefined' ? document.title.split('|')[0].trim() : '');
    const displayDescription = description || (typeof document !== 'undefined' ? document.querySelector('meta[name="description"]')?.getAttribute('content') || '' : '');
    
    // Format social messages
    const whatsappMessage = `Namaste \uD83D\uDE4F\n\nI found this on *Namandarshan* and thought you might like it.\n\n\uD83D\uDED5 ${displayTitle}\n\nExplore temples, darshan guides, puja services, prasad offerings, and spiritual blogs in one place.\n\nRead more here:\n${currentUrl}`;
    
    const linkedInMessage = `Namaste 🙏\n\nI found this on *Namandarshan* and thought you might like it.\n\n🛕 ${displayTitle}\n\n${displayDescription ? `${displayDescription.slice(0, 150)}${displayDescription.length > 150 ? '...' : ''}\n\n` : 'Explore temples, darshan guides, puja services, prasad offerings, and spiritual blogs in one place.\n\n'}Read more here:\n${currentUrl}`;
    
    const twitterMessage = `Namaste 🙏\n\nI found this on *Namandarshan* and thought you might like it.\n\n🛕 ${displayTitle}\n\n${displayDescription ? `${displayDescription.slice(0, 100)}${displayDescription.length > 100 ? '...' : ''}\n\n` : ''}Read more here:\n${currentUrl}\n\n#NamanDarshan #Spiritual #Temple`;
    
    const handleCopyLink = async (isInstagram = false) => {
        try {
            if (!currentUrl) throw new Error("URL undefined");
            await navigator.clipboard.writeText(currentUrl);
            if (isInstagram) {
                toast.success('Link copied! Share it on your Instagram Story or Feed.');
            } else {
                toast.success('Link copied to clipboard!');
            }
        } catch (err) {
            toast.error('Failed to copy link');
        }
    };

    const handleShare = (platform: string) => {
        if (!currentUrl) {
            toast.error("Unable to get current URL");
            return;
        }

        const encodedUrl = encodeURIComponent(currentUrl);
        const encodedTitle = encodeURIComponent(`🕉 ${displayTitle}`);

        // Try Web Share API for mobile if it's a generic share request or on mobile
        if (platform === 'native' && navigator.share) {
            navigator.share({
                title: displayTitle,
                text: `Check this out on Naman Darshan: ${displayTitle}`,
                url: currentUrl
            }).catch(() => {});
            return;
        }

        let url = '';
        switch (platform) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'linkedin':
                // Note: LinkedIn text prefill via this URL is not officially supported and may not work consistently across all platforms/browsers.
                // It opens the feed share dialog with the text pre-populated.
                const encodedLinkedInText = encodeURIComponent(linkedInMessage);
                url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedLinkedInText}`;
                break;
            case 'twitter':
                const encodedTwitterText = encodeURIComponent(twitterMessage);
                url = `https://twitter.com/intent/tweet?text=${encodedTwitterText}`;
                break;
            case 'whatsapp':
                url = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(url, '_blank');
                return;
            case 'instagram':
                handleCopyLink(true);
                return;
            default:
                return;
        }

        if (url) {
            const width = 600;
            const height = 450;
            const left = (window.innerWidth / 2) - (width / 2);
            const top = (window.innerHeight / 2) - (height / 2);
            
            // Ensure proper popup behavior
            const popup = window.open(
                url, 
                'share-dialog', 
                `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
            );
            
            if (popup) {
                popup.focus();
            } else {
                // Fallback for popup blockers
                window.open(url, '_blank');
            }
        }
    };

    return (
        <div className={`flex items-center gap-3 py-1.5 px-4 rounded-full bg-gradient-to-r from-[#FF8A3D] to-[#FF6A00] text-white shadow-sm border border-white/10 ${className}`}>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider ml-1 whitespace-nowrap">{title}</span>
            
            <div className="flex items-center gap-2 sm:gap-3">
                {/* WhatsApp */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-[#25D366] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    onClick={() => handleShare('whatsapp')}
                    title="Share on WhatsApp"
                >
                    <div className="scale-75">
                        <WhatsAppIcon />
                    </div>
                </button>
                
                {/* Facebook */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-[#1877F2] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    onClick={() => handleShare('facebook')}
                    title="Share on Facebook"
                >
                    <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </button>
                
                {/* LinkedIn */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-[#0A66C2] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    onClick={() => handleShare('linkedin')}
                    title="Share on LinkedIn"
                >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </button>

                {/* Instagram */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-[#E4405F] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    onClick={() => handleShare('instagram')}
                    title="Share on Instagram"
                >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Twitter / X */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12_rgba(0,0,0,0.15)]"
                    onClick={() => handleShare('twitter')}
                    title="Share on X"
                >
                    <div className="scale-75">
                        <XIcon />
                    </div>
                </button>
                
                {/* Copy Link */}
                <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    onClick={() => handleCopyLink(false)}
                    title="Copy Link"
                >
                    <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    );
};

export default BlogShare;
