import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import blogImage from "@/assets/blogs/kedarnath.jpg";
import CommentSection from "@/components/common/CommentSection";


const KedarnathLegend = () => {
    const tableOfContents = [
        { id: "legend", title: "The Legend of Pandavas" },
        { id: "bull-form", title: "The Bull Form & Divine Hump" },
        { id: "architecture", title: "Architectural Marvel" },
        { id: "why-visit", title: "Why Visit?" },
        { id: "plan-yatra", title: "Plan Your Yatra" }
    ];

    const recentPosts = [
        { title: "Mysteries of Jagannath Puri: Science or Miracle?", link: "/blogs/mysteries-of-jagannath-puri" },
        { title: "Char Dham Yatra: Complete Guide", link: "/char-dham-yatra" },
        { title: "Guided Darshan Assistance Services Explained", link: "/darshan" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="The Legend of Kedarnath" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-orange-500" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                {/* Title Section */}
                                <div className="p-8 md:p-10">
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        The Legend of Kedarnath: The Divine Hump & the Pandavas' Redemption
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <span>📅 20 January 2026</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="sticky top-40 md:top-48 lg:top-52">
                                    <img src={blogImage} alt="Kedarnath Temple" className="w-full h-auto" />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <p className="text-xl font-medium text-slate-800 border-l-4 border-orange-500 pl-6 italic">
                                        Nestled at an altitude of 3,583 meters in the Garhwal Himalayas, Kedarnath is not just a temple; it is a direct portal to the spiritual history of India.
                                    </p>

                                    <section id="legend">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">The Legend of Pandavas: Seeking Redemption</h2>
                                        <p className="mb-4">
                                            The story begins after the devastating Mahabharata war. Though victorious, the Pandavas were consumed by the guilt of "Gotra Hatya" (killing of kin) and "Brahmana Hatya". They sought the counsel of Lord Krishna, who advised them that only Lord Shiva could absolve them of these colossal sins.
                                        </p>
                                        <p>
                                            Burning with a desire for peace, the brothers journeyed to Varanasi. However, Lord Shiva, convinced that their sins were too grave, chose to evade them.
                                        </p>
                                    </section>

                                    <section id="bull-form" className="bg-slate-50 p-6 rounded-xl">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">The Bull Form & The Divine Hump</h2>
                                        <p className="mb-4">
                                            At Guptkashi, Shiva took the form of a humped bull to hide within a herd of cattle. The brothers, spotting something divine about a particular bull, surrounded the herd. Bhima, the strongest, stood astride two mountains.
                                        </p>
                                        <p>
                                            As Bhima reached out to catch him, the bull dived into the earth. Legend says that while the bull's hump remained at Kedarnath, its limbs appeared at four other locations forming the **Panch Kedar**.
                                        </p>
                                    </section>

                                    <section id="architecture">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Architectural Marvel: Built by Pandavas, Rebuilt by Adi Shankara</h2>
                                        <p className="mb-4">
                                            The original temple at Kedarnath was built by the Pandavas themselves using massive grey stone slabs. The structure we see today was revived in the 8th century by **Adi Shankaracharya**.
                                        </p>
                                        <p>
                                            During the **2013 floods**, a massive boulder (the **Shiva Shila**) rolled down and stopped inches behind the temple, diverting the torrents and saving the shrine—a living testimony to divine protection.
                                        </p>
                                    </section>

                                    <section id="why-visit">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Visit?</h2>
                                        <p>
                                            The energy at Kedarnath is unlike anywhere else. Surrounded by snow-clad peaks, the air vibrates with continuous chants of "Om Namah Shivay". It's a place of profound stillness.
                                        </p>
                                    </section>

                                    <section id="plan-yatra" className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                                        <h3 className="text-3xl font-bold mb-4">🙏 Plan Your Kedarnath Yatra</h3>
                                        <p className="text-lg mb-6 opacity-90">We handle Guided Darshan Assistance, Helicopter bookings, and Premium stays.</p>
                                        <div className="flex flex-row justify-center sm:justify-start gap-2 sm:gap-4 w-full">
                                            <Link to="/darshan/kedarnath-dham-vipdarshan" className="flex-1">
                                                <Button size="lg" className="w-full bg-white text-orange-700 hover:bg-orange-50 font-bold text-xs sm:text-lg h-14 py-2 px-2 sm:px-8 whitespace-normal text-center leading-tight">
                                                    Get Guided Assistance
                                                </Button>
                                            </Link>
                                            <Link to="/kedarnath-yatra" className="flex-1">
                                                <Button size="lg" variant="outline" className="w-full border-white text-orange-700 hover:bg-white/10 font-bold text-xs sm:text-lg h-14 py-2 px-2 sm:px-8 whitespace-normal text-center leading-tight">
                                                    View Packages
                                                </Button>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Recent Posts */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 text-white bg-primary px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Recent Posts</h3>
                                    <div className="space-y-4 mt-6">
                                        {recentPosts.map((post, index) => (
                                            <Link
                                                key={index}
                                                to={post.link}
                                                className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0 border-slate-100"
                                            >
                                                <p className="text-sm font-medium text-slate-800 hover:text-primary line-clamp-2">
                                                    {post.title}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KedarnathLegend;