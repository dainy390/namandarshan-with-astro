import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl } from "@/utils/api";
import { 
    Clock, 
    User, 
    Calendar, 
    Tag, 
    Facebook, 
    Twitter, 
    Link as LinkIcon,
    ChevronRight,
    Check,
    Bookmark,
    Heart,
    MessageCircle,
    Instagram,
    Linkedin,
    Share2,
    Home
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogData {
    _id: string;
    title: string;
    slug: string;
    author: string;
    publishDate: string;
    readTime: string;
    category: string;
    tags: string[];
    featuredImage: string;
    excerpt: string;
    content: string;
    faqs?: { question: string; answer: string; }[];
    relatedBlogs?: { _id: string; title: string; slug: string; featuredImage: string; publishDate: string; }[];
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];
}

const BlogTemplate = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState<BlogData | null>(null);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState<{ id: string; text: string; }[]>([]);
    const [recentBlogs, setRecentBlogs] = useState<BlogData[]>([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        
        // Fetch current blog
        fetch(getApiUrl(`/api/blogs/${slug}`))
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setBlog(data.data);
                    // Extract headings for TOC
                    const div = document.createElement('div');
                    div.innerHTML = data.data.content;
                    const headings = div.querySelectorAll('h2');
                    const tocItems = Array.from(headings).map((h, index) => {
                        const id = `heading-${index}`;
                        h.id = id; 
                        return { id, text: h.innerText };
                    });
                    setToc(tocItems);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch blog:", err);
                setLoading(false);
            });

        // Fetch recent blogs for sidebar
        fetch(getApiUrl('/api/blogs?limit=3'))
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setRecentBlogs(data.data);
                }
            })
            .catch(err => console.error("Failed to fetch recent blogs:", err));
            
    }, [slug]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareBlog = (platform: string) => {
        const url = window.location.href;
        const title = blog?.title || "Namandarshan Blog";
        
        switch (platform) {
            case 'whatsapp':
                window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " - " + url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'instagram':
                window.open(`https://www.instagram.com/`, '_blank');
                break;
        }
    };

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-stone-600 font-medium">Loading story...</p>
        </div>
    );
    
    if (!blog) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
            <h1 className="text-2xl font-bold text-stone-800 mb-4">Blog Not Found</h1>
            <Link to="/blogs">
                <Button>Back to Blogs</Button>
            </Link>
        </div>
    );

    // Inject IDs into content for scrolling
    let processedContent = blog.content;
    toc.forEach((item, index) => {
        processedContent = processedContent.replace(`<h2>${item.text}</h2>`, `<h2 id="${item.id}" class="scroll-mt-32">${item.text}</h2>`);
    });

    return (
        <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1D1D1F]">
            <SEO
                title={blog.seoTitle || `${blog.title} | Namandarshan`}
                description={blog.seoDescription || blog.excerpt}
                keywords={blog.seoKeywords || [blog.category, ...blog.tags]}
                image={blog.featuredImage}
            />
            <Header />

            <main className="flex-grow mt-44 md:mt-52 mb-20">
                <div className="container mx-auto px-4 max-w-7xl pt-10">
                    
                    {/* Top Row: Breadcrumbs & Share Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                            <Link to="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" /> Home
                            </Link>
                            <ChevronRight className="w-4 h-4 text-stone-400" />
                            <Link to="/blogs" className="hover:text-orange-600 transition-colors">Blog</Link>
                            <ChevronRight className="w-4 h-4 text-stone-400" />
                            <span className="text-orange-600 font-semibold truncate max-w-[200px] md:max-w-none">{blog.title}</span>
                        </nav>

                        {/* Share Bar (Orange Pill) */}
                        <div className="bg-orange-500 text-white rounded-full px-6 py-2 flex items-center gap-4 shadow-md shadow-orange-200">
                            <span className="font-bold text-sm uppercase tracking-wider">Share</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform"
                                    onClick={() => shareBlog('whatsapp')}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.77 11.77 0 001.59 5.92L0 24l6.135-1.61a11.75 11.75 0 005.915 1.595h.005c6.635 0 12.03-5.392 12.035-12.031a11.742 11.742 0 00-3.483-8.508z"/>
                                    </svg>
                                </button>
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform"
                                    onClick={() => shareBlog('facebook')}
                                >
                                    <Facebook className="w-4 h-4" fill="currentColor" />
                                </button>
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0A66C2] hover:scale-110 transition-transform"
                                    onClick={() => shareBlog('linkedin')}
                                >
                                    <Linkedin className="w-4 h-4" fill="currentColor" />
                                </button>
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#E4405F] hover:scale-110 transition-transform"
                                    onClick={() => shareBlog('instagram')}
                                >
                                    <Instagram className="w-4 h-4" />
                                </button>
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                                    onClick={() => shareBlog('twitter')}
                                >
                                    <span className="font-bold text-sm">X</span>
                                </button>
                                <button 
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-stone-600 hover:scale-110 transition-transform" 
                                    onClick={copyToClipboard}
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 3 Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* 1. Left Sidebar: Table of Contents */}
                        <div className="hidden lg:block lg:col-span-3 order-2 lg:order-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 h-full">
                                <h3 className="font-display text-xl font-bold text-stone-800 mb-6 border-b pb-3">
                                    Table of Contents
                                </h3>
                                {toc.length > 0 ? (
                                    <ul className="space-y-4 text-sm">
                                        {toc.map((item, index) => (
                                            <li key={index} className="flex gap-2">
                                                <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <a href={`#${item.id}`} className="text-stone-600 hover:text-orange-600 transition-colors font-medium leading-snug">
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-stone-500">No headings found.</p>
                                )}
                            </div>
                        </div>

                        {/* 2. Center Column: Main Content */}
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
                                
                                {/* Meta Tags */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" /> Updated 2026
                                    </span>
                                    <span className="bg-stone-50 text-stone-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        📍 India
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4 leading-tight">
                                    {blog.title}
                                </h1>
                                <p className="text-stone-500 text-sm mb-6 flex items-center gap-2">
                                    By <span className="font-semibold text-stone-700">{blog.author}</span> 
                                    <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                                    <span>{blog.readTime} read</span>
                                </p>

                                {/* Featured Image */}
                                <div className="rounded-xl overflow-hidden mb-8">
                                    <img 
                                        src={blog.featuredImage} 
                                        alt={blog.title} 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="blog-content mb-12">
                                    <style>{`
                                        .blog-content h2 {
                                            font-size: 1.75rem;
                                            font-weight: 700;
                                            color: #1D1D1F;
                                            margin-top: 2.5rem;
                                            margin-bottom: 1rem;
                                            font-family: inherit;
                                        }
                                        .blog-content h3 {
                                            font-size: 1.25rem;
                                            font-weight: 700;
                                            color: #2D2D2F;
                                            margin-top: 1.5rem;
                                            margin-bottom: 0.75rem;
                                        }
                                        .blog-content p {
                                            font-size: 1rem;
                                            line-height: 1.8;
                                            color: #4A4A4F;
                                            margin-bottom: 1.5rem;
                                        }
                                        .blog-content ul {
                                            list-style-type: disc;
                                            padding-left: 1.5rem;
                                            margin-bottom: 1.5rem;
                                            color: #4A4A4F;
                                        }
                                        .blog-content li {
                                            margin-bottom: 0.5rem;
                                        }
                                        .blog-content img {
                                            border-radius: 1rem;
                                            margin: 2rem auto;
                                            width: 100%;
                                            max-width: 100%;
                                            height: auto;
                                            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                                        }
                                    `}</style>
                                    <div 
                                        dangerouslySetInnerHTML={{ __html: processedContent }}
                                    />
                                </div>

                                {/* FAQs Section */}
                                {blog.faqs && blog.faqs.length > 0 && (
                                    <div className="mt-12 border-t pt-8">
                                        <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Frequently Asked Questions</h2>
                                        <div className="space-y-6">
                                            {blog.faqs.map((faq, index) => (
                                                <div key={index} className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                                    <h3 className="font-bold text-lg text-[#1D1D1F] mb-2">{faq.question}</h3>
                                                    <p className="text-[#4A4A4F] text-sm leading-relaxed">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 3. Right Sidebar: Recent Posts */}
                        <div className="lg:col-span-3 order-3">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 sticky top-36">
                                {/* Header */}
                                <div className="bg-orange-500 text-white p-4">
                                    <h3 className="font-display text-lg font-bold">Recent Posts</h3>
                                </div>
                                
                                {/* List */}
                                <div className="p-4">
                                    {recentBlogs.length > 0 ? (
                                        <ul className="space-y-4">
                                            {recentBlogs.map((rBlog, index) => (
                                                <li key={index} className="border-b last:border-none pb-4 last:pb-0">
                                                    <Link to={`/blog/${rBlog.slug}`} className="group">
                                                        <h4 className="text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                                                            {rBlog.title}
                                                        </h4>
                                                        <p className="text-xs text-stone-400 mt-1">
                                                            {new Date(rBlog.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                        </p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-stone-500">No recent posts.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogTemplate;
