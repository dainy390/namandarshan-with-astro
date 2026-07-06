// import React, { Suspense } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import ScrollToTop from "./components/ScrollToTop";
// import FloatingActionButtons from "./components/layout/FloatingActionButtons";
// import { AuthProvider } from "./context/AuthContext";
// import { SocketProvider } from "./context/SocketContext";
// import ProtectedRoute from "./components/common/ProtectedRoute";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { ThemeProvider } from "./components/theme-provider";
// import BackButtonListener from "./components/BackButtonListener";
// import UserActivityTracker from "./components/common/UserActivityTracker";
// import ReferralTracker from "./components/common/ReferralTracker";

// // Lazy Pages
// const Index = React.lazy(() => import("./pages/Index"));
// const ExclusivePackages = React.lazy(() => import("./pages/ExclusivePackages"));
// const Yatra = React.lazy(() => import("./pages/Yatra"));
// const Temples = React.lazy(() => import("./pages/Temples"));
// const Darshan = React.lazy(() => import("./pages/Darshan"));
// const Puja = React.lazy(() => import("./pages/Puja"));
// const PujaDetails = React.lazy(() => import("./pages/Puja/PujaDetails"));
// const PujaBooking = React.lazy(() => import("./pages/Puja/PujaBooking"));
// const Prasadam = React.lazy(() => import("./pages/Prasadam"));
// const PrasadamDetails = React.lazy(
//   () => import("./pages/Prasadam/PrasadamDetails"),
// );
// const Chadhava = React.lazy(() => import("./pages/Chadhava"));
// const ChadhavaDetails = React.lazy(
//   () => import("./pages/Chadhava/ChadhavaDetails"),
// );
// const Mahashivratri = React.lazy(() => import("./pages/Mahashivratari"));
// const InternationalTemple = React.lazy(
//   () => import("./pages/InternationalTemple"),
// );
// const Astro = React.lazy(() => import("./pages/Astro"));
// const VedicConsultants = React.lazy(
//   () => import("./pages/Astro/VedicConsultants"),
// );
// const LiveDarshan = React.lazy(() => import("./pages/LiveDarshan"));
// const LiveDarshanDetail = React.lazy(
//   () => import("./pages/LiveDarshan/LiveDarshanDetail"),
// );
// const MyTrips = React.lazy(() => import("./pages/MyTrips"));
// const Referral = React.lazy(() => import("./pages/Referral"));
// const AiYatraPlanner = React.lazy(() => import("./pages/AiYatraPlanner"));
// const Login = React.lazy(() => import("./pages/Login"));
// const ThankYou = React.lazy(() => import("./pages/ThankYou"));
// const NotFound = React.lazy(() => import("./pages/NotFound"));
// const TempleDetails = React.lazy(() => import("./pages/Temples/TempleDetails"));
// const SuggestTemple = React.lazy(() => import("./pages/Temples/SuggestTemple"));
// const NewTemplesPage = React.lazy(
//   () => import("./pages/Temples/NewTemplesPage"),
// );
// const Game = React.lazy(() => import("./pages/Game"));
// const DailyAarti = React.lazy(() => import("./pages/DailyAarti"));
// const AiKundali = React.lazy(() => import("./pages/AiKundali"));
// const KundaliReport = React.lazy(() =>
//   import("./pages/AiKundali/KundaliReport").then((m) => ({
//     default: m.default,
//   })),
// );
// const ResetPassword = React.lazy(() => import("./pages/Login/ResetPassword"));
// const DevoteeWallPage = React.lazy(
//   () => import("./pages/DevoteeWall/DevoteeWallPage"),
// );
// const ProfilePage = React.lazy(() => import("./pages/DevoteeWall/ProfilePage"));
// const VolunteerPage = React.lazy(
//   () => import("./pages/Volunteers/VoluenteerPage"),
// );

// const DarshanBookingPage = React.lazy(
//   () => import("./pages/Darshan/DarshanBookingPage"),
// );
// const DarshanNestedLayout = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/DarshanNestedLayout"),
// );
// const TempleSection = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/sections/TempleSection"),
// );
// const DarshanSection = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/sections/DarshanSection"),
// );
// const PujaSection = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/sections/PujaSection"),
// );
// const ChadhavaSection = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/sections/ChadhavaSection"),
// );
// const PrasadamSection = React.lazy(
//   () => import("./pages/Darshan/NestedDarshan/sections/PrasadamSection"),
// );

// const BookNowPage = React.lazy(() => import("./pages/BookNow"));
// const Wallet = React.lazy(
//   () => import("./pages/Wallet")
// ); // Wallet page
// const Arti = React.lazy(() => import("./pages/Arti"));
// const AartiDetails = React.lazy(() => import("./pages/Arti/ArtiDetails"));
// const AboutUs = React.lazy(() => import("./pages/AboutUs"));
// const NewsEvents = React.lazy(() => import("./pages/NewsEvents"));
// const NewsDetail = React.lazy(() => import("./pages/NewsEvents/NewsDetail"));
// const Gallery = React.lazy(() => import("./pages/Gallery"));
// const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
// const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
// const Disclaimer = React.lazy(() => import("./pages/Disclaimer"));
// const DeleteAccount = React.lazy(() => import("./pages/DeleteAccount"));
// const AstroCall = React.lazy(
//   () => import("./pages/AstroCall")
// );

// // Blog Routes
// const KedarnathBlog = React.lazy(() => import("./pages/Blogs/KedarnathBlog"));
// const RamMandirBlog = React.lazy(() => import("./pages/Blogs/RamMandirBlog"));
// const TirupatiBlog = React.lazy(() => import("./pages/Blogs/TirupatiBlog"));
// const ShirdiYatra = React.lazy(() => import("./pages/Yatra/ShirdiYatra"));
// const CharDhamYatra = React.lazy(() => import("./pages/Yatra/CharDhamYatra"));
// const KedarnathYatra = React.lazy(() => import("./pages/Yatra/KedarnathYatra"));
// const AyodhyaYatra = React.lazy(() => import("./pages/Yatra/AyodhyaYatra"));
// const VrindavanYatra = React.lazy(() => import("./pages/Yatra/VrindavanYatra"));
// const JagannathYatra = React.lazy(() => import("./pages/Yatra/JagannathYatra"));
// const HelicopterCharDham = React.lazy(
//   () => import("./pages/Yatra/HelicopterCharDham"),
// );

