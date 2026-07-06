import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "../components/ui/container";
import SEO from "@/components/SEO";
import { useAuth } from "@/context/AuthContext";
import { getApiUrl } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
    const { isUserAuthenticated, user, logoutUser } = useAuth();
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        if (!window.confirm("Are you absolutely sure you want to delete your account? This action cannot be undone.")) {
            return;
        }

        setIsDeleting(true);
        try {
            const token = localStorage.getItem("userToken");
            const response = await fetch(getApiUrl("/api/auth/delete-account"), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                toast.success("Your account has been deleted successfully.");
                logoutUser();
                navigate("/");
            } else {
                const data = await response.json();
                toast.error(data.message || "Failed to delete account. Please try again or contact support.");
            }
        } catch (error) {
            console.error("Error deleting account:", error);
            toast.error("Network error occurred. Please try again.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Layout>
            <SEO title="Delete Account - Naman Darshan" description="Information and steps on how to delete your Naman Darshan account." />
            <Container className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Namandarshan Account Deletion</h1>
                        <p className="text-xl text-stone-600">At Namandarshan, we respect your privacy and provide users with the ability to delete their account and associated personal data.</p>
                    </div>

                    <div className="prose prose-stone max-w-none text-stone-700 space-y-6">
                        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">How to Delete Your Account</h2>
                        <p className="leading-relaxed text-lg">
                            You can delete your account directly from the Namandarshan mobile application:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 text-lg">
                            <li>Open the Namandarshan app.</li>
                            <li>Log in to your account.</li>
                            <li>Navigate to <strong>Profile</strong>.</li>
                            <li>Tap <strong>Delete Account</strong>.</li>
                            <li>Confirm your account deletion request.</li>
                        </ol>

                        {isUserAuthenticated && (
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-8">
                                <h3 className="text-xl font-bold text-red-900 mb-2">Delete Web Account</h3>
                                <p className="mb-4 text-red-800">You are currently logged in as {user?.email}. If you wish to delete your account right now, click the button below.</p>
                                <Button 
                                    onClick={handleDeleteAccount} 
                                    disabled={isDeleting}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    {isDeleting ? "Processing..." : "Delete My Account"}
                                </Button>
                            </div>
                        )}

                        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">What Data Will Be Deleted</h2>
                        <p className="leading-relaxed text-lg mb-2">
                            Upon successful account deletion, the following data may be permanently removed:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Profile information</li>
                            <li>User-generated content associated with your account</li>
                            <li>Account preferences and settings</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">Data That May Be Retained</h2>
                        <p className="leading-relaxed text-lg mb-2">
                            Certain information may be retained for a limited period where required for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Legal and regulatory compliance</li>
                            <li>Fraud prevention and security purposes</li>
                            <li>Financial and transaction record keeping</li>
                            <li>Dispute resolution</li>
                        </ul>
                        <p className="leading-relaxed text-lg mt-4">
                            Such retained information will be handled in accordance with our Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">Processing Time</h2>
                        <p className="leading-relaxed text-lg">
                            Account deletion requests are typically processed within a reasonable period after confirmation.
                        </p>

                        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">Need Help?</h2>
                        <p className="leading-relaxed text-lg">
                            If you experience any issues deleting your account, please contact us:
                            <br /><br />
                            <strong>Email:</strong> <a href="mailto:support@namandarshan.com" className="text-sacred-orange hover:underline">support@namandarshan.com</a>
                            <br /><br />
                            For more information, please review our <a href="/privacy-policy" className="text-sacred-orange hover:underline">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default DeleteAccount;
