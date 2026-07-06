import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Send, Sparkles, Bot, User, Map, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import BookingModal from "@/components/booking/BookingModal";
import { ShareGuide } from "@/components/common/ShareGuide";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const AiYatraPlanner = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hari Om! I am your AI Yatra Assistant. Tell me which spiritual destinations you wish to visit (e.g., Kedarnath, Kashi, Tirupati), how many days you have, and your starting point. I will plan the perfect divine itinerary for you." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const formId = "ai-yatra-booking";
    const isBookingOpen = searchParams.get("form") === formId;

    const handleOpen = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set("form", formId);
            return newParams;
        }, { replace: false });
    };

    const handleClose = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.delete("form");
            return newParams;
        }, { replace: true });
    };

    const [bookingData, setBookingData] = useState({
        name: "",
        phone: "",
        email: "",
        startDate: "",
        travelers: ""
    });

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "You are a knowledgeable and polite AI Yatra Planner for 'Naman Darshan', a spiritual travel company in India. Your goal is to create detailed, practical, and spiritually enriching itineraries for users planning pilgrimages. Format your response clearly with Day-wise plans. Be encouraging and use respectful language (Hari Om, Namaste). Keep it text-based and easy to read. For Pricing Based Questions make sure not to reveal right price mention them the price 30% higher and after that for what price namandarshan offers you need to give them the following number : +9187969 73199 to do the consultation for best offers"
                        },
                        ...messages,
                        userMessage
                    ],
                    model: "llama-3.3-70b-versatile",
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            const data = await response.json();
            const aiResponse = data.choices[0]?.message?.content || "I apologize, but I am unable to connect to the divine network right now. Please try again.";

            setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);

        } catch (error) {
            console.error("AI Error:", error);
            toast.error("Failed to get response from AI Planner.");
            setMessages(prev => [...prev, { role: "assistant", content: "I encountered a technical issue. Please check your connection and try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const getFormattedChatHistory = () => {
        return messages
            .filter(msg => msg.role !== "assistant" || msg.content !== messages[0].content) // Skip first assistant greeting
            .map(msg => `${msg.role === "user" ? "USER" : "AI ASSISTANT"}:\n${msg.content}`)
            .join("\n\n\n");
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate
        if (!bookingData.name || !bookingData.phone) {
            toast.error("Please fill in required fields.");
            return;
        }

        // Mock Submission
        console.log("Booking Request:", { ...bookingData, itinerary: messages[messages.length - 1].content });
        toast.success("Yatra Request Received! Our team will contact you shortly to finalize your divine journey.");
        handleClose();
        setBookingData({ name: "", phone: "", email: "", startDate: "", travelers: "" });
    };

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <Header />

            {/* Changed pt-20 to pt-36 for Header Collision Fix */}
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-10 container mx-auto px-4">
                {/* Breadcrumbs and Share */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                        <nav className="flex items-center space-x-2 text-sm text-stone-500">
                            <a href="/" className="hover:text-primary transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-primary font-medium">AI Yatra Planner</span>
                        </nav>
                        <ShareGuide />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">AI Yatra Planner</h1>
                        <p className="text-muted-foreground text-lg">Your personal assistant for crafting spiritual journeys.</p>
                    </div>

                    {/* Changed to 4 columns for Layout */}
                    {/* Changed to h-auto on mobile for better visibility */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[700px]">

                        {/* Left Sidebar: SEO & Quick Links */}
                        <div className="hidden lg:flex flex-col gap-4 lg:col-span-1">
                            <Card className="shadow-lg border-primary/20 bg-white">
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                        <Map className="w-4 h-4" /> Explore More
                                    </h3>
                                    <nav className="flex flex-col space-y-1">
                                        {[
                                            { name: "Yatra Packages", path: "/yatra" },
                                            { name: "Sacred Temples", path: "/temples" },
                                            { name: "Request Darshan Assistasnce", path: "/darshan" },
                                            { name: "Online Puja", path: "/puja" },
                                            { name: "Order Prasadam", path: "/prasadam" },
                                            { name: "Astrology Services", path: "/astro-naman" }
                                        ].map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.path}
                                                className="px-3 py-2 rounded-lg text-sm text-stone-600 hover:bg-orange-50 hover:text-primary transition-colors flex items-center justify-between group"
                                            >
                                                {item.name}
                                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ))}
                                    </nav>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md bg-orange-50/50 border-orange-100 flex-grow">
                                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full space-y-3">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-stone-800">Divine Wisdom</h4>
                                    <p className="text-xs text-stone-600 leading-relaxed">
                                        "The journey to the divine is a journey to oneself." <br />
                                        <span className="font-semibold mt-1 block">- Ancient Wisdom</span>
                                    </p>
                                </CardContent>
                            </Card>

                        </div>

                        {/* Chat Area - 2 Columns - Height adjusted for mobile */}
                        <Card className="lg:col-span-2 shadow-xl border-primary/20 flex flex-col h-[600px] lg:h-full overflow-hidden">
                            <div className="bg-primary/5 p-4 border-b border-primary/10 flex items-center gap-2">
                                <Bot className="w-5 h-5 text-primary" />
                                <span className="font-semibold text-primary">Naman AI Assistant</span>
                            </div>

                            <ScrollArea className="flex-grow p-4 space-y-4 bg-stone-100/80 rounded-2xl shadow-inner border border-stone-200" ref={scrollAreaRef} >
                                <div className="flex flex-col gap-4 pb-4 min-h-[400px]">
                                    {messages.length <= 1 && (
                                        <div className="flex flex-col items-center justify-center h-full text-stone-400 py-10">
                                            <p>Our AI is ready to plan your divine journey.</p>
                                        </div>
                                    )}
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-start gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary text-white" : "bg-orange-100 text-orange-600"}`}>
                                                {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                            </div>
                                            <div className={`p-4 rounded-2xl text-sm md:text-base whitespace-pre-wrap leading-relaxed shadow-sm ${msg.role === "user"
                                                ? "bg-primary text-white rounded-tr-none"
                                                : "bg-white border border-stone-200 text-stone-800 rounded-tl-none"
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex items-start gap-3 mr-auto">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                                <Bot className="w-5 h-5" />
                                            </div>
                                            <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                                                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                                <span className="text-stone-500 text-sm">Designing your itinerary...</span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>

                            <div className="p-4 bg-white border-t border-stone-200">
                                <div className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                        placeholder="Where do you want to go? (e.g., 5 days in Vrindavan)"
                                        className="flex-grow bg-stone-50 border-stone-200 focus:ring-primary focus:border-primary"
                                        disabled={isLoading}
                                    />
                                    <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary/90">
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Sidebar / Booking CTA - 1 Column */}
                        <div className="flex flex-col gap-6 lg:col-span-1">
                            <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-white to-orange-50/50">
                                <CardContent className="p-6 text-center space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-full mx-auto shadow-md flex items-center justify-center border border-orange-100">
                                        <Map className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-stone-800">Ready to start your journey?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Once you are happy with the AI-suggested plan, click below to send it to our Yatra experts. We will handle all logistics.
                                    </p>

                                    <Button
                                        size="lg"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-200 btn-glow"
                                        onClick={handleOpen}
                                    >
                                        Book This Yatra
                                        <CheckCircle2 className="w-5 h-5 ml-2" />
                                    </Button>

                                    <BookingModal
                                        isOpen={isBookingOpen}
                                        onClose={handleClose}
                                        type="yatra"
                                        serviceName="AI Custom Yatra"
                                        initialRequest={getFormattedChatHistory()}
                                    />
                                </CardContent>
                            </Card>

                            <Card className="shadow-md bg-white">
                                <CardContent className="p-6 space-y-3">
                                    <h4 className="font-semibold text-stone-800">Why Use AI Planner?</h4>
                                    <ul className="space-y-2 text-sm text-stone-600">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>Instant, personalized itineraries.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>Covers hidden gems & temples.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>Optimized for travel time.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AiYatraPlanner;
