import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogs, Blog } from "@/data/blogData";

const BlogSidebar = () => {
    // Get the latest 3 blogs
    // Specific blogs requested by the user
    const specificBlogLinks = [
        "/blog/vedic-astrology-predictions-global-tensions-2026",
        "/blog/vedic-vs-western-astrology-difference",
        "/blog/sun-sign-vs-moon-sign-difference",
        "/blog/vedic-astrology-temple-remedies",
        "/blog/april-full-moon-2026-pink-moon-guide"
    ];

    const latestBlogs = specificBlogLinks
        .map(link => blogs.find(blog => blog.link === link))
        .filter((blog): blog is Blog => !!blog);

    return (
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                    Spiritual Articles
                </h3>
                <Link 
                    to="/blogs" 
                    className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1 group"
                >
                    View All
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="space-y-4 flex-grow">
                {latestBlogs.map((blog, index) => (
                    <Link 
                        key={index} 
                        to={blog.link}
                        className="group flex gap-4 items-center"
                    >
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-sm shrink-0">
                            <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-orange-600 mb-1">
                                <span>{blog.date}</span>
                            </div>
                            <h4 className="font-bold text-stone-900 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 text-sm">
                                {blog.title}
                            </h4>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <h5 className="font-bold text-orange-900 text-sm mb-2">Explore spiritual guides</h5>
                <Link 
                    to="/blogs"
                    className="flex items-center gap-2 text-orange-600 text-xs font-bold hover:gap-3 transition-all underline decoration-orange-300 underline-offset-4"
                >
                    View more stories <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </div>
    );
};

export default BlogSidebar;
