import { useState, useEffect } from "react";
import { MapPin, ArrowRight, Layers, ChevronRight, RefreshCw, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getApiUrl } from "@/utils/api";
import DevoteeContributionCard from "@/pages/DevoteeWall/components/DevoteeContributionCard";
import RealDevoteeSidebar from "@/pages/DevoteeWall/components/RealDevoteeSidebar";
import { devoteeJourneys, devoteeReviews } from "@/data/devoteeWallData";

const DevoteeWall = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(getApiUrl('/api/posts'));
            if (response.ok) {
                const dbPosts = await response.json();
                
                // Map the DB posts to the UI structure (matching DevoteeWallPage)
                const mappedPosts = Array.isArray(dbPosts) ? dbPosts.slice(0, 3).map((p: any) => ({
                    id: p._id || p.id,
                    userName: p.userName || "Blessed Devotee",
                    userAvatar: p.userAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${p._id || 'spiritual'}`,
                    comment: p.description || "",
                    image: (p.image && typeof p.image === 'string') 
                        ? (p.image.startsWith('http') ? p.image : getApiUrl(p.image)) 
                        : null,
                    location: p.placeName ? `${p.placeName}${p.stateName ? ', ' + p.stateName : ''}` : (p.location || "Sacred Space"),
                    templeName: p.templeName || "Sacred Temple",
                    date: p.createdAt ? (new Date(p.createdAt).toLocaleDateString()) : 'Recently',
                    likes: p.likes || 0,
                    comments: p.comments?.length || 0
                })) : [];
                
                setPosts(mappedPosts);
            }
        } catch (error) {
            console.error("Failed to sync community wall:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="my-12 animate-fade-in relative z-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-100 pb-8 px-2 max-w-7xl mx-auto">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-orange-100 p-1.5 rounded-lg">
                            <Layers className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-orange-600 font-bold tracking-widest text-[10px] uppercase">Community Impact</span>
                    </div>
                    <h2 className="font-display text-4xl font-extrabold text-[#5d1414] mb-2 leading-tight">
                        Sanatan Wall
                    </h2>
                    <p className="text-gray-500 max-w-md text-[14px] leading-relaxed">
                        Journey through the eyes of the community. See real moments, shared devotion, and sacred stories.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/devotee-wall" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-5 h-auto text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-orange-100 flex items-center justify-center gap-2 group border-none">
                            Explore Full Wall
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Button 
                        variant="outline"
                        className="w-full sm:w-auto border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-8 py-5 h-auto text-sm font-bold transition-all"
                        onClick={() => document.getElementById('templeName')?.focus()}
                    >
                        Post Your Story
                    </Button>
                </div>
            </div>

            {/* Social Grid Layout */}
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Feed (70%) */}
                    <div className="lg:w-[70%] space-y-2">
                        <div className="space-y-0">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-[40px] border border-dashed border-orange-200">
                                    <RefreshCw className="w-12 h-12 text-orange-400 animate-spin mb-4" />
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Syncing real darshan...</p>
                                </div>
                            ) : posts.length === 0 ? (
                                <div className="text-center py-20 bg-white/50 rounded-[40px] border border-dashed border-gray-200">
                                    <Sparkles className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                    <p className="text-gray-400 font-medium italic">Be the first to share your sacred journey!</p>
                                </div>
                            ) : (
                                posts.map((contribution) => (
                                    <DevoteeContributionCard key={contribution.id} {...contribution} />
                                ))
                            )}
                        </div>
                        
                        <div className="pt-8 text-center bg-gray-50/50 rounded-[40px] py-16 border border-dashed border-orange-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-orange-50">
                                <ChevronRight className="w-6 h-6 text-orange-400" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">That's just the beginning!</h4>
                            <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">Discover thousands of more spiritual journeys on our dedicated wall page.</p>
                            <Link to="/devotee-wall">
                                <Button 
                                    className="bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 rounded-full px-10 py-4 h-auto font-black transition-all duration-500 shadow-sm"
                                >
                                    View All Sanatan Stories
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Sidebar (30%) */}
                    <div className="lg:w-[30%]">
                        <RealDevoteeSidebar 
                            journeys={devoteeJourneys} 
                            reviews={devoteeReviews} 
                            posts={posts}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevoteeWall;