// const KedarnathLegend = React.lazy(
//   () => import("./pages/Blogs/KedarnathLegend"),
// );
// const JagannathMystery = React.lazy(
//   () => import("./pages/Blogs/JagannathMystery"),
// );
// const GoldenTempleBlog = React.lazy(
//   () => import("./pages/Blogs/GoldenTempleBlog"),
// );
// const ChardhamBlog = React.lazy(() => import("./pages/Blogs/ChardhamBlog"));
// const KashiBlog = React.lazy(() => import("./pages/Blogs/KashiBlog"));
// const MahakaleshwarBlog = React.lazy(
//   () => import("./pages/Blogs/MahakaleshwarBlog"),
// );
// const VedicAstrologyBlog = React.lazy(
//   () => import("./pages/Blogs/VedicAstrologyBlog"),
// );
// const ShirdiPromisesBlog = React.lazy(
//   () => import("./pages/Blogs/ShirdiPromisesBlog"),
// );
// const Holi2026Blog = React.lazy(() => import("./pages/Blogs/Holi2026Blog"));
// const PhagNimantranBlog = React.lazy(
//   () => import("./pages/Blogs/PhagNimantranBlog"),
// );
// const LadduMarHoliBlog = React.lazy(
//   () => import("./pages/Blogs/LadduMarHoliBlog"),
// );
// const LathmarHoliBlog = React.lazy(
//   () => import("@/pages/Blogs/LathmarHoliBlog"),
// );
// const NandgaonLathmarHoliBlog = React.lazy(
//   () => import("@/pages/Blogs/NandgaonLathmarHoliBlog"),
// );
// const RangbharniEkadashiBlog = React.lazy(
//   () => import("@/pages/Blogs/RangbharniEkadashiBlog"),
// );
// const MathuraJanmabhoomiBlog = React.lazy(
//   () => import("@/pages/Blogs/MathuraJanmabhoomiBlog"),
// );
// const GokulChhadimarHoliBlog = React.lazy(
//   () => import("@/pages/Blogs/GokulChhadimarHoliBlog"),
// );
// const PhalenGaonHoliBlog = React.lazy(
//   () => import("@/pages/Blogs/PhalenGaonHoliBlog"),
// );
// const DaujiHurangaBlog = React.lazy(
//   () => import("@/pages/Blogs/DaujiHurangaBlog"),
// );
// const SunMoonSignBlog = React.lazy(
//   () => import("./pages/Blogs/SunMoonSignBlog"),
// );
// const AstrologyComparisonBlog = React.lazy(
//   () => import("./pages/Blogs/AstrologyComparisonBlog"),
// );
// const GlobalTensions2026Blog = React.lazy(
//   () => import("./pages/Blogs/GlobalTensions2026Blog"),
// );
// const ShukraGocharApril2026Blog = React.lazy(
//   () => import("./pages/Blogs/ShukraGocharApril2026Blog"),
// );
// const HanumanJayanti2026Blog = React.lazy(
//   () => import("./pages/Blogs/HanumanJayanti2026Blog"),
// );
// const ChaitraNavratri2026Blog = React.lazy(
//   () => import("./pages/Blogs/ChaitraNavratri2026Blog"),
// );
// const KrishnaJanmashtami2026Blog = React.lazy(
//   () => import("./pages/Blogs/KrishnaJanmashtami2026Blog"),
// );
// const PinkMoon2026Blog = React.lazy(
//   () => import("./pages/Blogs/PinkMoon2026Blog"),
// );
// const SatyanarayanPoojaBlog = React.lazy(
//   () => import("./pages/Blogs/SatyanarayanPoojaBlog"),
// );
// const VastuShantiPujaBlog = React.lazy(
//   () => import("./pages/Blogs/VastuShantiPujaBlog"),
// );
// const VastuShastraBlog = React.lazy(() => import("./pages/Blogs/VastuShastra"));
// const GrahaShantiPujaBlog = React.lazy(
//   () => import("./pages/Blogs/GrahaShantiPujaBlog"),
// );
// const SabarimalaCaseBlog = React.lazy(
//   () => import("./pages/Blogs/SabarimalaCaseBlog"),
// );
// const BankeyBihariDarshan2026Blog = React.lazy(
//   () => import("./pages/Blogs/BankeyBihariDarshan2026Blog"),
// );
// const BuddhaPurnima2026Blog = React.lazy(
//   () => import("./pages/Blogs/BuddhaPurnima2026Blog"),
// );
// const MahakaleshwarJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/MahakaleshwarJyotirlinga"),
// );
// const SomnathJyotrilinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/SomnathJyotrilinga"),
// );

// const GrishneshwarJyotirling = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/GrishneshwarJyotirlinga"),
// );

// const RameshwaramJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/RameshwaramJyotirlinga"),
// );

// const KashiVishwanathJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/KashiVishwanathJyotirlinga"),
// );
// const Blogs = React.lazy(() => import("./pages/Blogs"));
// const BlogTemplate = React.lazy(() => import("./pages/Blogs/BlogTemplate"));
// const Consultation = React.lazy(
//   () => import("./pages/Consultation/Consultation"),
// );
// const HinduCalendar = React.lazy(() => import("./pages/HinduCalendar"));
// const ZodiacSigns = React.lazy(() => import("./pages/ZodiacSigns"));
// const ZodiacSignDetail = React.lazy(
//   () => import("./pages/ZodiacSigns/ZodiacSignDetail"),
// );
// const JyotirLing = React.lazy(() => import("./pages/Blogs/JyotirlingaBlog"));
// const MallikarjunaJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/MallikarjunaJyotirlinga"),
// );
// const TrimbakeshwarJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/TrimbakeshwarJyotirlinga"),
// );
// const BhimashankarJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/BhimashankarJyotirlinga"),
// );
// const KedarnathJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/KedarnathJyotirlinga"),
// );
// const NageshwarJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/NageshwarJyotirlinga"),
// );
// const VaidyanathJyotirlinga = React.lazy(
//   () => import("./pages/Blogs/TwelveJyotirlingas/VaidyanathJyotirlinga"),
// );

// const OmkareshwarJyotirling = React.lazy(()=>import("./pages/Blogs/TwelveJyotirlingas/OmkareshwarJyotirling"))
// const Accommodation = React.lazy(() => import("./pages/Accommodation"));
// const AccommodationLanding = React.lazy(() => import("./pages/Accommodation/AccommodationLanding"));
// const AccommodationDetails = React.lazy(() => import("./pages/Accommodation/AccommodationDetails"));

// const queryClient = new QueryClient();

// const ExternalRedirect = ({ url }: { url: string }) => {
//   React.useEffect(() => {
//     window.location.replace(url);
//   }, [url]);
//   return (
//     <div className="flex h-screen w-screen items-center justify-center text-muted-foreground italic">
//       Redirecting to NamanDarshan Admin Portal...
//     </div>
//   );
// };

// const ParamsRedirect = ({ targetPattern }: { targetPattern: string }) => {
//   const params = useParams();
//   let target = targetPattern;
//   Object.entries(params).forEach(([key, value]) => {
//     if (value) {
//       target = target.replace(`:${key}`, value);
//     }
//   });
//   return <Navigate to={target} replace />;
// };

// const AstroChat = React.lazy( //chat 
//   () => import("./pages/AstroChat")
// );

// const App = () => {
//   const AMPLIFY_URL = "https://main.d2j2dgxrbts39r.amplifyapp.com";

//   return (
//     <HelmetProvider>
//       <QueryClientProvider client={queryClient}>
//         <GoogleOAuthProvider
//           clientId={
//             import.meta.env.VITE_GOOGLE_CLIENT_ID ||
//             "dummy_client_id_please_configure"
//           }
//         >
//           <AuthProvider>
//             <SocketProvider>
//               <BrowserRouter>
//                 <UserActivityTracker />
//                 <ReferralTracker />
//                 <ThemeProvider defaultTheme="smart" storageKey="vite-ui-theme">
//                   <TooltipProvider>
//                     <Toaster />
//                     <Sonner />
//                     <ScrollToTop />
//                     <BackButtonListener />
//                     <FloatingActionButtons />
//                     <Suspense
//                       fallback={
//                         <div className="flex h-screen w-screen items-center justify-center">
//                           Loading...
//                         </div>
//                       }
//                     >
//                       <Routes>
//                         <Route path="/" element={<Index />} />
//                         <Route
//                           path="/exclusive-temple-darshan-packeges"
//                           element={<ExclusivePackages />}
//                         />
//                         <Route path="/referral" element={<Referral />} />
//                         <Route
//                           path="/ai-yatra-planner"
//                           element={<AiYatraPlanner />}
//                         />
//                         <Route path="/daily-aarti" element={<DailyAarti />} />
//                         <Route
//                           path="/aaj-ki-tithi"
//                           element={<HinduCalendar />}
//                         />
//                         <Route
//                           path="/hindu-calendar"
//                           element={<HinduCalendar />}
//                         />
//                         <Route
//                           path="/naman-calendar"
//                           element={<HinduCalendar />}
//                         />
//                         <Route path="/ai-kundali" element={<AiKundali />} />
//                         <Route path="/ai-kundli" element={<AiKundali />} />
//                         <Route path="/AIkundali" element={<AiKundali />} />
//                         <Route
//                           path="/ai-kundali/report"
//                           element={<KundaliReport />}
//                         />
//                         <Route path="/yatra" element={<Yatra />} />
//                         <Route path="/shirdi-yatra" element={<ShirdiYatra />} />
//                         <Route
//                           path="/char-dham-yatra"
//                           element={<CharDhamYatra />}
//                         />
//                         <Route
//                           path="/kedarnath-yatra"
//                           element={<KedarnathYatra />}
//                         />
//                         <Route
//                           path="/ayodhya-yatra"
//                           element={<AyodhyaYatra />}
//                         />
//                         <Route
//                           path="/vrindavan-yatra"
//                           element={<VrindavanYatra />}
//                         />
//                         <Route
//                           path="/jagannath-yatra"
//                           element={<JagannathYatra />}
//                         />
//                         <Route
//                           path="/char-dham-yatra-helicopter-dehradun"
//                           element={<HelicopterCharDham />}
//                         />
//                           <Route
//                             path="/booking"
//                             element={<BookNowPage />}
//                           />
//                         <Route path="/temples" element={<Temples />} />
//                         <Route
//                           path="/temples/:slug"
//                           element={<TempleDetails />}
//                         />
//                         <Route
//                           path="/suggest-temple"
//                           element={<SuggestTemple />}
//                         />
//                         <Route
//                           path="/temples/new"
//                           element={<NewTemplesPage />}
//                         />
//                         <Route
//                           path="/devotee-wall"
//                           element={<DevoteeWallPage />}
//                         />
//                         <Route path="/profile" element={<ProfilePage />} />
//                         <Route path="/volunteer" element={<VolunteerPage />} />
//                         <Route path="/darshan" element={<Darshan />} />
//                         <Route
//                           path="/darshan/:slug"
//                           element={<DarshanBookingPage />}
//                         />
//                         <Route path="/nested" element={<DarshanNestedLayout />}>
//                           <Route
//                             index
//                             element={<Navigate to="temple" replace />}
//                           />
//                           <Route path="temple" element={<TempleSection />} />
//                           <Route path="darshan" element={<DarshanSection />} />
//                           <Route path="puja" element={<PujaSection />} />
//                           <Route path="chadwa" element={<ChadhavaSection />} />
//                           <Route
//                             path="prasadam"
//                             element={<PrasadamSection />}
//                           />
//                         </Route>

