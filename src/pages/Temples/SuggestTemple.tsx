import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";
import { 
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { 
    Clock, 
    MapPin, 
    ShieldCheck, 
    Zap, 
    Globe,
    Upload,
    X, 
    Sparkles,
    LogIn,
    Timer,
    CircleAlert,
    ArrowRight
} from "lucide-react";

const mockFeed = [
    {
        id: 1,
        user: "Anil Deshmukh",
        temple: "Somnath Temple",
        content: "NamanDarshan made it so easy for my parents to have darshan. The vibes are truly divine and the community is so helpful! Highly recommended for elderly pilgrims. 🙏",
        location: "Veraval, Gujarat",
        time: "1 hour ago",
        initial: "A",
        color: "bg-orange-600"
    },
    {
        id: 2,
        user: "Kavita Iyer",
        temple: "Meenakshi Amman",
        content: "Beautiful experience! Thanks to this platform, I could plan the entire Madurai trip for my grandmother. The information is so accurate and full of good energy.",
        location: "Madurai, TN",
        time: "4 hours ago",
        initial: "K",
        color: "bg-blue-600"
    },
    {
        id: 3,
        user: "Sanjay Chatterjee",
        temple: "Dakshineswar Kali",
        content: "Such a great initiative. Seeing my elders smile after a peaceful darshan is the best feeling. NamanDarshan is doing a wonderful job for the devotee community.",
        location: "Kolkata, WB",
        time: "7 hours ago",
        initial: "S",
        color: "bg-red-600"
    }
];

const topDevotees = [
    { rank: 1, name: "Sunita Reddy", temples: "12 Temples Visited", initial: "S", color: "bg-orange-500" },
    { rank: 2, name: "Priya Sharma", temples: "9 Temples Visited", initial: "P", color: "bg-blue-500" },
    { rank: 3, name: "Amit Tiwari", temples: "7 Temples Visited", initial: "A", color: "bg-green-600" }
];

const SuggestTemple = () => {
    const { user } = useAuth();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialName = searchParams.get("name") || "";

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                userName: user.name || prev.userName,
                email: user.email || prev.email
            }));
        }
    }, [user]);

    const [formData, setFormData] = useState({
        userName: user?.name || "",
        email: user?.email || "",
        templeName: "",
        city: "",
        state: "",
        description: "",
    });

    const [images, setImages] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [countdown, setCountdown] = useState(10);
    
    // Auth Redirect Timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showLoginModal && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (showLoginModal && countdown === 0) {
            navigate("/login", { state: { from: location.pathname } });
        }
        return () => clearInterval(timer);
    }, [showLoginModal, countdown, navigate, location.pathname]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const validFiles = [...files];

            if (validFiles.length > 0) {
                setIsSubmitting(true);
                try {
                    const compressedFiles: { file: File, preview: string }[] = await Promise.all(
                        validFiles.map(file => new Promise<{ file: File, preview: string }>((resolve) => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                const img = new Image();
                                img.onload = () => {
                                    const canvas = document.createElement('canvas');
                                    let width = img.width;
                                    let height = img.height;
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
                                    
                                    canvas.toBlob((blob) => {
                                        if (blob) {
                                            const compressedFile = new File([blob], file.name, { type: 'image/jpeg' });
                                            const preview = URL.createObjectURL(compressedFile);
                                            resolve({ file: compressedFile, preview });
                                        }
                                    }, 'image/jpeg', 0.7);
                                };
                                img.src = reader.result as string;
                            };
                            reader.readAsDataURL(file);
                        }))
                    );

                    setImages(prev => [...prev, ...compressedFiles.map(cf => cf.file)]);
                    setPreviews(prev => [...prev, ...compressedFiles.map(cf => cf.preview)]);
                    toast.success("✨ Sacred images compressed and ready!");
                } catch (err) {
                    toast.error("Failed to process images.");
                } finally {
                    setIsSubmitting(false);
                }
            }
        }
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
        setPreviews(previews.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!user) {
            setShowLoginModal(true);
            return;
        }

        if (images.length === 0) {
            toast.error("Please upload at least one sacred image");
            return;
        }

        if (!formData.description.trim()) {
            toast.error("Please write a small description for your post");
            return;
        }

        setIsSubmitting(true);
        try {
            const data = new FormData();
            data.append("description", formData.description);
            data.append("templeName", formData.templeName);
            data.append("placeName", formData.city);
            data.append("stateName", formData.state);
            data.append("userEmail", formData.email);
            data.append("postType", "temple_suggestion");
            
            if (images.length > 0) {
                data.append("image", images[0]);
            }

            const userName = formData.userName || user?.name || "Blessed Devotee";
            const userAvatar = localStorage.getItem("user.profileImage") || 
                              (user?.email ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}` : "");

            data.append("userId", user?._id || "");
            data.append("userName", userName);
            data.append("userAvatar", userAvatar);
            
            const response = await fetch(getApiUrl("/api/posts"), {
                method: "POST",
                body: data
            });

            if (response.ok) {
                const savedPost = await response.json();
                window.dispatchEvent(new CustomEvent("naman_post_created", { detail: savedPost }));
                toast.success("🙏 Your sacred story has been shared on the Sanatan Wall!");
                navigate("/devotee-wall");
            } else {
                const errData = await response.json();
                toast.error(errData.message || "Failed to post. Please try again.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            toast.error("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-sacred-cream font-body">
            <SEO
                title="Add a New Temple | Namandarshan"
                description="Join our mission to document every sacred space. Your contribution guides fellow devotees on their divine paths."
            />
            <Header />

            <main className="flex-grow pt-56 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-sacred-orange flex items-center justify-center gap-3">
                            🛕 Add a New Temple
                        </h1>
                        <div className="w-24 h-1 bg-sacred-orange/20 mx-auto rounded-full" />
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Join our mission to document every sacred space. Your contribution guides fellow devotees on their divine paths. 🙏
                        </p>
                    </div>

                    <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <Card className="card-light-sacred card-sacred-hover p-8">
                                <div className="space-y-8">
                                    <div className="flex justify-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#E8530A] text-xs font-bold uppercase tracking-wider">
                                            🏆 Community Impact
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-4xl font-bold font-display text-gray-900">Sanatan Wall</h2>
                                        <div className="text-muted-foreground leading-relaxed text-base">
                                            Journey through the eyes of the community.<br />
                                            See real moments, shared devotion, and<br />
                                            sacred stories.
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <Button 
                                            onClick={() => navigate('/devotee-wall')}
                                            className="h-14 px-8 rounded-xl bg-orange-50 border border-orange-200 text-sacred-orange flex items-center justify-center font-bold font-body hover:bg-orange-100 transition-all shadow-sm"
                                        >
                                            Explore Full Wall →
                                        </Button>
                                    </div>

                                    <div className="space-y-6 pt-8">
                                        <div className="flex justify-between items-center border-b border-orange-100/50 pb-4">
                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Community Feed</h3>
                                            <span className="px-3 py-1 bg-orange-50 text-sacred-orange text-[10px] font-bold rounded-lg uppercase tracking-wider">Most Recent</span>
                                        </div>

                                        <div className="space-y-8">
                                            {mockFeed.map((item) => (
                                                <div key={item.id} className="flex gap-5 group">
                                                    <div className={`w-14 h-14 min-w-[3.5rem] rounded-full flex items-center justify-center text-white text-xl font-bold ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                                                        {item.initial}
                                                    </div>
                                                    <div className="space-y-1.5 flex-grow">
                                                        <div className="flex flex-wrap items-center gap-x-2">
                                                            <span className="font-bold text-gray-900">{item.user}</span>
                                                            <span className="text-xs text-muted-foreground">-</span>
                                                            <span className="text-sacred-orange font-bold text-sm tracking-wide">{item.temple}</span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                                                        <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-medium pt-1.5">
                                                            <div className="flex items-center gap-1">
                                                                <MapPin className="w-3.5 h-3.5 text-sacred-orange/60" />
                                                                {item.location}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-3.5 h-3.5 text-orange-200" />
                                                                {item.time}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Top Devotees Section - RESTORED */}
                                    <div className="pt-8 border-t border-orange-100/50 space-y-6">
                                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-sacred-orange" />
                                            Top Devotees This Month
                                        </h3>
                                        <div className="space-y-5">
                                            {topDevotees.map((dev) => (
                                                <div key={dev.rank} className="flex items-center justify-between group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative">
                                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${dev.color} shadow-sm group-hover:scale-110 transition-transform`}>
                                                                {dev.initial}
                                                            </div>
                                                            <div className="absolute -left-1 -bottom-1 w-5 h-5 bg-[#E8530A] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                                                {dev.rank}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-gray-900 group-hover:text-sacred-orange transition-colors">{dev.name}</span>
                                                            <span className="text-[11px] text-muted-foreground font-medium">{dev.temples}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <Card className="card-light-sacred card-sacred-hover p-8">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-center">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-sacred-orange text-xs font-bold uppercase tracking-wider">
                                                🛕 CONTRIBUTE
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-4xl font-bold font-display text-gray-900">Add a New Temple</h2>
                                            <p className="text-muted-foreground text-sm max-w-sm">
                                                Help the community discover sacred spaces. Your contribution matters to millions of devotees.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-[14px] font-bold text-gray-900 ml-1">Your Name *</Label>
                                                <Input name="userName" value={formData.userName} onChange={handleInputChange} placeholder="Enter your name" className="form-input-light" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[14px] font-bold text-gray-900 ml-1">Your Email ID *</Label>
                                                <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="form-input-light" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-[14px] font-bold text-gray-900 ml-1">Temple Name *</Label>
                                            <Input name="templeName" value={formData.templeName} onChange={handleInputChange} placeholder="e.g. Somnath Temple" className="form-input-light text-sacred-orange font-bold text-lg" required />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-[14px] font-bold text-gray-900 ml-1">Place Name (City) *</Label>
                                                <Input name="city" value={formData.city} onChange={handleInputChange} placeholder="e.g. Veraval" className="form-input-light" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[14px] font-bold text-gray-900 ml-1">State Name *</Label>
                                                <Input name="state" value={formData.state} onChange={handleInputChange} placeholder="e.g. Gujarat" className="form-input-light" required />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-[14px] font-bold text-gray-900 ml-1">Temple Photos</Label>
                                            <div className="relative">
                                                <input type="file" multiple onChange={handleImageChange} className="hidden" id="image-upload" accept="image/*" />
                                                <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed border-orange-200 bg-orange-50/30 hover:bg-orange-50 transition-all cursor-pointer group">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <Upload className="w-8 h-8 text-sacred-orange/40 group-hover:text-sacred-orange group-hover:scale-110 transition-all mb-2" />
                                                        <p className="text-sm font-bold text-sacred-orange/60 group-hover:text-sacred-orange">Capture or Upload Images</p>
                                                    </div>
                                                </label>
                                            </div>
                                            {previews.length > 0 && (
                                                <div className="grid grid-cols-4 gap-3 mt-4">
                                                    {previews.map((preview, index) => (
                                                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-orange-100 shadow-sm group">
                                                            <img src={preview} alt="Temple preview" className="w-full h-full object-cover" />
                                                            <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 w-6 h-6 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                                                <X className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-[14px] font-bold text-gray-900 ml-1">Description *</Label>
                                            <Textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Tell us about the temple's history, significance, and your experience..." className="form-textarea-light min-h-[160px]" required />
                                        </div>

                                        <div className="pt-6">
                                            <Button type="submit" disabled={isSubmitting} className="w-full h-16 bg-gradient-to-r from-[#E8530A] to-[#F4A623] text-white text-xl font-black rounded-xl shadow-xl shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 uppercase tracking-[0.1em]">
                                                <div className="flex items-center justify-center gap-3">
                                                    <span>🙏 Submit Temple</span>
                                                </div>
                                            </Button>
                                        </div>

                                        {/* Trust Badges - RESTORED */}
                                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-4 border-t border-orange-50">
                                            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                                                <ShieldCheck className="w-4 h-4 text-sacred-orange" /> Verified
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                                                <Zap className="w-4 h-4 text-sacred-orange" /> Live 24h
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                                                <Globe className="w-4 h-4 text-sacred-orange" /> 4M+ reach
                                            </div>
                                        </div>

                                        {/* Recently Added Section - RESTORED */}
                                        <div className="bg-orange-50/30 p-8 rounded-3xl space-y-5 border border-orange-100/50 shadow-inner">
                                            <h3 className="text-[12px] font-black text-sacred-orange uppercase tracking-[0.2em] flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" />
                                                RECENTLY ADDED
                                            </h3>
                                            <ul className="space-y-4">
                                                {["Somnath Temple, Gujarat — 2 mins ago", "Kedarnath Shrine, Uttarakhand — 15 mins ago", "Meenakshi Amman, Tamil Nadu — 1 hr ago"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-bold group">
                                                        <div className="w-1.5 h-1.5 bg-sacred-orange rounded-full group-hover:scale-150 transition-transform" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
                <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none rounded-[32px] bg-white shadow-2xl">
                    <div className="bg-gradient-to-br from-[#E8530A] via-[#FF8C42] to-[#E8530A] p-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 -mr-8 -mt-8">
                            <Sparkles className="w-40 h-40" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group">
                                <LogIn className="w-10 h-10 text-white animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">Devotee Login</h2>
                                <p className="text-orange-50/90 text-sm font-bold tracking-wider uppercase">Join the Naman Parivaar 🙏</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-10 space-y-8 bg-white relative">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-5 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                                <CircleAlert className="w-6 h-6 text-[#E8530A] shrink-0 mt-1" />
                                <p className="text-gray-600 text-[15px] leading-relaxed font-bold tracking-tight">
                                    To document a new temple and share your sacred story, please sign in to your devotee account.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 py-2">
                            <div className="relative w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                    className="absolute inset-y-0 left-0 bg-[#E8530A] transition-all duration-1000 ease-linear rounded-full shadow-[0_0_10px_rgba(232,83,10,0.5)]"
                                    style={{ width: `${(countdown / 10) * 100}%` }}
                                />
                            </div>
                            <div className="flex items-center gap-2 text-sacred-orange font-black uppercase tracking-widest text-[11px]">
                                <Timer className="w-4 h-4 animate-bounce" />
                                <span>Redirecting in <span className="text-lg inline-block w-4 text-center">{countdown}</span> seconds...</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button 
                                onClick={() => navigate("/login", { state: { from: location.pathname } })}
                                className="w-full h-14 rounded-2xl bg-[#E8530A] hover:bg-[#D44A09] text-white font-black uppercase tracking-widest text-sm shadow-lg shadow-orange-200/50 group transition-all"
                            >
                                <span className="flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Login Now <ArrowRight className="w-5 h-5" />
                                </span>
                            </Button>
                            <Button 
                                variant="ghost" 
                                onClick={() => setShowLoginModal(false)}
                                className="w-full h-12 rounded-xl text-gray-400 font-bold hover:text-gray-600 hover:bg-gray-100 transition-all border border-transparent"
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SuggestTemple;
