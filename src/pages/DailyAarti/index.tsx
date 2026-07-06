import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ShareGuide } from "@/components/common/ShareGuide";

const DailyAarti = () => {
    return (
        <div className="min-h-screen flex flex-col pt-40 md:pt-48 bg-background">
            <SEO
                title="Daily Live Aarti & Darshan"
                description="Experience the divine with live daily aarti and spiritual ceremonies directly from the temple."
                keywords={["daily aarti", "live aarti", "online darshan", "temple aarti"]}
            />
            <Header />

            <main className="flex-1 w-full min-h-[600px] md:min-h-[750px] bg-[#111111] overflow-hidden relative">
                {/* Breadcrumbs and Share */}
                <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <nav className="flex items-center space-x-2 text-sm text-white/70">
                                <a href="/" className="hover:text-primary transition-colors">Home</a>
                                <span>/</span>
                                <span className="text-primary font-medium">Daily Aarti</span>
                            </nav>
                            <ShareGuide />
                        </div>
                    </div>
                </div>
                {/* Embedded Vercel App */}
                <iframe
                    src="https://cosmic-compass-drab.vercel.app/"
                    title="Daily Aarti"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </main>


            <Footer />
        </div>
    );
};

export default DailyAarti;