//                         <Route path="/media/aarti" element={<Navigate to="/bhajan-aarti" replace />} />
//                         <Route
//                           path="/media/aarti/:slug"
//                           element={<ParamsRedirect targetPattern="/bhajan-aarti/:slug" />}
//                         />
//                         <Route path="/bhajan-aarti" element={<Arti />}></Route>
//                         <Route
//                           path="/bhajan-aarti/:slug"
//                           element={<AartiDetails />}
//                         ></Route>
//                         <Route path="/puja" element={<Puja />} />
//                         <Route path="/puja/:slug" element={<PujaDetails />} />
//                         <Route path="/puja/booking" element={<PujaBooking />} />
//                         <Route path="/prasadam" element={<Prasadam />} />
//                         <Route
//                           path="/prasadam/:slug"
//                           element={<PrasadamDetails />}
//                         />
//                         <Route path="/chadhava" element={<Chadhava />} />
//                         <Route
//                           path="/chadhava/:slug"
//                           element={<ChadhavaDetails />}
//                         />
//                         {/* Standalone detail pages */}
//                         <Route
//                           path="/accommodation/dharamshala/:temple_name/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/dharamshalas/:temple_name/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/dharamshalas/:temple_name/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />
//                         <Route
//                           path="/accommodation/hotel/:temple_name/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/hotels/:temple_name/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/hotels/:temple_name/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />
//                         <Route
//                           path="/accommodation/ashram/:temple_name/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/ashrams/:temple_name/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/ashrams/:temple_name/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />

//                         <Route
//                           path="/accommodation/:category/detail/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />
//                         <Route
//                           path="/accommodation/hotel/detail/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/hotels/detail/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/hotels/detail/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />
//                         <Route
//                           path="/accommodation/ashram/detail/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/ashrams/detail/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/ashrams/detail/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />
//                         <Route
//                           path="/accommodation/dharamshala/detail/:dharamshala_name"
//                           element={<ParamsRedirect targetPattern="/yatra/dharamshalas/detail/:dharamshala_name" />}
//                         />
//                         <Route
//                           path="/yatra/dharamshalas/detail/:dharamshala_name"
//                           element={<AccommodationDetails />}
//                         />

//                         {/* Stays listing by city/temple pages */}
//                         <Route
//                           path="/accommodation/dharamshala/:slug"
//                           element={<ParamsRedirect targetPattern="/yatra/dharamshalas/:slug" />}
//                         />
//                         <Route
//                           path="/yatra/dharamshalas/:slug"
//                           element={<Accommodation />}
//                         />
//                         <Route
//                           path="/accommodation/hotel/:slug"
//                           element={<ParamsRedirect targetPattern="/yatra/hotels/:slug" />}
//                         />
//                         <Route
//                           path="/yatra/hotels/:slug"
//                           element={<Accommodation />}
//                         />
//                         <Route
//                           path="/accommodation/ashram/:slug"
//                           element={<ParamsRedirect targetPattern="/yatra/ashrams/:slug" />}
//                         />
//                         <Route
//                           path="/yatra/ashrams/:slug"
//                           element={<Accommodation />}
//                         />

//                         {/* Stays category landing pages */}
//                         <Route
//                           path="/accommodation/dharamshala"
//                           element={<Navigate to="/yatra/dharamshalas" replace />}
//                         />
//                         <Route
//                           path="/yatra/dharamshalas"
//                           element={<AccommodationLanding />}
//                         />
//                         <Route
//                           path="/accommodation/hotel"
//                           element={<Navigate to="/yatra/hotels" replace />}
//                         />
//                         <Route
//                           path="/yatra/hotels"
//                           element={<AccommodationLanding />}
//                         />
//                         <Route
//                           path="/accommodation/ashram"
//                           element={<Navigate to="/yatra/ashrams" replace />}
//                         />
//                         <Route
//                           path="/yatra/ashrams"
//                           element={<AccommodationLanding />}
//                         />
//                         <Route
//                           path="/accommodation"
//                           element={<Navigate to="/yatra/dharamshalas" replace />}
//                         />
//                         <Route
//                           path="/dharamshala"
//                           element={<Navigate to="/yatra/dharamshalas" replace />}
//                         />
//                         <Route path="/astro-naman" element={<Astro />} />
//                         <Route
//                           path="/astro/:tab?"
//                           element={<VedicConsultants />}
//                         />
//                         <Route
//                           path="/vedic-consultants"
//                           element={<VedicConsultants />}
//                         />
//                         <Route path="/astro-call" element={<AstroCall />} /> // Added route for AstroCall page
//                         <Route path="/astro-chat" element={<AstroChat />} />
                        

//                         <Route path="/thank-you" element={<ThankYou />} />
//                         <Route path="/live-darshan" element={<LiveDarshan />} />
//                         <Route
//                           path="/live-darshan/:slug"
//                           element={<LiveDarshanDetail />}
//                         />
//                         <Route path="/my-trips" element={<MyTrips />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route
//                           path="/reset-password/:token"
//                           element={<ResetPassword />}
//                         />

