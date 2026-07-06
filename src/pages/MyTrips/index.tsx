import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Star,
  ShoppingBag,
  LogOut,
  Flower,
  Loader2,
  Sparkles,
  Headset,
  BookOpen,
  Zap,
  Gamepad2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "@/utils/api";
import { Link } from "react-router-dom";

const MyTrips = () => {
  const { user, logoutUser, isUserAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return; // Wait for auth check to complete

    if (!isUserAuthenticated) {
      navigate("/login");
      return;
    }

    if (user?.email) {
      // Use encodeURIComponent to handle special characters in email
      fetch(getApiUrl(`/api/bookings/user/${encodeURIComponent(user.email)}`))
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch bookings:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isUserAuthenticated, user, navigate, isLoading]);

  const getIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case "darshan":
        return MapPin;
      case "puja":
        return Star;
      case "prasadam":
        return ShoppingBag;
      case "chadhava":
        return Flower;
      case "package":
      case "yatra":
        return Calendar;
      default:
        return Star;
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date pending";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getBookingStatusDetails = (booking: any) => {
    if (booking.isTripCompleted) {
      return {
        label: "Completed",
        style: "bg-green-100 text-green-800",
      };
    }

    const status = (booking.status || "").toLowerCase();

    if (["cancelled", "lost", "not interested"].includes(status)) {
      return {
        label: "Cancelled",
        style: "bg-red-100 text-red-800",
      };
    }

    if (
      [
        "confirmed",
        "completed",
        "converted",
        "won",
        "converted/won",
        "in-progress",
        "paid",
      ].includes(status)
    ) {
      return {
        label: "Processing",
        style: "bg-blue-100 text-blue-800",
      };
    }

    return {
      label: "Pending",
      style: "bg-amber-100 text-amber-800",
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!isUserAuthenticated) return null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEO title="My Account" />
      <Header />
      <main className="flex-grow pt-52 md:pt-60 container mx-auto px-4 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary">
              My Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name || "Devotee"}!
            </p>
          </div>
          <div className="flex gap-3">
            <Link to={`/booking`} className="flex-1">
              <Button variant="outline" className="w-full font-medium">
                View My Package
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
              className="flex-1 gap-2 text-destructive hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Bookings
              </CardTitle>
              <Calendar className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings.length}</div>
              <p className="text-xs text-muted-foreground">Lifetime</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Darshans / Pujas
              </CardTitle>
              <MapPin className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  bookings.filter((b) =>
                    ["darshan", "puja"].includes(b.type?.toLowerCase()),
                  ).length
                }
              </div>
              <p className="text-xs text-muted-foreground">
                Spiritual Activities
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Offerings</CardTitle>
              <ShoppingBag className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  bookings.filter((b) =>
                    ["prasadam", "chadhava"].includes(b.type?.toLowerCase()),
                  ).length
                }
              </div>
              <p className="text-xs text-muted-foreground">
                Prasadam & Chadhava
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Recent Activities */}
          <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 h-full">
              <h2 className="text-xl font-bold mb-6">Recent Activities</h2>

              {loading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => {
                    const Icon = getIcon(booking.type);
                    const statusDetails = getBookingStatusDetails(booking);

                    // Safely parse Ops CRM fulfillment details stored in `notes`
                    let parsedNotes: any = {};
                    try {
                      parsedNotes =
                        typeof booking.notes === "string"
                          ? JSON.parse(booking.notes)
                          : booking.notes || {};
                    } catch (e) {
                      parsedNotes = {};
                    }

                    const panditName =
                      parsedNotes.panditAssigned || parsedNotes.panditName;
                    const rawHotel = parsedNotes.hotelTaxi?.hotel;
                    const rawTaxi = parsedNotes.hotelTaxi?.taxi;

                    const hotelText =
                      rawHotel &&
                      rawHotel.toLowerCase() !== "n/a" &&
                      rawHotel.toLowerCase() !== "no" &&
                      rawHotel.toLowerCase() !== "false"
                        ? rawHotel
                        : null;
                    const taxiText =
                      rawTaxi &&
                      rawTaxi.toLowerCase() !== "n/a" &&
                      rawTaxi.toLowerCase() !== "no" &&
                      rawTaxi.toLowerCase() !== "false"
                        ? rawTaxi
                        : null;
                    const extraServices =
                      parsedNotes.extraServices &&
                      parsedNotes.extraServices.toLowerCase() !== "n/a"
                        ? parsedNotes.extraServices
                        : null;

                    return (
                      <div
                        key={booking._id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors gap-4"
                      >
                        <div className="flex items-start md:items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1 md:mt-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-foreground">
                              {booking.serviceName ||
                                booking.title ||
                                booking.type}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="capitalize">{booking.type}</span>
                              <span>•</span>
                              <span>
                                {formatDate(booking.createdAt || booking.date)}
                              </span>
                              {(booking.assignedPandit || panditName) && (
                                <>
                                  <span>•</span>
                                  <div className="flex items-center gap-1.5 font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                                    {booking.assignedPandit?.profilePicture ? (
                                      <img
                                        src={
                                          booking.assignedPandit.profilePicture
                                        }
                                        alt="Pandit"
                                        className="w-5 h-5 rounded-full object-cover"
                                      />
                                    ) : (
                                      <div className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 text-[10px]">
                                        P
                                      </div>
                                    )}
                                    <span>
                                      Acharya{" "}
                                      {booking.assignedPandit?.name ||
                                        panditName}
                                    </span>
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Live Service Progress */}
                            {booking.serviceProgress &&
                              booking.serviceProgress.length > 0 && (
                                <div className="mt-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                                  <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">
                                    Live Progress Tracker
                                  </p>
                                  <div className="space-y-2">
                                    {booking.serviceProgress.map(
                                      (prog: any, i: number) => (
                                        <div
                                          key={i}
                                          className="flex gap-3 text-sm"
                                        >
                                          <div className="flex flex-col items-center">
                                            <div
                                              className={`w-2 h-2 rounded-full ${
                                                i ===
                                                booking.serviceProgress.length -
                                                  1
                                                  ? "bg-blue-600 ring-2 ring-blue-200"
                                                  : "bg-blue-300"
                                              }`}
                                            />
                                            {i !==
                                              booking.serviceProgress.length -
                                                1 && (
                                              <div className="w-0.5 h-full bg-blue-200 mt-1" />
                                            )}
                                          </div>
                                          <div className="pb-1">
                                            <p
                                              className={`font-medium ${
                                                i ===
                                                booking.serviceProgress.length -
                                                  1
                                                  ? "text-blue-900"
                                                  : "text-blue-600/70"
                                              }`}
                                            >
                                              {prog.status}
                                            </p>
                                            {prog.notes && (
                                              <p className="text-xs text-blue-700/80">
                                                {prog.notes}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}

                            {/* Extra Details */}
                            {(hotelText || taxiText || extraServices) && (
                              <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-slate-100">
                                {hotelText && (
                                  <span className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                    🏨{" "}
                                    {hotelText.length > 20
                                      ? "Hotel Booked"
                                      : hotelText}
                                  </span>
                                )}
                                {taxiText && (
                                  <span className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                    🚖{" "}
                                    {taxiText.length > 20
                                      ? "Taxi Booked"
                                      : taxiText}
                                  </span>
                                )}
                                {extraServices && (
                                  <span className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                    ✨ {extraServices}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-3 self-start md:self-auto">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusDetails.style}`}
                          >
                            {statusDetails.label}
                          </span>
                          {booking.serviceId && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs h-8 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full"
                              onClick={() => {
                                const type = booking.type?.toLowerCase();
                                const path =
                                  type === "yatra" || type === "package"
                                    ? `/${booking.serviceId}`
                                    : `/${type}/${booking.serviceId}`;
                                navigate(path);
                              }}
                            >
                              View Service
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No bookings found yet.</p>
                  <Button
                    variant="link"
                    className="mt-2 text-primary"
                    onClick={() => navigate("/temples")}
                  >
                    Explore Temples
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Quick Access Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Explore More
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <button
                  onClick={() => navigate("/zodiac-signs")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        Rashi Blogs
                      </span>
                      <span className="text-slate-500 text-xs">
                        Daily Horoscope
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => navigate("/consultation")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Headset className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        Astro Consultation
                      </span>
                      <span className="text-slate-500 text-xs">
                        Expert Advice
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => navigate("/aaj-ki-tithi")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        Aaj Ki Tithi
                      </span>
                      <span className="text-slate-500 text-xs">
                        Daily Panchang
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => navigate("/blogs")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        Blogs
                      </span>
                      <span className="text-slate-500 text-xs">
                        Read & Learn
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => navigate("/ai-kundali")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        AI Kundali
                      </span>
                      <span className="text-slate-500 text-xs">
                        Free AI Report
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => navigate("/game")}
                  className="group relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm">
                        Spiritual Quest
                      </span>
                      <span className="text-slate-500 text-xs">
                        Interactive Games
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyTrips;
