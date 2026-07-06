import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/assets/referral/slider/1.jpg",
    "/assets/referral/slider/2.png",
    "/assets/referral/slider/3.png",
    "/assets/referral/slider/4.png",
];

const DevotionSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                    Millions of Devotees, One Parivar
                </h2>
                <p className="text-stone-500 text-lg md:text-2xl max-w-3xl mx-auto">
                    Witness the sheer devotion and divine connection experienced by our community at sacred temples across India.
                </p>
            </div>

            <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-[500px] md:min-h-[700px] w-full rounded-[40px] md:rounded-[60px] shadow-2xl border-4 border-white">
                {/* Background Images with Fade Transition */}
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Devotion Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Minimal Overlay since text is no longer inside */}
                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000"></div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-8 z-30 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white/80 hover:text-primary transition-all hover:scale-110 group top-1/2 -translate-y-1/2 shadow-lg"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-8 z-30 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white/80 hover:text-primary transition-all hover:scale-110 group top-1/2 -translate-y-1/2 shadow-lg"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </section>
        </div>
    );
};

export default DevotionSlider;