//                         {/* Blog Routes */}
//                         <Route path="/blogs" element={<Blogs />} />
//                         <Route path="/blog" element={<Blogs />} />
//                         <Route
//                           path="/consultation"
//                           element={<Consultation />}
//                         />
//                         <Route
//                           path="/blog/shirdi-yatra"
//                           element={<ShirdiYatra />}
//                         />
//                         <Route
//                           path="/blogs/legend-of-kedarnath"
//                           element={<KedarnathLegend />}
//                         />
//                         <Route
//                           path="/blogs/mysteries-of-jagannath-puri"
//                           element={<JagannathMystery />}
//                         />
//                         <Route
//                           path="/blog/kedarnath-temple-yatra-history-legend"
//                           element={<KedarnathBlog />}
//                         />
//                         <Route
//                           path="/blog/ram-mandir-ayodhya-history-darshan-guide"
//                           element={<RamMandirBlog />}
//                         />
//                         <Route
//                           path="/blog/tirupati-balaji-darshan-booking-laddu-mystery"
//                           element={<TirupatiBlog />}
//                         />
//                         <Route
//                           path="/blog/golden-temple-amritsar-history-langar-guide"
//                           element={<GoldenTempleBlog />}
//                         />
//                         <Route
//                           path="/blog/chardham-yatra-medical-tips-packing-guide"
//                           element={<ChardhamBlog />}
//                         />
//                         <Route
//                           path="/blog/kashi-vishwanath-moksha-ganga-aarti-guide"
//                           element={<KashiBlog />}
//                         />
//                         <Route
//                           path="/blog/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti"
//                           element={<MahakaleshwarBlog />}
//                         />
//                         <Route
//                           path="/blog/shirdi-sai-baba-11-vachan-promises-meaning"
//                           element={<ShirdiPromisesBlog />}
//                         />
//                         <Route
//                           path="/blog/vedic-astrology-temple-remedies"
//                           element={<VedicAstrologyBlog />}
//                         />
//                         <Route
//                           path="/blog/holi-2026-history-significance-rituals"
//                           element={<Holi2026Blog />}
//                         />
//                         <Route
//                           path="/blog/hanuman-jayanti-2026-date-puja-rituals"
//                           element={<HanumanJayanti2026Blog />}
//                         />
//                         <Route
//                           path="/blog/chaitra-navratri-2026-dates-muhurat-rituals"
//                           element={<ChaitraNavratri2026Blog />}
//                         />
//                         <Route
//                           path="/blog/krishna-janmashtami-2026-date-puja-rituals"
//                           element={<KrishnaJanmashtami2026Blog />}
//                         />
//                         <Route
//                           path="/blog/april-full-moon-2026-pink-moon-guide"
//                           element={<PinkMoon2026Blog />}
//                         />
//                         <Route
//                           path="/blog/satyanarayan-pooja-peace-positivity-guide"
//                           element={<SatyanarayanPoojaBlog />}
//                         />
//                         <Route
//                           path="/blog/vastu-shanti-puja-new-home-guide"
//                           element={<VastuShantiPujaBlog />}
//                         />
//                         <Route
//                           path="/blog/vastu-shastra-guide-home"
//                           element={<VastuShastraBlog />}
//                         />
//                         <Route
//                           path="/blog/graha-shanti-puja-planetary-balance-guide"
//                           element={<GrahaShantiPujaBlog />}
//                         />
//                         <Route
//                           path="/blog/sabarimala-case-explained-complete-story-legal-battle"
//                           element={<SabarimalaCaseBlog />}
//                         />
//                         <Route
//                           path="/blog/Everything-You-Should-Know-About-the-12-Jyotirlingas-of-Lord-Shiva-and-Their-Spiritual-Significance"
//                           element={<JyotirLing />}
//                         />
//                         <Route
//                           path="/blog/mallikarjuna-jyotirlinga"
//                           element={<MallikarjunaJyotirlinga />}
//                         ></Route>

//                         <Route
//                           path="/blog/omkareshwar-jyotirlinga"
//                           element={<OmkareshwarJyotirling />}
//                         ></Route>
//                         <Route
//                           path="/blog/grishneshwar-jyotirlinga"
//                           element={<GrishneshwarJyotirling />}
//                         ></Route>
//                         <Route
//                           path="/blog/rameshwaram-jyotirlinga"
//                           element={<RameshwaramJyotirlinga />}
//                         ></Route>
//                         <Route
//                           path="/blog/kashiVishwanath-jyotirlinga"
//                           element={<KashiVishwanathJyotirlinga />}
//                         ></Route>

//                         <Route
//                           path="/blog/phag-nimantran-barsana-holi-guide"
//                           element={<PhagNimantranBlog />}
//                         />
//                         <Route
//                           path="/blog/laddu-mar-holi-barsana-guide"
//                           element={<LadduMarHoliBlog />}
//                         />
//                         <Route
//                           path="/blog/lathmar-holi-barsana-2026-darshan-guide"
//                           element={<LathmarHoliBlog />}
//                         />
//                         <Route
//                           path="/blog/nandgaon-lathmar-holi-2026-darshan-guide"
//                           element={<NandgaonLathmarHoliBlog />}
//                         />
//                         <Route
//                           path="/blog/rangbharni-ekadashi-vrindavan-2026-darshan-guide"
//                           element={<RangbharniEkadashiBlog />}
//                         />
//                         <Route
//                           path="/blog/mathura-janmabhoomi-huranga-2026-darshan-guide"
//                           element={<MathuraJanmabhoomiBlog />}
//                         />
//                         <Route
//                           path="/blog/chhadimar-holi-gokul-2026-darshan-guide-tips"
//                           element={<GokulChhadimarHoliBlog />}
//                         />
//                         <Route
//                           path="/blog/phalen-gaon-ki-holi-2026-fire-ritual-travel-guide-tips"
//                           element={<PhalenGaonHoliBlog />}
//                         />
//                         <Route
//                           path="/blog/dauji-huranga-2026-baldeo-darshan-guide-tips"
//                           element={<DaujiHurangaBlog />}
//                         />
//                         <Route
//                           path="/blog/sun-sign-vs-moon-sign-difference"
//                           element={<SunMoonSignBlog />}
//                         />
//                         <Route
//                           path="/blog/vedic-vs-western-astrology-difference"
//                           element={<AstrologyComparisonBlog />}
//                         />
//                         <Route
//                           path="/blog/vedic-astrology-predictions-global-tensions-2026"
//                           element={<GlobalTensions2026Blog />}
//                         />
//                         <Route
//                           path="/blog/shukra-gochar-april-2026-venus-in-taurus"
//                           element={<ShukraGocharApril2026Blog />}
//                         />
//                         <Route
//                           path="/blog/bankey-bihari-temple-darshan-update-2026-reforms"
//                           element={<BankeyBihariDarshan2026Blog />}
//                         />
//                         <Route
//                           path="/blog/buddha-purnima-2026-guide"
//                           element={<BuddhaPurnima2026Blog />}
//                         />
//                         <Route
//                           path="/blog/mahakaleshwar-jyotirlinga-ujjain-guide"
//                           element={<MahakaleshwarJyotirlinga />}
//                         />
//                         <Route
//                           path="/blog/somnath-jyotirlinga-gujarat-guide"
//                           element={<SomnathJyotrilinga />}
//                         />
//                         <Route
//                           path="/blog/trimbakeshwar-jyotirlinga-nashik-guide"
//                           element={<TrimbakeshwarJyotirlinga />}
//                         />
//                         <Route
//                           path="/blog/bhimashankar-jyotirlinga-guide"
//                           element={<BhimashankarJyotirlinga />}
//                         />
//                         <Route
//                           path="/blog/kedarnath-jyotirlinga-guide"
//                           element={<KedarnathJyotirlinga />}
//                         />
//                         <Route
//                           path="/blog/nageshwar-jyotirlinga-guide"
//                           element={<NageshwarJyotirlinga />}
//                         />
//                         <Route
//                           path="/blog/vaidyanath-jyotirlinga-guide"
//                           element={<VaidyanathJyotirlinga />}
//                         />
//                         <Route path="/blog/:slug" element={<BlogTemplate />} />
//                         <Route path="/zodiac-signs" element={<ZodiacSigns />} />
//                         <Route
//                           path="/zodiac-signs/:slug"
//                           element={<ZodiacSignDetail />}
//                         />

