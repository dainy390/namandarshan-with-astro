import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import avatars
import avatar1 from "@/assets/avatars/indian_avatar_1_1774507604759.png";
import avatar2 from "@/assets/avatars/indian_avatar_2_1774507627001.png";
import avatar3 from "@/assets/avatars/indian_avatar_3_1774507647874.png";
import avatar4 from "@/assets/avatars/indian_avatar_4_1774507670474.png";
import avatar5 from "@/assets/avatars/indian_avatar_5_1774507692212.png";
import avatar6 from "@/assets/avatars/indian_avatar_6_1774507711907.png";

interface Comment {
  id: number;
  name: string;
  text: string;
  avatar: string;
  time: string;
}

const MOCK_COMMENTS: Omit<Comment, "id" | "time">[] = [
  { name: "Amit", text: "Incredible darshan experience 🙏", avatar: avatar3 },
  { name: "Priya", text: "Just visited Tirupati temple!", avatar: avatar2 },
  { name: "Rahul", text: "Feeling blessed today 🙏", avatar: avatar1 },
  { name: "Sneha", text: "The morning aarti was divine ✨", avatar: avatar5 },
  { name: "Vikram", text: "Efficient Request Darshan Assistance booking. Highly recommended!", avatar: avatar4 },
  { name: "Anjali", text: "Peaceful atmosphere and great management.", avatar: avatar6 },
];

const LiveCommentsWidget = () => {
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to minimize widget
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addComment = useCallback(() => {
    if (isPaused) return;

    const data = MOCK_COMMENTS[nextIndex % MOCK_COMMENTS.length];
    const newComment: Comment = {
      ...data,
      id: Date.now(), // Unique ID for keying
      time: "Just now"
    };

    setVisibleComments((prev) => {
      const updated = [newComment, ...prev];
      // Reduce to 2 visible if it feels too crowded or overlaps
      if (updated.length > 3) {
        return updated.slice(0, 3);
      }
      return updated;
    });

    setNextIndex((prev) => prev + 1);
  }, [nextIndex, isPaused]);

  useEffect(() => {
    const interval = setInterval(addComment, 4000);
    return () => clearInterval(interval);
  }, [addComment]);

  return (
    <div
      className={`fixed top-[225px] right-4 z-[60] flex flex-col gap-1.5 transition-all duration-500 ${isScrolled ? "translate-x-[240px]" : "translate-x-0"
        }`}
      onMouseEnter={() => setIsScrolled(false)}
      onMouseLeave={() => {
        if (window.scrollY > 40) setIsScrolled(true);
      }}
    >
      <AnimatePresence mode="popLayout">
        {visibleComments.map((comment, index) => (
          <motion.div
            key={comment.id}
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: isScrolled ? 0.7 : 1,
              filter: isScrolled ? "blur(1px)" : "blur(0px)"
            }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="pointer-events-auto"
            style={{
              zIndex: 10 - index
            }}
          >
            <div
              className={`backdrop-blur-sm border border-orange-100 rounded-xl p-2 shadow-soft min-w-[240px] max-w-[260px] flex gap-2.5 group hover:shadow-glow transition-all duration-300 ${isScrolled ? "bg-orange-100/40" : "bg-orange-50/95"
                }`}
            >
              {/* Compact Avatar */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-orange-200 bg-orange-50 flex items-center justify-center">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${comment.name}&background=ffedd5&color=ea580c`;
                    }}
                  />
                </div>
              </div>

              {/* Compact Content */}
              <div className={`flex-1 overflow-hidden relative transition-opacity duration-300 ${isScrolled ? "opacity-30" : "opacity-100"}`}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-[13px] text-gray-900 truncate">{comment.name}</span>
                  <span className="text-[9px] text-gray-400 whitespace-nowrap">{comment.time}</span>
                </div>
                <p className="text-[11px] text-gray-700 line-clamp-1 leading-tight font-medium">
                  {comment.text}
                </p>
                {/* Subtle highlight/glow on new comment */}
                <div className="absolute inset-0 rounded-xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LiveCommentsWidget;
