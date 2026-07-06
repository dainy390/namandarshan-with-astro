import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AstrologerCard from "../../components/astrologer/AstrologerCard";
import { astrologers } from "../../data/astrologers";
import ZegoCall from "./ZegoCall";
// import Header from "@/components/layout/Header";
import AstroCallHeader from "@/components/layout/AstroCallHeader"
import Footer from "@/components/layout/Footer";
import LoginModal from "@/components/Astro-auth/LoginModal";
import SignupModal from "@/components/Astro-auth/SignupModal";
import { User, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useWallet } from "@/context/WalletContext";
import { canStartConsultation } from "@/utils/consultationAccess";

export default function AstroCall() {
  const navigate = useNavigate();

  const [selectedAstrologer, setSelectedAstrologer] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

const [showLogin, setShowLogin] = useState(false);
const [showSignup, setShowSignup] = useState(false);

const [pendingAction, setPendingAction] = useState<
  "chat" | "call" | null
>(null);

const [pendingAstrologer, setPendingAstrologer] =
  useState<any>(null);




const { isUserAuthenticated, user, logoutUser } = useAuth();
const { balance } = useWallet();
const hasWalletBalance = canStartConsultation(balance);

const handleLoginSuccess = () => {
  setShowLogin(false);

  if (pendingAction === "call") {
    if (!hasWalletBalance) {
      navigate("/wallet");
    } else {
      setSelectedAstrologer(pendingAstrologer);
    }
  }

  if (pendingAction === "chat") {
    if (!hasWalletBalance) {
      navigate("/wallet");
    } else {
      navigate("/astro-chat", {
        state: {
          astrologer: { ...pendingAstrologer, avatar: pendingAstrologer?.image },
        },
      });
    }
  }

  setPendingAction(null);
};




const [showProfileMenu, setShowProfileMenu] = useState(false);

const handleLogout = () => {
  logoutUser();
  setShowProfileMenu(false);
};




// `user` from useAuth() is the real, backend-authenticated profile.
// Kept as `astroUser` alias below so the rest of this file (JSX) needn't change.
const astroUser = user;



  if (selectedAstrologer) {
    return <ZegoCall />;
  }

  const filteredAstrologers = astrologers.filter((astro) => {
  const matchesSearch =
    astro.name.toLowerCase().includes(search.toLowerCase()) ||
    astro.expertise?.toLowerCase().includes(search.toLowerCase());

  const matchesFilter =
    activeFilter === "All" ||
    astro.expertise?.toLowerCase().includes(
      activeFilter.toLowerCase()
    );

  return matchesSearch && matchesFilter;
});
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}


<AstroCallHeader
  onChatClick={() => {
    if (!isUserAuthenticated) {
      setPendingAction("chat");
      setPendingAstrologer(filteredAstrologers[0]);
      setShowLogin(true);
      return;
    }

    if (!hasWalletBalance) {
      navigate("/wallet");
      return;
    }

    navigate("/astro-chat", {
      state: {
        astrologer: {
          ...filteredAstrologers[0],
          avatar: filteredAstrologers[0].image,
        },
      },
    });
  }}
  onCallClick={() => {
    if (!isUserAuthenticated) {
      setPendingAction("call");
      setPendingAstrologer(filteredAstrologers[0]);
      setShowLogin(true);
      return;
    }

    if (!hasWalletBalance) {
      navigate("/wallet");
      return;
    }

    setSelectedAstrologer(filteredAstrologers[0]);
  }}
  onLoginClick={() => setShowLogin(true)}
/>

      
<div className="container mx-auto px-4 pt-8 pb-20">
        <h1 className="text-4xl font-bold mb-6">
          Talk To Astrologers
        </h1>

        {/* Search + Wallet */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Astrologers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border p-3 rounded-lg bg-white"
          />

         {isUserAuthenticated && (
         <div className="flex items-center gap-3">

  {/* Wallet */}
  <div
    className="bg-white shadow-md rounded-xl border px-4 py-3 min-w-[190px] cursor-pointer hover:shadow-lg transition"
    onClick={() => navigate("/wallet")}
  >
    <p className="text-xs text-gray-500">
      Wallet Balance
    </p>

    <div className="flex items-center justify-between mt-1">
      <span className="text-green-600 font-bold text-lg">
        ₹{balance}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate("/wallet");
        }}
        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm"
      >
        Recharge
      </button>
    </div>
  </div>

</div>
        )}
</div>  
       {/* Filters */}
<div className="flex gap-3 mb-8 flex-wrap">

  <button
    onClick={() => setActiveFilter("All")}
    className={`px-4 py-2 rounded ${
      activeFilter === "All"
        ? "bg-orange-500 text-white"
        : "border bg-white"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setActiveFilter("Vedic")}
    className={`px-4 py-2 rounded ${
      activeFilter === "Vedic"
        ? "bg-orange-500 text-white"
        : "border bg-white"
    }`}
  >
    Vedic
  </button>

  <button
    onClick={() => setActiveFilter("Numerology")}
    className={`px-4 py-2 rounded ${
      activeFilter === "Numerology"
        ? "bg-orange-500 text-white"
        : "border bg-white"
    }`}
  >
    Numerology
  </button>

  <button
    onClick={() => setActiveFilter("Tarot")}
    className={`px-4 py-2 rounded ${
      activeFilter === "Tarot"
        ? "bg-orange-500 text-white"
        : "border bg-white"
    }`}
  >
    Tarot
  </button>

</div>

        {/* Astrologers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAstrologers.map((astro) => (
          <AstrologerCard
  key={astro.id}
  astrologer={astro}

  
  onCall={() => {
    if (!isUserAuthenticated) {
      setPendingAction("call");
      setPendingAstrologer(astro);
      setShowLogin(true);
      return;
    }

    if (!hasWalletBalance) {
      navigate("/wallet");
      return;
    }

    setSelectedAstrologer(astro);
  }}
  onChat={() => {
    if (!isUserAuthenticated) {
      setPendingAction("chat");
      setPendingAstrologer(astro);
      setShowLogin(true);
      return;
    }

    if (!hasWalletBalance) {
      navigate("/wallet");
      return;
    }

    navigate("/astro-chat", {
      state: { astrologer: { ...astro, avatar: astro.image } },
    });
  }}
/>
          ))}
        </div>
      </div>

<LoginModal
  isOpen={showLogin}
  onClose={() => setShowLogin(false)}
  onLoginSuccess={handleLoginSuccess}
  onSignup={() => {
    setShowLogin(false);
    setShowSignup(true);
  }}
/>

<SignupModal
  isOpen={showSignup}
  onClose={() => setShowSignup(false)}
  onBackToLogin={() => {
    setShowSignup(false);
    setShowLogin(true);
  }}
/>


      <Footer />
    </div>
  );
}