import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, Smile, CheckCircle, Scale, Gavel, Users, Info } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import BookingModal from "@/components/booking/BookingModal";
import { useState } from "react";

const SabarimalaCaseBlog = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Sabarimala Case Explained: Complete Story, Legal Battle, Timeline & Latest Updates (2026)",
        "description": "A comprehensive guide to the Sabarimala case, exploring its historical background, legal journey, constitutional significance, and the ongoing debate in 2026.",
        "author": {
            "@type": "Organization",
            "name": "Naman Darshan"
        },
        "datePublished": "2026-04-09",
        "image": "/assets/sabarimala-case-main.png"
    };

    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "background", title: "Historical and Religious Background" },
        { id: "legal-origins", title: "Legal Origins (1991 Judgment)" },
        { id: "pil-2006", title: "The 2006 PIL" },
        { id: "verdict-2018", title: "The Landmark 2018 Verdict" },
        { id: "protests", title: "Nationwide Protests" },
        { id: "review-2019", title: "2019 Review Petitions" },
        { id: "doctrines", title: "Key Legal Doctrines" },
        { id: "updates", title: "Latest Updates (2025–2026)" },
        { id: "impact", title: "Broader Impact" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Kashi Vishwanath: The City of Light & Moksha", link: "/blog/kashi-vishwanath-moksha-ganga-aarti-guide" },
        { title: "Ram Mandir Ayodhya: The 500-Year Wait Ends", link: "/blog/ram-mandir-ayodhya-history-darshan-guide" },
        { title: "Kedarnath Temple: The Eternal Abode of Lord Shiva", link: "/blog/kedarnath-temple-yatra-history-legend" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SEO
                title="Sabarimala Case Explained: Complete Story, Legal Battle, Timeline & Latest Updates (2026)"
                description="The Sabarimala case is one of the most significant constitutional, social, and religious debates in India’s modern history. Learn about its timeline and latest updates."
                keywords="Sabarimala case, Sabarimala verdict, Women entry Sabarimala, Sabarimala latest news, Sabarimala temple controversy, Article 14 Indian Constitution, Article 25 Indian Constitution, Constitutional morality India, Essential religious practices doctrine"
                image="/assets/sabarimala-case-main.png"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
                </script>
            </Helmet>
            <Header />

            <main className="flex-grow pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Sabarimala Case" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3 hidden lg:block">
                             <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-stone-500" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 mb-8">
                                <div className="p-8 md:p-10">
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                                            <Calendar className="w-4 h-4" />
                                            <span>09 April 2026</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>Kerala, India</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Sabarimala Case Explained: Complete Story, Legal Battle, Timeline & Latest Update
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By Naman Darshan</span>
                                        <span>•</span>
                                        <span>15 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-auto px-8 md:px-10 pb-8">
                                    <img
                                        src="/assets/sabarimala-case-main.png"
                                        alt="Sabarimala Temple and Pilgrimage"
                                        className="w-full h-auto object-cover rounded-xl shadow-sm"
                                    />
                                </div>

                                <div className="p-8 md:p-10 text-lg leading-relaxed text-slate-700 space-y-8">
                                    <p id="intro" className="font-medium text-xl text-slate-800 border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-r-xl">
                                        The Sabarimala case is one of the most significant constitutional, social, and religious debates in India’s modern history. It goes far beyond a temple entry issue—it questions how a democratic nation balances faith, tradition, and fundamental rights.
                                    </p>

                                    <p>
                                        At the heart of the controversy lies the centuries-old practice at the Sabarimala Temple, dedicated to Lord Ayyappa, where women of menstruating age (10–50 years) were traditionally restricted from entering the shrine.
                                    </p>

                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                        <p className="font-bold mb-4">The case has sparked nationwide debates on:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Gender equality</li>
                                            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Religious freedom</li>
                                            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Judicial intervention in faith</li>
                                            <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Constitutional morality</li>
                                        </ul>
                                    </div>

                                    <p>Even in 2026, the issue remains unresolved, continuing to shape India’s legal and social landscape.</p>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="background">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Historical and Religious Background</h2>
                                        <p className="mb-4">
                                            The Sabarimala temple is one of the largest annual pilgrimage sites in the world. Devotees undertake a rigorous 41-day penance (vratham) involving celibacy, discipline, and spiritual preparation before visiting the temple.
                                        </p>
                                        <p className="mb-4">Lord Ayyappa is worshipped as a <strong>Naishtika Brahmachari</strong> (eternal celibate). According to temple traditions:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li>Women of menstruating age were believed to be incompatible with the deity’s celibate nature</li>
                                            <li>The restriction was considered part of preserving the sanctity of the shrine</li>
                                            <li>Women outside this age group (below 10 and above 50) were allowed</li>
                                        </ul>
                                        <p className="font-medium text-slate-800 italic">This practice was followed for decades and formally upheld in 1991.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="legal-origins">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Legal Origins of the Sabarimala Case</h2>
                                        
                                        <div className="mt-4 mb-8">
                                            <img
                                                src="/assets/sabarimala-case-legal.png"
                                                alt="Legal Origins of the Sabarimala Case"
                                                className="w-full h-auto rounded-xl shadow-md object-cover"
                                            />
                                        </div>

                                        <p className="mb-4">
                                            The legal journey of the Sabarimala issue began with a conflict between customary practices and constitutional guarantees.
                                        </p>
                                        
                                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-6">
                                            <h3 className="font-bold text-orange-800 mb-2">1991 – Kerala High Court Judgment</h3>
                                            <p className="text-slate-800">The Kerala High Court ruled in favor of the temple tradition, stating:</p>
                                            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-700">
                                                <li>The restriction was a long-standing custom</li>
                                                <li>It did not violate constitutional provisions</li>
                                                <li>The temple had the right to maintain its religious practices</li>
                                            </ul>
                                        </div>
                                        <p>This judgment legally validated the ban for nearly two decades.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="pil-2006">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Scale className="w-8 h-8 text-orange-500" /> The 2006 PIL and Beginning of Constitutional Challenge
                                        </h2>
                                        <p className="mb-4">
                                            In 2006, the Indian Young Lawyers Association filed a Public Interest Litigation in the Supreme Court of India challenging the restriction.
                                        </p>
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                            <p className="font-bold mb-4 text-slate-900 italic">Key Arguments Against the Ban:</p>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                    <span><strong>Violates Article 14</strong> (Right to Equality)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                    <span><strong>Violates Article 15</strong> (No discrimination based on gender)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                    <span><strong>Violates Article 25</strong> (Freedom of religion)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                    <span>Treats women as impure based on biology</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mt-6">This marked the beginning of one of India’s most debated constitutional cases.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="verdict-2018">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">The Landmark 2018 Supreme Court Verdict</h2>
                                        
                                        <div className="mt-4 mb-8">
                                            <img
                                                src="/assets/sabarimala-case-verdict.png"
                                                alt="Supreme Court Verdict on Sabarimala Case"
                                                className="w-full h-auto rounded-xl shadow-md object-cover"
                                            />
                                        </div>

                                        <p className="mb-6">
                                            In September 2018, a five-judge Constitution Bench of the Supreme Court of India delivered a historic 4:1 majority judgment.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                                    <Gavel className="w-5 h-5" /> Key Highlights
                                                </h3>
                                                <ul className="text-sm space-y-2 text-slate-700">
                                                    <li>• Ban on women aged 10–50 was declared unconstitutional</li>
                                                    <li>• Women of all ages allowed entry into Sabarimala</li>
                                                    <li>• Practice was not an essential religious practice</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                                <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                                    <Users className="w-5 h-5" /> Observations
                                                </h3>
                                                <ul className="text-sm space-y-2 text-slate-700 italic">
                                                    <li>• “Biological factors cannot be a basis for discrimination”</li>
                                                    <li>• “Devotion cannot be subjected to gender”</li>
                                                    <li>• Constitutional morality must prevail over social customs</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                                            <h3 className="font-bold text-orange-400 mb-2">Dissenting Opinion:</h3>
                                            <p className="text-slate-300 text-sm italic">
                                                One judge dissented, arguing that: Courts should not interfere in deeply rooted religious beliefs, and the issue should be left to devotees.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="protests">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Nationwide Protests and Social Reaction</h2>
                                        <p className="mb-4">
                                            The 2018 judgment triggered massive protests across Kerala and India.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Devotees opposed entry citing religious sentiments</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Activists supported verdict as victory for rights</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Violent clashes and political tensions erupted</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Women attempting entry faced resistance</span>
                                            </div>
                                        </div>
                                        <div className="bg-stone-100 rounded-lg p-6 border-l-4 border-stone-800 text-center">
                                            <p className="m-0 font-bold text-stone-800">
                                                Faith-based traditions vs Constitutional rights
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="review-2019">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Review Petitions and the 2019 Twist</h2>
                                        <p className="mb-4">
                                            Following widespread protests, multiple review petitions were filed. In 2019, the Supreme Court of India:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li>Did not overturn the 2018 judgment</li>
                                            <li>Referred broader constitutional questions to a <strong>9-judge bench</strong></li>
                                        </ul>
                                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                            <p className="font-bold text-indigo-900 mb-2 underline">Expanded Issues Included:</p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-indigo-800">
                                                <li>• Entry of women into mosques</li>
                                                <li>• Parsi women’s rights in fire temples</li>
                                                <li>• Female genital practices in communities</li>
                                            </ul>
                                        </div>
                                        <p className="mt-4">This expanded the case into a pan-religious constitutional debate.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="doctrines">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Key Legal Doctrines Involved</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">1. Essential Religious Practices Doctrine</h3>
                                                <p className="text-slate-600">Courts determine whether a practice is essential to a religion. If not essential, it can be struck down.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">2. Constitutional Morality</h3>
                                                <p className="text-slate-600">Constitution is the ultimate authority; it protects dignity, liberty, and equality.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">3. Balance Between Rights</h3>
                                                <p className="text-slate-600">Religious freedom vs gender equality; individual rights vs community beliefs.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="updates">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Latest Updates (2025–2026)</h2>
                                        <p className="mb-6 italic">As of 2026, the Sabarimala case remains legally unresolved, but several important developments have occurred:</p>
                                        
                                        <div className="space-y-8">
                                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-orange-500">
                                                <h3 className="font-bold text-slate-900 mb-2">1. Court vs Government Debate</h3>
                                                <p className="text-slate-700 mb-2">The Supreme Court indicated: <strong>Courts can examine religious practices if they violate rights.</strong></p>
                                                <p className="text-slate-700">The government argued: <strong>Judges should not define what is religious or superstition.</strong></p>
                                            </div>
                                            
                                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
                                                <h3 className="font-bold text-slate-900 mb-2">2. Critical Constitutional Question</h3>
                                                <p className="text-slate-700 font-medium italic underline">Can non-devotees challenge religious customs?</p>
                                                <p className="text-sm mt-2 text-slate-600">This could redefine the scope of Public Interest Litigations (PILs) in religious matters.</p>
                                            </div>

                                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-500">
                                                <h3 className="font-bold text-slate-900 mb-2">3. Strong Judicial Remarks</h3>
                                                <p className="text-slate-700">Justice B. V. Nagarathna observed: <strong>Exclusion of women during menstruation may resemble a form of untouchability.</strong></p>
                                            </div>
                                            
                                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
                                                <h3 className="font-bold text-slate-900 mb-2">4. Changing Approach to PILs</h3>
                                                <p className="text-slate-700">The court noted: The 2006 petition might not be entertained today due to stricter PIL rules.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100 my-10">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">5. Current Status (2026)</h3>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> The 9-judge bench has not delivered a final verdict yet</li>
                                            <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Legal clarity on essential religious practices is still pending</li>
                                            <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> The issue continues to evolve</li>
                                        </ul>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="impact">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Broader Impact of the Sabarimala Case</h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <h4 className="font-bold text-orange-600 mb-2">Social Impact</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">Triggered nationwide conversations on women’s rights; challenged patriarchal interpretations.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <h4 className="font-bold text-blue-600 mb-2">Legal Impact</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">Strengthened constitutional morality doctrine; expanded judicial review in religious matters.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <h4 className="font-bold text-purple-600 mb-2">Political Impact</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">Became a major political issue in Kerala; influenced elections and party narratives.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl text-center transform hover:scale-[1.01] transition-transform my-10">
                                        <h3 className="text-3xl font-bold mb-4 font-display italic">Why the Sabarimala Case Still Matters</h3>
                                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                                            The Sabarimala case is not just about temple entry—it represents a deeper constitutional question:
                                        </p>
                                        <ul className="text-left max-w-xl mx-auto space-y-3 mb-8 text-slate-300">
                                            <li className="flex gap-3 items-center"><Info className="w-5 h-5 text-orange-400" /> Should faith override equality?</li>
                                            <li className="flex gap-3 items-center"><Info className="w-5 h-5 text-orange-400" /> Can courts redefine religious practices?</li>
                                            <li className="flex gap-3 items-center"><Info className="w-5 h-5 text-orange-400" /> Where is the line between belief and law?</li>
                                        </ul>
                                        <p className="font-medium text-orange-400 italic">It continues to serve as a test case for India’s secular and constitutional identity.</p>
                                    </section>

                                    <p className="text-slate-800 leading-relaxed">
                                        The Sabarimala case stands at the intersection of tradition, law, and modern values. While the 2018 judgment was seen as a progressive step toward gender equality, the ongoing legal uncertainty shows how complex and sensitive such issues are in a diverse country like India.
                                    </p>
                                    <p className="text-slate-800 leading-relaxed font-bold border-t pt-6">
                                        As of 2026, the final word is yet to be spoken. Until then, the Sabarimala case remains a living constitutional debate—shaping the future of religion, rights, and justice in India.
                                    </p>
                                    
                                    <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 mt-12">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Plan Your Spiritual Journey</h3>
                                        <p className="text-slate-600 mb-6">Whether you are visiting Sabarimala or any other sacred shrine, Naman Darshan provides support for a seamless experience.</p>
                                        <BookingModal
                                            isOpen={isBookingOpen}
                                            onClose={() => setIsBookingOpen(false)}
                                            type="darshan"
                                            serviceName="Spiritual Journey Support"
                                        />
                                        <button
                                            onClick={() => setIsBookingOpen(true)}
                                            className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 transition-colors shadow-lg cursor-pointer"
                                        >
                                            Request Darshan Assistance
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Comment Section */}
                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Recent Posts */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-orange-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl flex items-center gap-2">
                                        <Smile className="w-5 h-5" /> Recent Insights
                                    </h3>
                                    <div className="space-y-4 mt-6">
                                        {recentPosts.map((post, index) => (
                                            <Link
                                                key={index}
                                                to={post.link}
                                                className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0 border-slate-100 group"
                                            >
                                                <p className="text-sm font-medium text-slate-800 group-hover:text-orange-600 line-clamp-2 transition-colors">
                                                    {post.title}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl text-white shadow-lg">
                                    <h4 className="font-bold mb-2">Connect with Faith</h4>
                                    <p className="text-xs opacity-90 leading-relaxed mb-4">Discover the stories that define our spiritual heritage.</p>
                                    <Link to="/blogs" className="text-xs font-bold border-b border-white pb-1">Explore all blogs</Link>
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

export default SabarimalaCaseBlog;
