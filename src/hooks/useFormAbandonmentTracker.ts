import { useEffect, useRef, useCallback } from "react";
import { getApiUrl } from "@/utils/api";

interface UseFormAbandonmentTrackerOptions {
    isOpen: boolean;
    formType: string;
    serviceName?: string;
    formData: Record<string, any>;
}

/**
 * Tracks form abandonment by auto-saving partial form data to the server.
 *
 * - Generates a sessionId per modal open.
 * - Debounces saves (2s) as user types.
 * - Marks as "abandoned" on close (if user typed anything).
 * - Exposes markConverted() to call on successful submit.
 */
export function useFormAbandonmentTracker({
    isOpen,
    formType,
    serviceName = "",
    formData,
}: UseFormAbandonmentTrackerOptions) {
    const sessionIdRef = useRef<string | null>(null);
    const isConvertedRef = useRef(false);
    const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hasDirtyDataRef = useRef(false);
    const hasUserInteractedRef = useRef(false);

    // Keep a ref to always have the latest formData (avoids stale closures)
    const formDataRef = useRef(formData);
    const formTypeRef = useRef(formType);
    const serviceNameRef = useRef(serviceName);

    useEffect(() => { formDataRef.current = formData; }, [formData]);
    useEffect(() => { formTypeRef.current = formType; }, [formType]);
    useEffect(() => { serviceNameRef.current = serviceName; }, [serviceName]);

    // Check if the user has typed anything meaningful
    const hasData = useCallback((data: Record<string, any>): boolean => {
        return Object.values(data).some((val) => {
            if (typeof val === "string") return val.trim().length > 0;
            if (typeof val === "number") return val > 0;
            return !!val;
        });
    }, []);

    // Save to server using refs (fire-and-forget, no blocking the UI)
    const sendDump = useCallback(
        (status: "in_progress" | "abandoned" | "converted") => {
            const sid = sessionIdRef.current;
            if (!sid) return;

            const currentFormData = formDataRef.current;
            const currentFormType = formTypeRef.current;
            const currentServiceName = serviceNameRef.current;

            // Don't save if there's no data at all
            if (status !== "converted" && !hasData(currentFormData)) return;

            const payload = {
                sessionId: sid,
                formType: currentFormType,
                formData: currentFormData,
                serviceName: currentServiceName,
                pageUrl: window.location.href,
                status,
                userAgent: navigator.userAgent,
            };

            // Use sendBeacon for abandoned (page might be closing) and fetch for others.
            if (status === "abandoned" && navigator.sendBeacon) {
                const blob = new Blob([JSON.stringify(payload)], {
                    type: "application/json",
                });
                navigator.sendBeacon(getApiUrl("/api/form-dumps"), blob);
            } else {
                fetch(getApiUrl("/api/form-dumps"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                    keepalive: true,
                }).catch(() => {
                    // Silently fail — this is background tracking, not critical
                });
            }
        },
        [hasData]
    );

    // Generate sessionId and reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            sessionIdRef.current = `fd_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
            isConvertedRef.current = false;
            hasDirtyDataRef.current = false;
            hasUserInteractedRef.current = false;
        }
    }, [isOpen]);

    // Track user interaction to avoid false dumps for purely pre-filled data
    useEffect(() => {
        if (!isOpen) return;

        const handleInteraction = () => {
            hasUserInteractedRef.current = true;
        };

        const handleRoleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (target && (
                target.closest('[role="option"]') ||
                target.closest('[role="checkbox"]') ||
                target.closest('[role="radio"]') ||
                target.closest('[role="switch"]') ||
                target.closest('.rdp-day')
            )) {
                hasUserInteractedRef.current = true;
            }
        };

        // Capture phase to ensure we catch it before anything stops propagation
        const controller = new AbortController();
        const options = { capture: true, signal: controller.signal };

        document.addEventListener('input', handleInteraction, options);
        document.addEventListener('change', handleInteraction, options);
        document.addEventListener('click', handleRoleClick, options);

        return () => controller.abort();
    }, [isOpen]);

    // Debounced auto-save on form data change
    useEffect(() => {
        if (!isOpen || !sessionIdRef.current) return;

        // Skip saving if the user hasn't explicitly interacted yet
        // This prevents dumping purely programmatic pre-fills (like Vedic request text)
        if (!hasUserInteractedRef.current) return;

        if (hasData(formData)) {
            hasDirtyDataRef.current = true;
        } else {
            return; // Don't save empty forms
        }

        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        debounceTimerRef.current = setTimeout(() => {
            sendDump("in_progress");
        }, 2000);

        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [isOpen, formData, sendDump, hasData]);

    // Handle modal close → mark as abandoned
    useEffect(() => {
        if (!isOpen && sessionIdRef.current && !isConvertedRef.current && hasDirtyDataRef.current) {
            sendDump("abandoned");
            sessionIdRef.current = null;
        }
    }, [isOpen, sendDump]);

    // Handle component unmount (for full page forms) → mark as abandoned
    useEffect(() => {
        return () => {
            if (sessionIdRef.current && !isConvertedRef.current && hasDirtyDataRef.current) {
                sendDump("abandoned");
            }
        };
    }, [sendDump]);

    // Handle page unload / tab close
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (sessionIdRef.current && !isConvertedRef.current && hasDirtyDataRef.current) {
                sendDump("abandoned");
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [sendDump]);

    // Expose markConverted for successful submit
    const markConverted = useCallback(() => {
        isConvertedRef.current = true;
        sendDump("converted");
    }, [sendDump]);

    return { markConverted };
}
