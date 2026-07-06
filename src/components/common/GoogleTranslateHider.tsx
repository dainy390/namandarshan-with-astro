import { useEffect } from 'react';

const GoogleTranslateHider = () => {
    useEffect(() => {
        const hideGoogleElements = () => {
            // Classes and selectors for various Google Translate elements
            const selectors = [
                '.goog-te-banner-frame',
                '.goog-te-gadget-simple',
                '.goog-te-gadget-icon',
                '.goog-te-menu-value',
                '.goog-te-menu-frame',
                '.goog-te-spinner-pos',
                'iframe[title="Language Translate Widget"]',
                'iframe[id^=":"]',
                '.VIpgJd-ZVi9od-ORHb-OEVmcd',
                '.VIpgJd-ZVi9od-aZ2wEe-wOHMyf', // Common GTranslate persistent badge class
                '.goog-logo-link',
                '#goog-gt-tt', // Tooltip
                '.skiptranslate' // General wrapper (careful not to hide content, but usually sidebar/widget is strictly skiptranslate)
            ];

            selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    const el = element as HTMLElement;
                    // Check if it's the main container (we want to keep it technically, just invisible, but floating badges need to go)
                    if (el.id === 'google_translate_element') {
                        el.style.visibility = 'hidden';
                        el.style.opacity = '0';
                        el.style.position = 'absolute';
                        el.style.width = '0';
                        el.style.height = '0';
                        el.style.pointerEvents = 'none';
                    } else {
                        // For badges and iframes, nuke them visually
                        el.style.setProperty('display', 'none', 'important');
                        el.style.setProperty('visibility', 'hidden', 'important');
                    }
                });
            });
            // Force body top to 0
            if (document.body.style.top !== '0px') {
                document.body.style.setProperty('top', '0px', 'important');
                document.body.style.setProperty('position', 'static', 'important');
            }
        };

        // Run immediately
        hideGoogleElements();

        // Run on interval to catch re-injections
        const intervalId = window.setInterval(hideGoogleElements, 1000);

        // Observe mutations
        const observer = new MutationObserver(hideGoogleElements);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);

    return null;
};

export default GoogleTranslateHider;
