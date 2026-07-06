import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";
import debounce from "lodash/debounce";
import { useCallback } from "react";
import { getApiUrl } from "@/utils/api";

const BookNow = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const debouncedUpdate = useCallback(
    debounce((orderId, itemId, serviceId, quantity) => {
      updateQuantityAPI(orderId, itemId, serviceId, quantity);
    }, 600),
    [],
  );

  const updateQuantityAPI = async (orderId, itemId, serviceId, quantity) => {
    await fetch(getApiUrl(`/api/orders/change-quantity/${serviceId}`), {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-user-id": user._id },
      body: JSON.stringify({ quantity }),
    });

    await fetch(getApiUrl(`/api/package/update-item/${orderId}`), {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-user-id": user._id },
      body: JSON.stringify({ itemId, quantity, userId: user._id }),
    });
  };

  useEffect(() => {
    let fetchBookingDetails = async () => {
      const phoneNumber = localStorage.getItem("phoneNumber");
      let res = await fetch(getApiUrl(`/api/package/${phoneNumber}`), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        let data = await res.json();
        setOrderDetail(data.package);
      } else {
        console.error("Failed to fetch booking details");
      }
    };
    fetchBookingDetails();
  }, []);

  useEffect(() => {
    if (!user || !orderDetail) return;

    if (user._id !== orderDetail.userId) {
      toast.error("You are not authorized to view this booking.");
      navigate("/", { replace: true });
    }
  }, [user, orderDetail, navigate]);

  const exploreServices = [
    {
      title: "Puja / Rituals",
      desc: "Schedule special pujas performed by temple priests.",
      route: "/puja",
      cta: "Book Puja",
    },
    {
      title: "Prasadam Delivery",
      desc: "Get sacred offerings from temples delivered to your doorstep.",
      route: "/prasadam",
      cta: "Order Prasadam",
    },
    {
      title: "Chadhava Offering",
      desc: "Offer Chadhava to your ancestors with our seamless booking.",
      route: "/chadhava",
      cta: "Offer Chadhava",
    },
    {
      title: "Astro Consultation",
      desc: "Consult with renowned astrologers for personalized guidance.",
      route: "/astro-naman?service=kundli",
      cta: "Book Consultation",
    },
  ];

  const handleQuantityChange = (itemId, serviceId, change) => {
    setOrderDetail((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item._id === itemId) {
          const newQty = Math.max(1, (item.quantity || 1) + change);
          debouncedUpdate(prev._id, itemId, serviceId, newQty);

          return { ...item, quantity: newQty };
        }
        return item;
      });

      const newTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0,
      );

      return {
        ...prev,
        items: updatedItems,
        totalAmount: newTotal,
      };
    });
  };

  const handleDeleteItem = async (itemId) => {
    try {
      setOrderDetail((prev) => {
        const updatedItems = prev.items.filter((item) => item._id !== itemId);

        const newTotal = updatedItems.reduce(
          (acc, item) =>
            acc + item.price * (item.quantity || 1) ||
            acc + item.pricing.totalAmount,
          0,
        );

        return {
          ...prev,
          items: updatedItems,
          totalAmount: newTotal,
        };
      });

      await fetch(getApiUrl(`/api/package/remove-item/${orderDetail._id}`), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleBuyNow = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      // console.log("Submitting Order Data:", orderData);
      // const res = await fetch(getApiUrl("/api/orders"), {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(orderData)
      // });
      let phoneNumber = localStorage.getItem("phoneNumber");
      console.log("Calling Create Payment API for Package ID");
      const res = await fetch(getApiUrl(`/api/package/${phoneNumber}/create-payment`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        const options = {
          key: import.meta.env.VITE_RZP_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: "Namandarshan",
          description: "Booking Payment",
          order_id: data.razorpayOrderId,
          prefill: {
            name: "Your Name",
            email: "your.email@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#ff0000",
          },
          handler: function (response) {

            
            console.log("=== HANDLER FIRED ===");
            console.log(response);

            console.log(
              "Verify URL:",
              getApiUrl("/api/package/verify-payment"),
            );


            fetch(getApiUrl("/api/package/verify-payment"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                packageId: data.packageId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.success) {
                  navigate("/thank-you", {
                    state: {
                      whatsappLink: `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(
                        `Namaste 🙏\n\nI have completed the payment for my booking.\n\n*Name:* ${data.order.name}\n*Booking ID:* ${data.order._id}\n\nPlease confirm my booking and provide further details.`,
                      )}&type=phone_number&app_absent=0`,
                      returnUrl: `/`,
                    },
                    replace: true,
                  });
                } else {
                  alert("Payment verification failed");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
                alert("Error verifying payment");
              });
          },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", async function (response) {
          console.log("Payment Failed:", response);

          try {
            await fetch(getApiUrl("/api/package/payment-failed"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-user-id": user._id,
              },
              body: JSON.stringify({
                orderId: id,
                error: response.error,
                razorpay_order_id: response.error.metadata.order_id,
                razorpay_payment_id: response.error.metadata.payment_id,
              }),
            });

            alert("Payment failed. Try again.");
          } catch (err) {
            console.error("Failed to update failure status", err);
          }
        });
        let result = rzp.open();

        toast.success(
          `Order for ${orderDetail && orderDetail.items[0].quantity} packs of ${
            orderDetail && orderDetail.items[0].title
          } placed successfully!`,
        );
      } else {
        const errorData = await res.json();
        console.error("Order failed:", errorData);
        toast.error(
          `Failed to place order: ${errorData.error || "Unknown error"}`,
        );
      }

      // if (res.ok) {
      //     toast.success(`Order for ${quantity} packs of ${prasadam.title} placed successfully!`);
      //     const message = `Namaste 🙏\n\nI want to order Prasadam.\n\n*Name:* ${formData.name}\n*Prasadam:* ${prasadam.title}\n*Quantity:* ${quantity}\n*Address:* ${formData.address}\n\nPlease process my order.`;
      //     const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

      //     markConverted();
      //     navigate("/thank-you", {
      //         state: { whatsappLink, returnUrl: window.location.pathname },
      //         replace: true
      //     });
      //     setFormData({ name: "", mobile: "", email: "", whatsapp: "", address: "" });
      //     setQuantity(1);
      // } else {
      //     const errorData = await res.json();
      //     console.error("Order failed:", errorData);
      //     toast.error(`Failed to place order: ${errorData.error || "Unknown error"}`);
      // }
      // } catch (error) {
      //     console.error("Order error:", error);
      //     toast.error("An error occurred. Please try again.");
      // } finally {
      //     setIsLoading(false);
      // }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Order Detail State:", orderDetail);
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="pt-48 md:pt-[220px] pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-orange-600 font-medium mb-2">Secure Checkout</p>

            <h1 className="text-4xl font-bold text-stone-900">
              Complete Your Booking
            </h1>

            <p className="text-stone-600 mt-3">
              Review your prasadam order and explore related temple services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT SECTION */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border p-8 flex flex-col">
              <h2 className="text-2xl font-semibold mb-6">Selected Services</h2>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {orderDetail?.items.length === 0 && (
                  <p className="text-stone-500">No items in package</p>
                )}

                {orderDetail?.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center border rounded-2xl p-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.serviceType || "Service"}
                      </h3>

                      {item.type === "order" && (
                        <div className="flex flex-col gap-2 mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            {/* <button
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg hover:bg-stone-100 disabled:opacity-40"
                              disabled={item.quantity <= 1}
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.serviceId,
                                  -1,
                                )
                              }
                            >
                              -
                            </button> */}

                            <span className="font-medium">{item.quantity}</span>

                            {/* <button
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg hover:bg-stone-100"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.serviceId,
                                  1,
                                )
                              }
                            >
                              +
                            </button> */}
                          </div>

                          {/* Pricing Breakdown */}
                          <div className="text-sm text-stone-600 space-y-1 ml-1">
                            <div>
                              ₹{item.pricing.subtotal} × {item.quantity}
                            </div>

                            {item.pricing.packagingFee > 0 && (
                              <div>
                                Package Fee + Delivery Fee: ₹
                                {item.pricing.packagingFee +
                                  item.pricing.deliveryFee}
                              </div>
                            )}

                            <div className="font-semibold text-stone-800 pt-1">
                              Total: ₹{item.pricing.totalAmount}
                            </div>
                          </div>
                        </div>
                      )}

                      {item.type === "booking" && (
                        <p className="text-stone-500 mt-2">
                          {/* {item.bookingDetails?.date?.slice(0, 10)} |{" "} */}
                          {item.price
                            ? `₹${item.price}`
                            : "Price not available"}
                        </p>
                      )}
                    </div>

                    {/* RIGHT SIDE: price + delete */}
                    <div className="flex items-center gap-6">
                      <p className="text-2xl font-bold text-orange-600">
                        {/* ₹{item.pricing.totalAmount || item.price} */}
                      </p>

                      {/* Delete Button */}
                      <button
                        className="text-red-500 hover:text-red-600 text-sm font-medium"
                        onClick={() => handleDeleteItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t pt-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-stone-900">
                    Explore More Services
                  </h3>
                  <span className="text-sm text-orange-600 font-medium">
                    Add before checkout
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {exploreServices.map((service, i) => (
                    <div
                      key={i}
                      className="group relative bg-white border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

                      {/* Content */}
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-lg font-semibold text-stone-900 mb-2">
                            {service.title}
                          </h4>

                          <p className="text-sm text-stone-600 leading-relaxed mb-5">
                            {service.desc}
                          </p>
                        </div>

                        {/* CTA */}
                        <Button
                          variant="outline"
                          className="w-full rounded-xl border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition"
                          onClick={() => navigate(service.route)}
                        >
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div>
              <div className="bg-white rounded-3xl shadow-md border p-8 sticky top-32">
                <h2 className="text-2xl font-semibold mb-6">Bill Summary</h2>

                <div className="space-y-4 text-stone-700">
                  <div className="flex justify-between">
                    <span>Items Total</span>
                    <span>₹{orderDetail?.totalAmount || 0}</span>
                  </div>

                  {/* <div className="flex justify-between">
                    <span>Packaging Fee</span>
                    <span>₹0</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹0</span>
                  </div> */}

                  <hr />

                  <div className="flex justify-between text-xl font-bold text-stone-900">
                    <span>Total</span>
                    <span>₹{orderDetail?.totalAmount || 0}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-8 h-14 text-lg rounded-2xl bg-orange-600 hover:bg-orange-700"
                  onClick={handleBuyNow}
                >
                  BUY NOW
                </Button>

                <p className="text-xs text-center text-stone-500 mt-4">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookNow;
