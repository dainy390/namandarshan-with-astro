import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { getApiUrl, getApiBaseUrl } from "@/utils/api";
import { io } from "socket.io-client";
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, Sparkles, Send, LogIn } from "lucide-react";

interface PollOption {
    label: string;
    votes: number;
    _id?: string;
}

interface PollData {
    _id: string;
    question: string;
    options: PollOption[];
}

const PollWidget: React.FC<{ userId: string | null }> = ({ userId: propUserId }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Use prop userId or fallback to/generate a temp_user_id
    const [userId, setUserId] = useState<string | null>(propUserId || localStorage.getItem('temp_user_id'));

    useEffect(() => {
        if (propUserId) {
            setUserId(propUserId);
        } else {
            let tid = localStorage.getItem('temp_user_id');
            if (!tid) {
                tid = 'guest_' + Math.random().toString(36).substring(2, 15);
                localStorage.setItem('temp_user_id', tid);
            }
            setUserId(tid);
        }
    }, [propUserId]);

    const [poll, setPoll] = useState<PollData | null>(null);
    const [userVote, setUserVote] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [otherValue, setOtherValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPoll = async () => {
        try {
            const apiBase = getApiUrl('/api/polls/active');
            const url = new URL(apiBase.startsWith('http') ? apiBase : window.location.origin + apiBase);
            
            // Use either state userId or the one we just detected
            const currentId = userId || propUserId || localStorage.getItem('temp_user_id');
            if (currentId) url.searchParams.append('userId', currentId);
            
            const response = await fetch(url.toString());
            const data = await response.json();
            if (data.success && data.poll) {
                setPoll(data.poll);
                setUserVote(data.userVote);
                if (data.userVote === "Other") setOtherValue(data.otherValue || "");
            } else {
                throw new Error("Invalid poll data");
            }
        } catch (err) {
            console.error("Poll fetch failed, using fallback:", err);
            // Fallback for visual continuity if API fails
            setPoll({
                _id: "fallback",
                question: "Which is your favorite God? 🙏",
                options: [
                    { label: "Krishna Ji", votes: 1240 },
                    { label: "Ram Ji", votes: 1560 },
                    { label: "Mahadev Ji", votes: 1890 },
                    { label: "Mata Rani", votes: 980 },
                    { label: "Other", votes: 450 }
                ]
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPoll();

        const socket = io(getApiBaseUrl());
        socket.on('poll_updated', (data: { pollId: string; options: PollOption[] }) => {
            setPoll(prev => {
                if (prev && data.pollId === prev._id) {
                    return { ...prev, options: data.options };
                }
                return prev;
            });
        });

        return () => {
            socket.disconnect();
        };
    }, [userId]); // Only re-fetch if userId changes

    const handleVote = async () => {
        if (!poll || !selectedOption || isSubmitting) return;
        
        if (!userId) {
            toast.error("Unable to track your devotion. Please refresh and try again. 🙏");
            return;
        }

        if (selectedOption === "Other" && !otherValue.trim()) {
            toast.error("Please enter the name of your favorite God 🙏");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(getApiUrl(`/api/polls/${poll._id}/vote`), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    optionLabel: selectedOption,
                    otherValue: selectedOption === "Other" ? otherValue : undefined
                })
            });

            const data = await response.json();
            if (data.success) {
                setUserVote(selectedOption);
                setPoll(data.poll);
                toast.success("🙏 Your devotion has been recorded! Jai Shri Ram!");
            } else {
                toast.error(data.message || "Failed to submit vote");
            }
        } catch (err) {
            toast.error("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) return <div className="h-48 animate-pulse bg-gray-50 rounded-[32px]" />;
    if (!poll) return null;

    const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
    const hasVoted = !!userVote;

    return (
        <Card className="card-light-sacred p-8 border-none bg-white space-y-6 overflow-hidden relative group">
            <div className="absolute -top-6 -right-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-sacred-orange" />
            </div>

            <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-sacred-orange fill-sacred-orange animate-pulse" />
                <h3 className="font-black text-gray-900 tracking-tighter uppercase text-lg">Sacred Poll</h3>
            </div>

            <div className="space-y-4">
                <p className="text-[17px] font-black text-gray-800 leading-tight">
                    {poll.question}
                </p>

                <div className="space-y-3 pt-2">
                    {poll.options.map((option) => {
                        const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
                        const isSelected = selectedOption === option.label;
                        const isUserChoice = userVote === option.label;

                        return (
                            <div key={option.label} className="relative">
                                {!hasVoted ? (
                                    <button
                                        onClick={() => setSelectedOption(option.label)}
                                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 font-bold text-sm flex items-center justify-between
                                            ${isSelected 
                                                ? "border-sacred-orange bg-orange-50 text-sacred-orange" 
                                                : "border-gray-100 bg-white text-gray-600 hover:border-orange-100 hover:bg-orange-50/30"}
                                        `}
                                    >
                                        {option.label}
                                        {isSelected && <div className="w-2 h-2 rounded-full bg-sacred-orange" />}
                                    </button>
                                ) : (
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between text-[13px] font-black uppercase tracking-tight mb-1">
                                            <span className={isUserChoice ? "text-sacred-orange" : "text-gray-500"}>
                                                {option.label} {isUserChoice && " (Your Choice)"}
                                                {isUserChoice && option.label === "Other" && otherValue && `: ${otherValue}`}
                                            </span>
                                            <span className="text-gray-400">{percentage}%</span>
                                        </div>
                                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full transition-all duration-1000 ease-out rounded-full ${isUserChoice ? "bg-sacred-orange" : "bg-orange-200"}`}
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {!hasVoted && selectedOption === "Other" && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <Input
                            placeholder="Type God's name..."
                            value={otherValue}
                            onChange={(e) => setOtherValue(e.target.value)}
                            className="h-12 bg-gray-50 border-orange-100 rounded-xl focus-visible:ring-sacred-orange font-bold text-sacred-orange placeholder:text-gray-400"
                        />
                    </div>
                )}

                {!hasVoted && (
                    <Button
                        onClick={handleVote}
                        disabled={!selectedOption || isSubmitting}
                        className="w-full h-14 rounded-2xl bg-sacred-orange text-white font-black uppercase tracking-[0.1em] shadow-xl shadow-orange-100 hover:scale-[1.02] active:scale-95 transition-all gap-3 mt-2"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>Submit Blessing <Send className="w-4 h-4" /></>
                        )}
                    </Button>
                )}

                <div className="pt-4 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        {totalVotes} Devotees Participating
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default PollWidget;
