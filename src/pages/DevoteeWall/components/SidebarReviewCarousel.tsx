import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { DevoteeReview } from "@/data/devoteeWallData";

interface SidebarReviewCarouselProps {
  reviews: DevoteeReview[];
}

const SidebarReviewCarousel: React.FC<SidebarReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 relative group">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < reviews[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">
        "{reviews[currentIndex].text}"
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-800 text-sm">{reviews[currentIndex].name}</h4>
          <span className="text-xs text-gray-500">{reviews[currentIndex].date}</span>
        </div>
        
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="p-1 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50"
          >
            <ChevronLeft className="w-3 h-3 text-gray-600" />
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
            className="p-1 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50"
          >
            <ChevronRight className="w-3 h-3 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarReviewCarousel;
