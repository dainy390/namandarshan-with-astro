import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();
    const navigationType = useNavigationType();
    const scrollKey = `scroll-pos-${pathname}${search}${hash}`;
    const scrollLock = useRef<boolean>(true);

    // Set scroll restoration to manual to prevent browser interference
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        let active = true;
        scrollLock.current = true;

        const cleanupRestoration = () => {
            if (active) {
                document.documentElement.style.scrollBehavior = '';
                scrollLock.current = false;
            }
        };

        if (navigationType === "POP") {
            const savedPosition = sessionStorage.getItem(scrollKey);
            if (savedPosition) {
                const targetY = parseInt(savedPosition, 10);
                let attempts = 0;
                const maxAttempts = 30; // 3 seconds total

                // Temporarily disable smooth scroll for instant restoration
                document.documentElement.style.scrollBehavior = 'auto';

                const restoreScroll = () => {
                    if (!active) return;

                    const currentHeight = document.documentElement.scrollHeight;
                    const viewportHeight = window.innerHeight;

                    // Only restore if the page has loaded enough content to reach the target
                    if (currentHeight >= targetY + viewportHeight || attempts >= maxAttempts) {
                        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
                        
                        // Give a tiny bit of time for layout to settle before unlocking
                        setTimeout(cleanupRestoration, 150);
                    } else {
                        attempts++;
                        setTimeout(restoreScroll, 100);
                    }
                };

                restoreScroll();
            } else {
                cleanupRestoration();
            }
        } else {
            // Standard forward navigation
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            setTimeout(cleanupRestoration, 100);
        }

        return () => {
            active = false;
            document.documentElement.style.scrollBehavior = '';
        };
    }, [pathname, search, hash, navigationType, scrollKey]);

    useEffect(() => {
        let timeoutId: number;

        const handleScroll = () => {
            // ONLY save if we are not in a restoration phase
            if (!scrollLock.current) {
                window.clearTimeout(timeoutId);
                timeoutId = window.setTimeout(() => {
                    sessionStorage.setItem(scrollKey, window.scrollY.toString());
                }, 150) as unknown as number;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.clearTimeout(timeoutId);
        };
    }, [scrollKey]);

    return null;
}
