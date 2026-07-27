import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

const Game = () => {
    return (
        <Layout>
            <SEO 
                title="Naman Khel - Spiritual Gaming Experience"
                description="Engage in Naman Khel, a unique spiritual gaming experience curated by Naman Darshan."
            />
            <div className="w-full h-[calc(100vh-80px)] overflow-hidden bg-black flex flex-col items-center justify-center relative">
                <iframe
                    src={import.meta.env.VITE_GAME_URL || ""}
                    className="w-full h-full border-0 absolute inset-0"
                    title="Naman Khel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                />
            </div>
        </Layout>
    );
};

export default Game;
