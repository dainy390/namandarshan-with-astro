import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-aarti.jpg";
import { getApiUrl } from "@/utils/api";

const ResetPassword = () => {
    const { token } = useParams<{ token: string }>();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setStatus("error");
            setMessage("Passwords do not match.");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch(getApiUrl(`/api/auth/reset-password/${token}`), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password })
            });
            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setMessage("Password reset successful. You can now login.");
                setTimeout(() => navigate("/login"), 3000);
            } else {
                setStatus("error");
                setMessage(data.message || "Failed to reset password.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            <SEO title="Reset Password" />
            <div className="absolute inset-0 z-0">
                <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>
            <Header />

            <main className="flex-grow container mx-auto px-4 flex items-start justify-center relative z-10 pt-32 pb-8 md:pt-40 md:pb-12">
                <Card className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl border-white/20 mt-8 md:mt-12">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-3xl font-display font-bold text-primary">Reset Password</CardTitle>
                        <CardDescription className="text-base">
                            Enter your new password below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {status === "success" ? (
                            <div className="text-center text-green-600 font-medium py-4">
                                {message}
                            </div>
                        ) : (
                            <form onSubmit={handleReset} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password">New Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        className="bg-white"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        required
                                        className="bg-white"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                {status === "error" && (
                                    <div className="text-red-500 text-sm">{message}</div>
                                )}
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? "Resetting..." : "Reset Password"}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default ResetPassword;
