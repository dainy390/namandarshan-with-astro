import React, { useState, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, X, Film, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";

interface UploadShortModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

const UploadShortModal: React.FC<UploadShortModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const { isUserAuthenticated, user } = useAuth();
    const [file, setFile] = useState<File | string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [description, setDescription] = useState("");
    const [templeName, setTempleName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isUserAuthenticated) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            validateAndSetFile(selectedFile);
        }
    };
    const handleFileChangeClose = () => {
        setFile(null);
        setPreviewUrl(null);
        setError(null);
        setIsUploading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }
    const validateAndSetFile = (selectedFile: File) => {
        setError(null);

        // 1. Check file type
        const allowedTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
        if (!allowedTypes.includes(selectedFile.type)) {
            setError("Please upload a valid video file (MP4, MOV, AVI, or WEBM).");
            return;
        }


        // 3. Check duration
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.muted = true;
        video.playsInline = true;

        const cleanup = () => {
            if (video.src) {
                window.URL.revokeObjectURL(video.src);
                video.src = "";
            }
        };

        video.onloadedmetadata = () => {
            const duration = video.duration;
            cleanup();

            // Removed strict 20s limit as per user request to allow "any short"
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        };



        video.src = URL.createObjectURL(selectedFile);
        video.load(); // Explicitly trigger load
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) {
            validateAndSetFile(droppedFile);
        }
    };

    const handleUpload = async () => {
        if (!file || !description) {
            toast.error("Please provide both a video and a description.");
            return;
        }

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append('video', file);
            formData.append('description', description);
            formData.append('templeName', templeName);
            formData.append('mediaType', 'video');

            // Add user identity (matches PostCreationBox logic)
            const userName = user?.name || localStorage.getItem("devotee_name") || "Blessed Devotee";
            const userAvatar = user?.avatar || localStorage.getItem("user.profileImage") || "";
            const optimizedAvatar = (userAvatar?.startsWith('data:') && userAvatar.length > 2000000)
                ? ""
                : userAvatar;

            formData.append("userId", user?._id || "");
            formData.append("userName", userName);
            formData.append("userAvatar", optimizedAvatar);
            formData.append("userEmail", user?.email || "");

            const response = await fetch(getApiUrl('/api/posts/shorts'), {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: formData
            });

            if (response.ok) {
                toast.success("🙏 Your sacred short has been uploaded to the wall!");
                onSuccess?.();
                handleClose();
            } else {
                const data = await response.json();
                toast.error(data.message || "Failed to upload short. Please try again.");
            }
        } catch (err) {
            console.error("Upload error:", err);
            toast.error("An unexpected error occurred during upload.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleClose = () => {
        if (isUploading) return;

        // Clear all states to prevent lagging or stale data on next open
        setFile(null);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
            setPreviewUrl(null);
        }
        setDescription("");
        setTempleName("");
        setError(null);
        setIsUploading(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[520px] rounded-[48px] border-none shadow-2xl p-0 overflow-hidden bg-white z-[100]">
                <DialogHeader className="p-8 pb-4 bg-gradient-to-br from-orange-50/50 to-white border-b border-orange-100/50">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-sacred-orange shadow-lg shadow-orange-200 flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <Film className="w-6 h-6" />
                        </div>
                        <div>
                            <DialogTitle className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-1">
                                Share a Sanatan Short
                            </DialogTitle>
                            <DialogDescription className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                                Inspire the Naman Parivaar
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="px-10 py-12 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {!file ? (
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`relative border-2 border-dashed rounded-[32px] p-16 flex flex-col items-center justify-center gap-6 transition-all cursor-pointer group overflow-hidden ${error ? 'border-red-200 bg-red-50/30' : 'border-orange-100 bg-orange-50/20 hover:bg-orange-50/40 hover:border-sacred-orange/40 hover:shadow-2xl hover:shadow-orange-100/50'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="video/*"
                                onChange={handleFileChange}
                            />
                            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-sacred-orange group-hover:scale-110 transition-all duration-500 border-4 border-orange-50">
                                <Upload className="w-10 h-10" />
                            </div>
                            <div className="text-center relative z-10">
                                <p className="font-black text-xl text-gray-900 tracking-tight">Tap to share your darshan</p>
                                <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">MP4, MOV • Max 25MB • 20s</p>
                            </div>

                            {error && (
                                <div className="absolute bottom-4 left-4 right-4 bg-red-500 text-white px-4 py-3 rounded-2xl flex items-center gap-3 text-xs font-black uppercase tracking-tight animate-in fade-in slide-in-from-bottom-2 shadow-lg shadow-red-500/20">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    {error}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-10 pr-2">
                            <div className="relative rounded-[40px] overflow-hidden bg-zinc-950 aspect-[9/16] max-h-[380px] mx-auto shadow-2xl border-4 border-white group ring-1 ring-black/5">
                                <video
                                    src={previewUrl || ""}
                                    className="w-full h-full object-cover"
                                    controls
                                />
                                <button
                                    onClick={() => { handleFileChangeClose(); setPreviewUrl(null); }}
                                    className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all shadow-2xl"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute top-5 left-5 bg-emerald-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-xl border-2 border-white/20">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Divine Quality
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end px-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Spiritual Reflection</label>
                                        <span className={`text-[10px] font-black ${description.length > 250 ? 'text-red-500' : 'text-sacred-orange'}`}>
                                            {description.length}/280
                                        </span>
                                    </div>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value.slice(0, 280))}
                                        placeholder="Describe your divine experience..."
                                        className="w-full h-36 rounded-[32px] bg-gray-50/50 border-2 border-orange-50/50 focus:border-sacred-orange focus:bg-white p-6 text-sm font-medium focus:ring-8 focus:ring-sacred-orange/5 transition-all resize-none shadow-sm placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-2">Sacred Location</label>
                                    <input
                                        type="text"
                                        value={templeName}
                                        onChange={(e) => setTempleName(e.target.value)}
                                        placeholder="Temple name or Sacred City..."
                                        className="w-full h-16 rounded-[28px] bg-gray-50/50 border-2 border-orange-50/50 focus:border-sacred-orange focus:bg-white px-6 text-sm font-medium focus:ring-8 focus:ring-sacred-orange/5 transition-all shadow-sm placeholder:text-gray-300"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <DialogFooter className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                    <Button
                        variant="ghost"
                        onClick={handleClose}
                        className="h-14 px-8 rounded-full font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={!file || !description || isUploading}
                        onClick={handleUpload}
                        className="h-14 flex-grow rounded-full bg-sacred-orange text-white font-black uppercase tracking-widest hover:bg-orange-600 shadow-xl shadow-orange-500/20 disabled:opacity-50 transition-all gap-3"
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Syncing Darshan...
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="w-5 h-5" />
                                Post Now
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UploadShortModal;
