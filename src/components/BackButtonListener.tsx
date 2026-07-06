import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { App } from '@capacitor/app';

const BackButtonListener = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Listen to the hardware back button event
        const backButtonListener = App.addListener('backButton', ({ canGoBack }) => {
            // If we are absolutely on the home page, exit the app
            if (location.pathname === '/' || location.pathname === '/ops/dashboard' || location.pathname === '/login') {
                App.exitApp();
            } else {
                // Otherwise, navigate one step back in our React Router history stack
                navigate(-1);
            }
        });

        // Clean up listener on unmount
        return () => {
            backButtonListener.then((listener) => listener.remove());
        };
    }, [navigate, location]);

    // This is a headless component, it renders nothing
    return null;
};

export default BackButtonListener;
