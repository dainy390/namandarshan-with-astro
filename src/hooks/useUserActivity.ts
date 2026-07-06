import { useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getApiUrl } from '@/utils/api';

export const useUserActivity = () => {
    const { user } = useAuth();

    const logActivity = useCallback(async (
        activityType: 'page_view' | 'click' | 'form_start' | 'form_abandon' | 'booking_attempt' | 'search' | 'manual_log',
        description: string,
        metadata: any = {}
    ) => {
        // We only log if we have an email to associate it with, 
        // OR we can log anonymously if needed (but the user asked for "logged in user data")
        if (!user?.email) return;

        try {
            await fetch(getApiUrl('/api/user-activity'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id,
                    email: user.email,
                    name: user.name,
                    activityType,
                    description,
                    metadata: {
                        ...metadata,
                        url: window.location.href,
                        path: window.location.pathname,
                        userAgent: navigator.userAgent
                    }
                }),
            });
        } catch (error) {
            console.error('Failed to log user activity:', error);
        }
    }, [user]);

    return { logActivity };
};