//                         <Route path="/game" element={<Game />} />
//                         <Route
//                           path="/mahashivratari"
//                           element={<Mahashivratri />}
//                         />
//                         <Route
//                           path="/international-temples"
//                           element={<InternationalTemple />}
//                         />
//                         <Route
//                           path="/international-temples/:slug"
//                           element={<InternationalTemple />}
//                         />
//                         <Route path="/about-us" element={<AboutUs />} />
//                         <Route path="/news-events" element={<NewsEvents />} />
//                         <Route
//                           path="/news-events/:slug"
//                           element={<NewsDetail />}
//                         />
//                         <Route path="/gallery" element={<Gallery />} />
//                         <Route
//                           path="/terms-conditions"
//                           element={<TermsConditions />}
//                         />
//                         <Route
//                           path="/privacy-policy"
//                           element={<PrivacyPolicy />}
//                         />
//                         <Route
//                           path="/disclaimer"
//                           element={<Disclaimer />}
//                         />
//                         <Route
//                           path="/delete-account"
//                           element={<DeleteAccount />}
//                         />
//                         <Route
//                           path="/crm"
//                           element={
//                             <ExternalRedirect url={`${AMPLIFY_URL}/crm`} />
//                           }
//                         />
//                         <Route
//                           path="/admin"
//                           element={
//                             <ExternalRedirect url={`${AMPLIFY_URL}/admin`} />
//                           }
//                         />
//                         <Route
//                           path="/admin/login"
//                           element={
//                             <ExternalRedirect
//                               url={`${AMPLIFY_URL}/admin/login`}
//                             />
//                           }
//                         />
//                         <Route
//                           path="/pandit-portal"
//                           element={
//                             <ExternalRedirect
//                               url={`${AMPLIFY_URL}/pandit-portal`}
//                             />
//                           }
//                         />
//                         <Route
//                           path="/pandit-portal/login"
//                           element={
//                             <ExternalRedirect
//                               url={`${AMPLIFY_URL}/pandit-portal/login`}
//                             />
//                           }
//                         />
//                         <Route
//                           path="/pandit-portal-admin"
//                           element={
//                             <ExternalRedirect
//                               url={`${AMPLIFY_URL}/pandit-portal-admin`}
//                             />
//                           }
//                         />
//                         <Route
//   path="/wallet"
//   element={<Wallet />}
// />
//                         <Route path="*" element={<NotFound />} />
//                       </Routes>
//                     </Suspense>
//                   </TooltipProvider>
//                 </ThemeProvider>
//               </BrowserRouter>
//             </SocketProvider>
//           </AuthProvider>
//         </GoogleOAuthProvider>
//       </QueryClientProvider>
//     </HelmetProvider>
//   );
// };

// export default App;
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActionButtons from "./components/layout/FloatingActionButtons";
import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { WalletProvider } from "./context/WalletContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "./components/theme-provider";
import BackButtonListener from "./components/BackButtonListener";
import UserActivityTracker from "./components/common/UserActivityTracker";
import ReferralTracker from "./components/common/ReferralTracker";

// Lazy Pages
const Index = React.lazy(() => import("./pages/Index"));
const ExclusivePackages = React.lazy(() => import("./pages/ExclusivePackages"));
const Yatra = React.lazy(() => import("./pages/Yatra"));
const Temples = React.lazy(() => import("./pages/Temples"));
const Darshan = React.lazy(() => import("./pages/Darshan"));
const Puja = React.lazy(() => import("./pages/Puja"));
const PujaDetails = React.lazy(() => import("./pages/Puja/PujaDetails"));
const PujaBooking = React.lazy(() => import("./pages/Puja/PujaBooking"));
const Prasadam = React.lazy(() => import("./pages/Prasadam"));
const PrasadamDetails = React.lazy(
  () => import("./pages/Prasadam/PrasadamDetails"),
);
const Chadhava = React.lazy(() => import("./pages/Chadhava"));
const ChadhavaDetails = React.lazy(
  () => import("./pages/Chadhava/ChadhavaDetails"),
);
const Mahashivratri = React.lazy(() => import("./pages/Mahashivratari"));
const InternationalTemple = React.lazy(
  () => import("./pages/InternationalTemple"),
);
const Astro = React.lazy(() => import("./pages/Astro"));
const VedicConsultants = React.lazy(
  () => import("./pages/Astro/VedicConsultants"),
);
const LiveDarshan = React.lazy(() => import("./pages/LiveDarshan"));
const LiveDarshanDetail = React.lazy(
  () => import("./pages/LiveDarshan/LiveDarshanDetail"),
);
const MyTrips = React.lazy(() => import("./pages/MyTrips"));
const Referral = React.lazy(() => import("./pages/Referral"));
const AiYatraPlanner = React.lazy(() => import("./pages/AiYatraPlanner"));
const Login = React.lazy(() => import("./pages/Login"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const TempleDetails = React.lazy(() => import("./pages/Temples/TempleDetails"));
const SuggestTemple = React.lazy(() => import("./pages/Temples/SuggestTemple"));
const NewTemplesPage = React.lazy(
  () => import("./pages/Temples/NewTemplesPage"),
);
const Game = React.lazy(() => import("./pages/Game"));
const DailyAarti = React.lazy(() => import("./pages/DailyAarti"));
const AiKundali = React.lazy(() => import("./pages/AiKundali"));
const KundaliReport = React.lazy(() =>
  import("./pages/AiKundali/KundaliReport").then((m) => ({
    default: m.default,
  })),
);
const ResetPassword = React.lazy(() => import("./pages/Login/ResetPassword"));
const DevoteeWallPage = React.lazy(
  () => import("./pages/DevoteeWall/DevoteeWallPage"),
);
const ProfilePage = React.lazy(() => import("./pages/DevoteeWall/ProfilePage"));
const VolunteerPage = React.lazy(
  () => import("./pages/Volunteers/VoluenteerPage"),
);

const DarshanBookingPage = React.lazy(
  () => import("./pages/Darshan/DarshanBookingPage"),
);
const DarshanNestedLayout = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/DarshanNestedLayout"),
);
const TempleSection = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/sections/TempleSection"),
);
const DarshanSection = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/sections/DarshanSection"),
);
const PujaSection = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/sections/PujaSection"),
);
const ChadhavaSection = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/sections/ChadhavaSection"),
);
const PrasadamSection = React.lazy(
  () => import("./pages/Darshan/NestedDarshan/sections/PrasadamSection"),
);

