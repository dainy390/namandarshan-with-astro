import React from "react";
import Layout from "../components/layout/Layout";
import { Container } from "../components/ui/container";
import { ShareGuide } from "@/components/common/ShareGuide";
import SEO from "@/components/SEO";

const GALLERY_IMAGES = [
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/neelkanth-3_gg9djt.jpg", alt: "Neelkanth Mahadev" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/o_yux8jp.jpg", alt: "Temple Darshan" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/n_c16tqe.jpg", alt: "Pilgrimage Site" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/m_l3axkh.jpg", alt: "Devotees" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/l_syn8d5.jpg", alt: "Holy Shrine" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/j_o3tyts.jpg", alt: "Ganga Aarti" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/k_o5a6cu.jpg", alt: "Mountain Temple" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/ste_atxo2b.jpg", alt: "Spiritual Journey" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/lmn_rjlith.jpg", alt: "Sacred Rituals" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/bd_xphbyb.jpg", alt: "Temple Architecture" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/mn_tyawm2.jpg", alt: "Divine Blessings" },
    { url: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/nl_zytrga.jpg", alt: "Yatra Experience" },
];

const Gallery = () => {
    return (
        <Layout>
            <SEO />
            <Container className="py-12 md:py-20">
                {/* Breadcrumbs and Share */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-12">
                    <nav className="flex items-center space-x-2 text-sm text-stone-500">
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-primary font-medium">Gallery</span>
                    </nav>
                    <ShareGuide />
                </div>
                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Gallery</h1>
                    <p className="text-xl text-stone-600">Glimpses of spiritual journeys with Naman</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </Layout>
    );
};

export default Gallery;
