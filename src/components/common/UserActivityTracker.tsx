import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserActivity } from '@/hooks/useUserActivity';

export const UserActivityTracker = () => {
    const location = useLocation();
    const { logActivity } = useUserActivity();

    useEffect(() => {
        // Log page view on location change
        const path = location.pathname;

        // Skip logging for CRM routes to avoid cluttering devotee activities with agent actions
        // (Though the hook already checks for user.email, which is for devotees)
        if (path.startsWith('/crm') || path.startsWith('/ops') || path.startsWith('/admin')) {
            return;
        }

        // Generate a friendly description based on the path
        let description = `Visited ${path}`;
        if (path === '/') description = 'Visited Home Page';
        else if (path.startsWith('/temples/')) description = `Viewed Temple: ${path.split('/').pop()}`;
        else if (path.startsWith('/puja/')) description = `Viewed Puja: ${path.split('/').pop()}`;
        else if (path.startsWith('/darshan/')) description = `Viewed Darshan: ${path.split('/').pop()}`;
        else if (path.startsWith('/prasadam/')) description = `Viewed Prasadam: ${path.split('/').pop()}`;
        else if (path.startsWith('/chadhava/')) description = `Viewed Chadhava: ${path.split('/').pop()}`;

        logActivity('page_view', description, { path });
    }, [location, logActivity]);

    return null; // This component doesn't render anything
};

export default UserActivityTracker;
