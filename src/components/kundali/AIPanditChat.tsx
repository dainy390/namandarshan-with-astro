import { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAIPanditResponse, ChatMessage } from "@/lib/kundali/ai";
import type { KundaliData } from "@/lib/kundali/kundali";
import { Loader2, Send, Sparkles } from "lucide-react";

interface AIPanditChatProps {
  kundali: KundaliData;
  isInline?: boolean;
  onClose?: () => void;
}

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs mr-2 shrink-0 mt-1 shadow-sm">
          ॐ
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${isUser
          ? "gold-gradient text-white rounded-br-sm"
          : "bg-white text-foreground rounded-bl-sm border border-border/50"
          }`}
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{
          __html: msg.parts
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/^- /gm, "• ")
            .replace(/^(\d+)\. /gm, "$1. "),
        }}
      />
    </div>
  );
}

export default function AIPanditChat({ kundali, isInline, onClose }: AIPanditChatProps) {
  const [open, setOpen] = useState(false);
  const INITIAL_MESSAGE: ChatMessage = {
    role: "model",
    parts: `🕉 Pranam, ${kundali.birthDetails.name}! I am your Jyotishi Pandit. I have studied your sacred Kundali.\n\nAsk me anything — about your career, relationships, spiritual path, or remedies. 🙏`,
  };
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Listen for external open events
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-ai-chat', handleOpen);
    return () => window.removeEventListener('open-ai-chat', handleOpen);
  }, []);

  // Reset chat when a new Kundali is generated for a different person/time
  useEffect(() => {
    setMessages([INITIAL_MESSAGE]);
  }, [kundali.birthDetails.name, kundali.birthDetails.date, kundali.birthDetails.time]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = { role: "user", parts: trimmed };
    // Skip the first model message (welcome message) for the Gemini History
    const historyForApi = messages.slice(1);

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await getAIPanditResponse(kundali, historyForApi, trimmed);
      setMessages((prev) => [...prev, { role: "model", parts: reply }]);
    } catch (error: any) {
      console.error("AI Pandit Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: `🙏 I apologize — the celestial connection was interrupted.\n\n*Error: ${error.message || 'Unknown celestial event'}*\n\nPlease try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "How will my career be?",
    "What are my lucky periods?",
    "Tell me about my relationships",
    "What remedies should I do?",
  ];

  const ChatContent = (
    <div className={`flex flex-col bg-background ${isInline ? "h-[600px] rounded-3xl border-2 border-primary/20 shadow-xl overflow-hidden" : "h-full"}`}>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center shadow-md">
            <span className="text-xl text-white">🔱</span>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wide text-primary">
              Jyotishi Pandit
            </h4>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
              Direct Consultation Desk
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent/60" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (onClose) onClose();
                if (!isInline) setOpen(false);
                else setMessages([INITIAL_MESSAGE]);
              }}
              className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
              title={isInline ? "Clear Consultation" : "Close"}
            >
              <span className="text-lg font-bold">✕</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-4 pt-4">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs mr-2 shrink-0">
                ॐ
              </div>
              <div className="bg-white border border-primary/20 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground font-medium">Consulting the stars…</span>
              </div>
            </div>
          )}
        </div>
        <div ref={bottomRef} className="h-4" />
      </ScrollArea>

      {/* Quick suggestions */}
      {messages.length === 1 && (
        <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="shrink-0 text-xs bg-secondary border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-6 pt-2 border-t border-border flex gap-2 items-end bg-white/40">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask the Pandit about your chart…"
          className="resize-none min-h-[44px] max-h-[120px] rounded-2xl text-sm border-border focus:border-primary/60 bg-white shadow-inner"
          rows={1}
        />
        <Button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          size="icon"
          className="shrink-0 h-11 w-11 rounded-2xl gold-gradient hover:opacity-90 transition-all active:scale-95"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  if (isInline) {
    return ChatContent;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* Floating Action Button */}
        <button
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group btn-glow active:scale-95 transition-transform"
          aria-label="Ask AI Pandit"
        >
          <div className="absolute inset-0 rounded-full gold-gradient animate-pulse opacity-20" />
          <span className="text-2xl group-hover:scale-110 transition-transform relative z-10">🔱</span>
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white animate-pulse z-20"
            title="AI Pandit Online"
          />
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="h-[85dvh] rounded-t-3xl p-0 border-t border-primary/30 bg-background overflow-hidden"
      >
        {ChatContent}
      </SheetContent>
    </Sheet>
  );
}
