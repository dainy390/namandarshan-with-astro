import Layout from "@/components/layout/Layout";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, UserCheck, Flower2, Gift, HandHeart } from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import SEO from "@/components/SEO";
import { blogs } from "@/data/blogData";
import { getApiUrl } from "@/utils/api";

const sidebarLinks = [
    {
        title: "Get Darshan Assistance",
        description: "Guided & Seamless Entry",
        icon: <UserCheck className="w-5 h-5" />,
        link: "/darshan",
        color: "bg-blue-50 text-blue-600 hover:bg-blue-100"
    },
    {
        title: "Book a Puja",
        description: "Perform rituals online",
        icon: <Flower2 className="w-5 h-5" />,
        link: "/puja",
        color: "bg-orange-50 text-orange-600 hover:bg-orange-100"
    },
    {
        title: "Exclusive Packages",
        description: "Complete Yatra planning",
        icon: <Gift className="w-5 h-5" />,
        link: "/exclusive-temple-darshan-packeges",
        color: "bg-purple-50 text-purple-600 hover:bg-purple-100"
    },
    {
        title: "Get Prasad",
        description: "Delivered to your home",
        icon: <Gift className="w-5 h-5" />,
        link: "/prasadam",
        color: "bg-Amber-50 text-amber-600 hover:bg-amber-100"
    },
    {
        title: "Offer Chadhava",
        description: "offerings to deity",
        icon: <HandHeart className="w-5 h-5" />,
        link: "/chadhava",
        color: "bg-rose-50 text-rose-600 hover:bg-rose-100"
    }
];

const Blogs = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [dynamicBlogs, setDynamicBlogs] = useState<any[]>([]);

    useEffect(() => {
        fetch(getApiUrl('/api/blogs?limit=1000'))
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const mapped = data.data.map((b: any) => ({
                        title: b.title,
                        excerpt: b.excerpt,
                        image: b.featuredImage,
                        date: new Date(b.publishDate || b.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
                        link: `/blog/${b.slug}`,
                        readTime: b.readTime
                    }));
                    setDynamicBlogs(mapped);
                }
            })
            .catch(err => console.error("Failed to fetch dynamic blogs:", err));
    }, []);

    const allBlogs = [...dynamicBlogs, ...blogs];

    // Sort blogs by date (latest first)
    const sortedBlogs = [...allBlogs].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <Layout>
            <SEO 
                title="Spiritual Blogs & Temple Stories" 
                description="Explore temples, darshan guides, puja services, prasad offerings, and spiritual blogs in one place."
                keywords={["Temple Blogs", "Spiritual Stories", "Hindu Mythology", "Vedic Wisdom", "Pilgrimage Guide"]}
            />
            <Container className="py-12">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                        Our Blogs
                    </h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Explore the divine history, legends, and mysteries of India's most sacred temples.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Content - Blog List */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {sortedBlogs.map((blog, index) => (
                            <Link
                                to={blog.link}
                                key={index}
                                className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-stone-100"
                            >
                                <div className="grid md:grid-cols-3 gap-0">
                                    <div className={`h-48 md:h-full w-full overflow-hidden ${/(hanuman|krishna-janmashtami|chaitra-navratri|pink-moon|satyanarayan|vastu-shanti|graha-shanti)/.test(blog.link) ? 'bg-[#FFF8F0] flex items-center justify-center p-4' : ''}`}>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className={`w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-xl ${/(hanuman|krishna-janmashtami|chaitra-navratri|pink-moon|satyanarayan|vastu-shanti|graha-shanti)/.test(blog.link) ? 'object-contain shadow-sm' : 'object-cover'}`}
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 text-xs md:text-sm text-stone-500 mb-3">
                                            <span>{blog.date}</span>
                                            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                                            <span>{blog.readTime}</span>
                                        </div>
                                        <h2 className="font-display text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                                            {blog.title}
                                        </h2>
                                        <p className="text-stone-600 mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                                            {blog.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 flex items-center text-orange-600 font-medium">
                                            Read Full Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-stone-100">
                                <h3 className="font-display text-xl font-bold text-stone-900 mb-6 pb-2 border-b border-stone-100">
                                    Quick Services
                                </h3>
                                <div className="space-y-3">
                                    {sidebarLinks.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.link}
                                            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group hover:shadow-md ${item.color}`}
                                        >
                                            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{item.title}</span>
                                                <span className="text-xs text-stone-600">{item.description}</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 ml-auto text-stone-400 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full transform rotate-12 transition-transform group-hover:scale-150 duration-700" />
                                <h3 className="font-display text-2xl font-bold mb-4 relative z-10 italic">Personalized Consultation</h3>
                                <p className="text-orange-50 mb-6 relative z-10 text-sm leading-relaxed">
                                    Connect with our expert consultants for a detailed analysis of your spiritual journey.
                                </p>
                                <Link to="/consultation">
                                    <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold py-6 rounded-xl shadow-lg transition-all relative z-10">
                                        Book Consultation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                title="Custom Yatra Request"
                type="yatra"
            />
        </Layout>
    );
};

export default Blogs;