const BookNowPage = React.lazy(() => import("./pages/BookNow"));
const Wallet = React.lazy(
  () => import("./pages/Wallet")
); // Wallet page
const Arti = React.lazy(() => import("./pages/Arti"));
const AartiDetails = React.lazy(() => import("./pages/Arti/ArtiDetails"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const NewsEvents = React.lazy(() => import("./pages/NewsEvents"));
const NewsDetail = React.lazy(() => import("./pages/NewsEvents/NewsDetail"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = React.lazy(() => import("./pages/Disclaimer"));
const DeleteAccount = React.lazy(() => import("./pages/DeleteAccount"));
const AstroCall = React.lazy(
  () => import("./pages/AstroCall")
);

// Blog Routes
const KedarnathBlog = React.lazy(() => import("./pages/Blogs/KedarnathBlog"));
const RamMandirBlog = React.lazy(() => import("./pages/Blogs/RamMandirBlog"));
const TirupatiBlog = React.lazy(() => import("./pages/Blogs/TirupatiBlog"));
const ShirdiYatra = React.lazy(() => import("./pages/Yatra/ShirdiYatra"));
const CharDhamYatra = React.lazy(() => import("./pages/Yatra/CharDhamYatra"));
const KedarnathYatra = React.lazy(() => import("./pages/Yatra/KedarnathYatra"));
const AyodhyaYatra = React.lazy(() => import("./pages/Yatra/AyodhyaYatra"));
const VrindavanYatra = React.lazy(() => import("./pages/Yatra/VrindavanYatra"));
const JagannathYatra = React.lazy(() => import("./pages/Yatra/JagannathYatra"));
const HelicopterCharDham = React.lazy(
  () => import("./pages/Yatra/HelicopterCharDham"),
);

const KedarnathLegend = React.lazy(
  () => import("./pages/Blogs/KedarnathLegend"),
);
const JagannathMystery = React.lazy(
  () => import("./pages/Blogs/JagannathMystery"),
);
const GoldenTempleBlog = React.lazy(
  () => import("./pages/Blogs/GoldenTempleBlog"),
);
const ChardhamBlog = React.lazy(() => import("./pages/Blogs/ChardhamBlog"));
const KashiBlog = React.lazy(() => import("./pages/Blogs/KashiBlog"));
const MahakaleshwarBlog = React.lazy(
  () => import("./pages/Blogs/MahakaleshwarBlog"),
);
const VedicAstrologyBlog = React.lazy(
  () => import("./pages/Blogs/VedicAstrologyBlog"),
);
const ShirdiPromisesBlog = React.lazy(
  () => import("./pages/Blogs/ShirdiPromisesBlog"),
);
const Holi2026Blog = React.lazy(() => import("./pages/Blogs/Holi2026Blog"));
const PhagNimantranBlog = React.lazy(
  () => import("./pages/Blogs/PhagNimantranBlog"),
);
const LadduMarHoliBlog = React.lazy(
  () => import("./pages/Blogs/LadduMarHoliBlog"),
);
const LathmarHoliBlog = React.lazy(
  () => import("@/pages/Blogs/LathmarHoliBlog"),
);
const NandgaonLathmarHoliBlog = React.lazy(
  () => import("@/pages/Blogs/NandgaonLathmarHoliBlog"),
);
const RangbharniEkadashiBlog = React.lazy(
  () => import("@/pages/Blogs/RangbharniEkadashiBlog"),
);
const MathuraJanmabhoomiBlog = React.lazy(
  () => import("@/pages/Blogs/MathuraJanmabhoomiBlog"),
);
const GokulChhadimarHoliBlog = React.lazy(
  () => import("@/pages/Blogs/GokulChhadimarHoliBlog"),
);
const PhalenGaonHoliBlog = React.lazy(
  () => import("@/pages/Blogs/PhalenGaonHoliBlog"),
);
const DaujiHurangaBlog = React.lazy(
  () => import("@/pages/Blogs/DaujiHurangaBlog"),
);
const SunMoonSignBlog = React.lazy(
  () => import("./pages/Blogs/SunMoonSignBlog"),
);
const AstrologyComparisonBlog = React.lazy(
  () => import("./pages/Blogs/AstrologyComparisonBlog"),
);
const GlobalTensions2026Blog = React.lazy(
  () => import("./pages/Blogs/GlobalTensions2026Blog"),
);
const ShukraGocharApril2026Blog = React.lazy(
  () => import("./pages/Blogs/ShukraGocharApril2026Blog"),
);
const HanumanJayanti2026Blog = React.lazy(
  () => import("./pages/Blogs/HanumanJayanti2026Blog"),
);
const ChaitraNavratri2026Blog = React.lazy(
  () => import("./pages/Blogs/ChaitraNavratri2026Blog"),
);
const KrishnaJanmashtami2026Blog = React.lazy(
  () => import("./pages/Blogs/KrishnaJanmashtami2026Blog"),
);
const PinkMoon2026Blog = React.lazy(
  () => import("./pages/Blogs/PinkMoon2026Blog"),
);
const SatyanarayanPoojaBlog = React.lazy(
  () => import("./pages/Blogs/SatyanarayanPoojaBlog"),
);
const VastuShantiPujaBlog = React.lazy(
  () => import("./pages/Blogs/VastuShantiPujaBlog"),
);
const VastuShastraBlog = React.lazy(() => import("./pages/Blogs/VastuShastra"));
const GrahaShantiPujaBlog = React.lazy(
  () => import("./pages/Blogs/GrahaShantiPujaBlog"),
);
const SabarimalaCaseBlog = React.lazy(
  () => import("./pages/Blogs/SabarimalaCaseBlog"),
);
const BankeyBihariDarshan2026Blog = React.lazy(
  () => import("./pages/Blogs/BankeyBihariDarshan2026Blog"),
);
const BuddhaPurnima2026Blog = React.lazy(
  () => import("./pages/Blogs/BuddhaPurnima2026Blog"),
);
const MahakaleshwarJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/MahakaleshwarJyotirlinga"),
);
const SomnathJyotrilinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/SomnathJyotrilinga"),
);

const GrishneshwarJyotirling = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/GrishneshwarJyotirlinga"),
);

const RameshwaramJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/RameshwaramJyotirlinga"),
);

const KashiVishwanathJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/KashiVishwanathJyotirlinga"),
);
const Blogs = React.lazy(() => import("./pages/Blogs"));
const BlogTemplate = React.lazy(() => import("./pages/Blogs/BlogTemplate"));
const Consultation = React.lazy(
  () => import("./pages/Consultation/Consultation"),
);
const HinduCalendar = React.lazy(() => import("./pages/HinduCalendar"));
const ZodiacSigns = React.lazy(() => import("./pages/ZodiacSigns"));
const ZodiacSignDetail = React.lazy(
  () => import("./pages/ZodiacSigns/ZodiacSignDetail"),
);
const JyotirLing = React.lazy(() => import("./pages/Blogs/JyotirlingaBlog"));
const MallikarjunaJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/MallikarjunaJyotirlinga"),
);
const TrimbakeshwarJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/TrimbakeshwarJyotirlinga"),
);
const BhimashankarJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/BhimashankarJyotirlinga"),
);
const KedarnathJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/KedarnathJyotirlinga"),
);
const NageshwarJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/NageshwarJyotirlinga"),
);
const VaidyanathJyotirlinga = React.lazy(
  () => import("./pages/Blogs/TwelveJyotirlingas/VaidyanathJyotirlinga"),
);

const OmkareshwarJyotirling = React.lazy(()=>import("./pages/Blogs/TwelveJyotirlingas/OmkareshwarJyotirling"))
const Accommodation = React.lazy(() => import("./pages/Accommodation"));
const AccommodationLanding = React.lazy(() => import("./pages/Accommodation/AccommodationLanding"));
const AccommodationDetails = React.lazy(() => import("./pages/Accommodation/AccommodationDetails"));

const queryClient = new QueryClient();

const ExternalRedirect = ({ url }: { url: string }) => {
  React.useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return (
    <div className="flex h-screen w-screen items-center justify-center text-muted-foreground italic">
      Redirecting to NamanDarshan Admin Portal...
    </div>
  );
};

const ParamsRedirect = ({ targetPattern }: { targetPattern: string }) => {
  const params = useParams();
  let target = targetPattern;
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      target = target.replace(`:${key}`, value);
    }
  });
  return <Navigate to={target} replace />;
};

const AstroChat = React.lazy( //chat 
  () => import("./pages/AstroChat")
);
const PanditDashboard = React.lazy(() => import("./pages/PanditDashboard"));

