import React from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  templeName: string;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, templeName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-orange-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Add Comment</h3>
            <p className="text-sm text-orange-600 font-medium">{templeName} Journey</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <textarea 
            placeholder="Share your thoughts on this spiritual journey..."
            className="w-full h-32 p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none text-gray-700"
          />
          
          <div className="mt-6 flex items-center justify-end gap-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="rounded-full px-6"
            >
              Cancel
            </Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-2 h-auto flex items-center gap-2 group shadow-orange-200 shadow-lg"
              onClick={onClose}
            >
              Post Comment
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
