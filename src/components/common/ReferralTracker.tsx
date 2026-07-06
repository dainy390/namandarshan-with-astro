import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * ReferralTracker captures the 'ref' query parameter from the URL
 * and stores it in localStorage for future lead/booking attribution.
 */
const ReferralTracker = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const refCode = searchParams.get("ref");
        if (refCode) {
            console.log("Referral code detected:", refCode);
            // Store it for 30 days or until cleared
            localStorage.setItem("naman_referral_code", refCode);
            localStorage.setItem("naman_referral_timestamp", new Date().toISOString());
        }
    }, [searchParams]);

    return null; // This component doesn't render anything
};

export default ReferralTracker;