const App = () => {
  const AMPLIFY_URL = "https://main.d2j2dgxrbts39r.amplifyapp.com";

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider
          clientId={
            import.meta.env.VITE_GOOGLE_CLIENT_ID ||
            "dummy_client_id_please_configure"
          }
        >
          <AuthProvider>
            <SocketProvider>
              <WalletProvider>
              <BrowserRouter>
                <UserActivityTracker />
                <ReferralTracker />
                <ThemeProvider defaultTheme="smart" storageKey="vite-ui-theme">
                  <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <ScrollToTop />
                    <BackButtonListener />
                    <FloatingActionButtons />
                    <Suspense
                      fallback={
                        <div className="flex h-screen w-screen items-center justify-center">
                          Loading...
                        </div>
                      }
                    >
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route
                          path="/exclusive-temple-darshan-packeges"
                          element={<ExclusivePackages />}
                        />
                        <Route path="/referral" element={<Referral />} />
                        <Route
                          path="/ai-yatra-planner"
                          element={<AiYatraPlanner />}
                        />
                        <Route path="/daily-aarti" element={<DailyAarti />} />
                        <Route
                          path="/aaj-ki-tithi"
                          element={<HinduCalendar />}
                        />
                        <Route
                          path="/hindu-calendar"
                          element={<HinduCalendar />}
                        />
                        <Route
                          path="/naman-calendar"
                          element={<HinduCalendar />}
                        />
                        <Route path="/ai-kundali" element={<AiKundali />} />
                        <Route path="/ai-kundli" element={<AiKundali />} />
                        <Route path="/AIkundali" element={<AiKundali />} />
                        <Route
                          path="/ai-kundali/report"
                          element={<KundaliReport />}
                        />
                        <Route path="/yatra" element={<Yatra />} />
                        <Route path="/shirdi-yatra" element={<ShirdiYatra />} />
                        <Route
                          path="/char-dham-yatra"
                          element={<CharDhamYatra />}
                        />
                        <Route
                          path="/kedarnath-yatra"
                          element={<KedarnathYatra />}
                        />
                        <Route
                          path="/ayodhya-yatra"
                          element={<AyodhyaYatra />}
                        />
                        <Route
                          path="/vrindavan-yatra"
                          element={<VrindavanYatra />}
                        />
                        <Route
                          path="/jagannath-yatra"
                          element={<JagannathYatra />}
                        />
                        <Route
                          path="/char-dham-yatra-helicopter-dehradun"
                          element={<HelicopterCharDham />}
                        />
                          <Route
                            path="/booking"
                            element={<BookNowPage />}
                          />
                        <Route path="/temples" element={<Temples />} />
                        <Route
                          path="/temples/:slug"
                          element={<TempleDetails />}
                        />
                        <Route
                          path="/suggest-temple"
                          element={<SuggestTemple />}
                        />
                        <Route
                          path="/temples/new"
                          element={<NewTemplesPage />}
                        />
                        <Route
                          path="/devotee-wall"
                          element={<DevoteeWallPage />}
                        />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/volunteer" element={<VolunteerPage />} />
                        <Route path="/darshan" element={<Darshan />} />
                        <Route
                          path="/darshan/:slug"
                          element={<DarshanBookingPage />}
                        />
                        <Route path="/nested" element={<DarshanNestedLayout />}>
                          <Route
                            index
                            element={<Navigate to="temple" replace />}
                          />
                          <Route path="temple" element={<TempleSection />} />
                          <Route path="darshan" element={<DarshanSection />} />
                          <Route path="puja" element={<PujaSection />} />
                          <Route path="chadwa" element={<ChadhavaSection />} />
                          <Route
                            path="prasadam"
                            element={<PrasadamSection />}
                          />
                        </Route>

                        <Route path="/media/aarti" element={<Navigate to="/bhajan-aarti" replace />} />
                        <Route
                          path="/media/aarti/:slug"
                          element={<ParamsRedirect targetPattern="/bhajan-aarti/:slug" />}
                        />
                        <Route path="/bhajan-aarti" element={<Arti />}></Route>
                        <Route
                          path="/bhajan-aarti/:slug"
                          element={<AartiDetails />}
                        ></Route>
                        <Route path="/puja" element={<Puja />} />
                        <Route path="/puja/:slug" element={<PujaDetails />} />
                        <Route path="/puja/booking" element={<PujaBooking />} />
                        <Route path="/prasadam" element={<Prasadam />} />
                        <Route
                          path="/prasadam/:slug"
                          element={<PrasadamDetails />}
                        />
                        <Route path="/chadhava" element={<Chadhava />} />
                        <Route
                          path="/chadhava/:slug"
                          element={<ChadhavaDetails />}
                        />
                        {/* Standalone detail pages */}
                        <Route
                          path="/accommodation/dharamshala/:temple_name/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/dharamshalas/:temple_name/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/dharamshalas/:temple_name/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />
                        <Route
                          path="/accommodation/hotel/:temple_name/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/hotels/:temple_name/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/hotels/:temple_name/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />
                        <Route
                          path="/accommodation/ashram/:temple_name/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/ashrams/:temple_name/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/ashrams/:temple_name/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />

                        <Route
                          path="/accommodation/:category/detail/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />
                        <Route
                          path="/accommodation/hotel/detail/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/hotels/detail/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/hotels/detail/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />
                        <Route
                          path="/accommodation/ashram/detail/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/ashrams/detail/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/ashrams/detail/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />
                        <Route
                          path="/accommodation/dharamshala/detail/:dharamshala_name"
                          element={<ParamsRedirect targetPattern="/yatra/dharamshalas/detail/:dharamshala_name" />}
                        />
                        <Route
                          path="/yatra/dharamshalas/detail/:dharamshala_name"
                          element={<AccommodationDetails />}
                        />

                        {/* Stays listing by city/temple pages */}
                        <Route
                          path="/accommodation/dharamshala/:slug"
                          element={<ParamsRedirect targetPattern="/yatra/dharamshalas/:slug" />}
                        />
                        <Route
                          path="/yatra/dharamshalas/:slug"
                          element={<Accommodation />}
                        />
                        <Route
                          path="/accommodation/hotel/:slug"
                          element={<ParamsRedirect targetPattern="/yatra/hotels/:slug" />}
                        />
                        <Route
                          path="/yatra/hotels/:slug"
                          element={<Accommodation />}
                        />
                        <Route
                          path="/accommodation/ashram/:slug"
                          element={<ParamsRedirect targetPattern="/yatra/ashrams/:slug" />}
                        />
                        <Route
                          path="/yatra/ashrams/:slug"
                          element={<Accommodation />}
                        />

                        {/* Stays category landing pages */}
                        <Route
                          path="/accommodation/dharamshala"
                          element={<Navigate to="/yatra/dharamshalas" replace />}
                        />
                        <Route
                          path="/yatra/dharamshalas"
                          element={<AccommodationLanding />}
                        />
                        <Route
                          path="/accommodation/hotel"
                          element={<Navigate to="/yatra/hotels" replace />}
                        />
                        <Route
                          path="/yatra/hotels"
                          element={<AccommodationLanding />}
                        />
                        <Route
                          path="/accommodation/ashram"
                          element={<Navigate to="/yatra/ashrams" replace />}
                        />
                        <Route
                          path="/yatra/ashrams"
                          element={<AccommodationLanding />}
                        />
                        <Route
                          path="/accommodation"
                          element={<Navigate to="/yatra/dharamshalas" replace />}
                        />
                        <Route
                          path="/dharamshala"
                          element={<Navigate to="/yatra/dharamshalas" replace />}
                        />
                        <Route path="/astro-naman" element={<Astro />} />
                        <Route
                          path="/astro/:tab?"
                          element={<VedicConsultants />}
                        />
                        <Route
                          path="/vedic-consultants"
                          element={<VedicConsultants />}
                        />
                        <Route path="/astro-call" element={<AstroCall />} /> // Added route for AstroCall page
                        <Route path="/astro-chat" element={<AstroChat />} />
                        

                        <Route path="/thank-you" element={<ThankYou />} />
                        <Route path="/live-darshan" element={<LiveDarshan />} />
                        <Route
                          path="/live-darshan/:slug"
                          element={<LiveDarshanDetail />}
                        />
                        <Route path="/my-trips" element={<MyTrips />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                          path="/reset-password/:token"
                          element={<ResetPassword />}
                        />

                        {/* Blog Routes */}
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/blog" element={<Blogs />} />
                        <Route
                          path="/consultation"
                          element={<Consultation />}
                        />
                        <Route
                          path="/blog/shirdi-yatra"
                          element={<ShirdiYatra />}
                        />
                        <Route
                          path="/blogs/legend-of-kedarnath"
                          element={<KedarnathLegend />}
                        />
                        <Route
                          path="/blogs/mysteries-of-jagannath-puri"
                          element={<JagannathMystery />}
                        />
                        <Route
                          path="/blog/kedarnath-temple-yatra-history-legend"
                          element={<KedarnathBlog />}
                        />
                        <Route
                          path="/blog/ram-mandir-ayodhya-history-darshan-guide"
                          element={<RamMandirBlog />}
                        />
                        <Route
                          path="/blog/tirupati-balaji-darshan-booking-laddu-mystery"
                          element={<TirupatiBlog />}
                        />
                        <Route
                          path="/blog/golden-temple-amritsar-history-langar-guide"
                          element={<GoldenTempleBlog />}
                        />
                        <Route
                          path="/blog/chardham-yatra-medical-tips-packing-guide"
                          element={<ChardhamBlog />}
                        />
                        <Route
                          path="/blog/kashi-vishwanath-moksha-ganga-aarti-guide"
                          element={<KashiBlog />}
                        />
                        <Route
                          path="/blog/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti"
                          element={<MahakaleshwarBlog />}
                        />
                        <Route
                          path="/blog/shirdi-sai-baba-11-vachan-promises-meaning"
                          element={<ShirdiPromisesBlog />}
                        />
                        <Route
                          path="/blog/vedic-astrology-temple-remedies"
                          element={<VedicAstrologyBlog />}
                        />
                        <Route
                          path="/blog/holi-2026-history-significance-rituals"
                          element={<Holi2026Blog />}
                        />
                        <Route
                          path="/blog/hanuman-jayanti-2026-date-puja-rituals"
                          element={<HanumanJayanti2026Blog />}
                        />
                        <Route
                          path="/blog/chaitra-navratri-2026-dates-muhurat-rituals"
                          element={<ChaitraNavratri2026Blog />}
                        />
                        <Route
                          path="/blog/krishna-janmashtami-2026-date-puja-rituals"
                          element={<KrishnaJanmashtami2026Blog />}
                        />
                        <Route
                          path="/blog/april-full-moon-2026-pink-moon-guide"
                          element={<PinkMoon2026Blog />}
                        />
                        <Route
                          path="/blog/satyanarayan-pooja-peace-positivity-guide"
                          element={<SatyanarayanPoojaBlog />}
                        />
                        <Route
                          path="/blog/vastu-shanti-puja-new-home-guide"
                          element={<VastuShantiPujaBlog />}
                        />
                        <Route
                          path="/blog/vastu-shastra-guide-home"
                          element={<VastuShastraBlog />}
                        />
                        <Route
                          path="/blog/graha-shanti-puja-planetary-balance-guide"
                          element={<GrahaShantiPujaBlog />}
                        />
                        <Route
                          path="/blog/sabarimala-case-explained-complete-story-legal-battle"
                          element={<SabarimalaCaseBlog />}
                        />
                        <Route
                          path="/blog/Everything-You-Should-Know-About-the-12-Jyotirlingas-of-Lord-Shiva-and-Their-Spiritual-Significance"
                          element={<JyotirLing />}
                        />
                        <Route
                          path="/blog/mallikarjuna-jyotirlinga"
                          element={<MallikarjunaJyotirlinga />}
                        ></Route>

                        <Route
                          path="/blog/omkareshwar-jyotirlinga"
                          element={<OmkareshwarJyotirling />}
                        ></Route>
                        <Route
                          path="/blog/grishneshwar-jyotirlinga"
                          element={<GrishneshwarJyotirling />}
                        ></Route>
                        <Route
                          path="/blog/rameshwaram-jyotirlinga"
                          element={<RameshwaramJyotirlinga />}
                        ></Route>
                        <Route
                          path="/blog/kashiVishwanath-jyotirlinga"
                          element={<KashiVishwanathJyotirlinga />}
                        ></Route>

                        <Route
                          path="/blog/phag-nimantran-barsana-holi-guide"
                          element={<PhagNimantranBlog />}
                        />
                        <Route
                          path="/blog/laddu-mar-holi-barsana-guide"
                          element={<LadduMarHoliBlog />}
                        />
                        <Route
                          path="/blog/lathmar-holi-barsana-2026-darshan-guide"
                          element={<LathmarHoliBlog />}
                        />
                        <Route
                          path="/blog/nandgaon-lathmar-holi-2026-darshan-guide"
                          element={<NandgaonLathmarHoliBlog />}
                        />
                        <Route
                          path="/blog/rangbharni-ekadashi-vrindavan-2026-darshan-guide"
                          element={<RangbharniEkadashiBlog />}
                        />
                        <Route
                          path="/blog/mathura-janmabhoomi-huranga-2026-darshan-guide"
                          element={<MathuraJanmabhoomiBlog />}
                        />
                        <Route
                          path="/blog/chhadimar-holi-gokul-2026-darshan-guide-tips"
                          element={<GokulChhadimarHoliBlog />}
                        />
                        <Route
                          path="/blog/phalen-gaon-ki-holi-2026-fire-ritual-travel-guide-tips"
                          element={<PhalenGaonHoliBlog />}
                        />
                        <Route
                          path="/blog/dauji-huranga-2026-baldeo-darshan-guide-tips"
                          element={<DaujiHurangaBlog />}
                        />
                        <Route
                          path="/blog/sun-sign-vs-moon-sign-difference"
                          element={<SunMoonSignBlog />}
                        />
                        <Route
                          path="/blog/vedic-vs-western-astrology-difference"
                          element={<AstrologyComparisonBlog />}
                        />
                        <Route
                          path="/blog/vedic-astrology-predictions-global-tensions-2026"
                          element={<GlobalTensions2026Blog />}
                        />
                        <Route
                          path="/blog/shukra-gochar-april-2026-venus-in-taurus"
                          element={<ShukraGocharApril2026Blog />}
                        />
                        <Route
                          path="/blog/bankey-bihari-temple-darshan-update-2026-reforms"
                          element={<BankeyBihariDarshan2026Blog />}
                        />
                        <Route
                          path="/blog/buddha-purnima-2026-guide"
                          element={<BuddhaPurnima2026Blog />}
                        />
                        <Route
                          path="/blog/mahakaleshwar-jyotirlinga-ujjain-guide"
                          element={<MahakaleshwarJyotirlinga />}
                        />
                        <Route
                          path="/blog/somnath-jyotirlinga-gujarat-guide"
                          element={<SomnathJyotrilinga />}
                        />
                        <Route
                          path="/blog/trimbakeshwar-jyotirlinga-nashik-guide"
                          element={<TrimbakeshwarJyotirlinga />}
                        />
                        <Route
                          path="/blog/bhimashankar-jyotirlinga-guide"
                          element={<BhimashankarJyotirlinga />}
                        />
                        <Route
                          path="/blog/kedarnath-jyotirlinga-guide"
                          element={<KedarnathJyotirlinga />}
                        />
                        <Route
                          path="/blog/nageshwar-jyotirlinga-guide"
                          element={<NageshwarJyotirlinga />}
                        />
                        <Route
                          path="/blog/vaidyanath-jyotirlinga-guide"
                          element={<VaidyanathJyotirlinga />}
                        />
                        <Route path="/blog/:slug" element={<BlogTemplate />} />
                        <Route path="/zodiac-signs" element={<ZodiacSigns />} />
                        <Route
                          path="/zodiac-signs/:slug"
                          element={<ZodiacSignDetail />}
                        />

                        <Route path="/game" element={<Game />} />
                        <Route
                          path="/mahashivratari"
                          element={<Mahashivratri />}
                        />
                        <Route
                          path="/international-temples"
                          element={<InternationalTemple />}
                        />
                        <Route
                          path="/international-temples/:slug"
                          element={<InternationalTemple />}
                        />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/news-events" element={<NewsEvents />} />
                        <Route
                          path="/news-events/:slug"
                          element={<NewsDetail />}
                        />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route
                          path="/terms-conditions"
                          element={<TermsConditions />}
                        />
                        <Route
                          path="/privacy-policy"
                          element={<PrivacyPolicy />}
                        />
                        <Route
                          path="/disclaimer"
                          element={<Disclaimer />}
                        />
                        <Route
                          path="/delete-account"
                          element={<DeleteAccount />}
                        />
                        <Route
                          path="/crm"
                          element={
                            <ExternalRedirect url={`${AMPLIFY_URL}/crm`} />
                          }
                        />
                        <Route
                          path="/admin"
                          element={
                            <ExternalRedirect url={`${AMPLIFY_URL}/admin`} />
                          }
                        />
                        <Route
                          path="/admin/login"
                          element={
                            <ExternalRedirect
                              url={`${AMPLIFY_URL}/admin/login`}
                            />
                          }
                        />
                        <Route
                          path="/pandit-dashboard"
                          element={<PanditDashboard />}
                        />
                        <Route
                          path="/pandit-portal"
                          element={<Navigate to="/login?mode=login&role=pandit&redirect=%2Fpandit-dashboard" replace />}
                        />
                        <Route
                          path="/pandit-portal/login"
                          element={<Navigate to="/login?mode=login&role=pandit&redirect=%2Fpandit-dashboard" replace />}
                        />
                        <Route
                          path="/pandit-portal-admin"
                          element={
                            <ExternalRedirect
                              url={`${AMPLIFY_URL}/pandit-portal-admin`}
                            />
                          }
                        />
                        <Route
  path="/wallet"
  element={<Wallet />}
/>
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </TooltipProvider>
                </ThemeProvider>
              </BrowserRouter>
              </WalletProvider>
            </SocketProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
