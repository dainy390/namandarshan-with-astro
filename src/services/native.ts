import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { AppLauncher } from '@capacitor/app-launcher';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

/**
 * Trigger a haptic feedback vibration.
 * Graciously falls back (does nothing) on web where it's not supported.
 */
export const triggerHapticFeedback = async (style: ImpactStyle = ImpactStyle.Light) => {
    if (Capacitor.isNativePlatform()) {
        try {
            await Haptics.impact({ style });
        } catch (e) {
            console.error('HAPTICS ERROR', e);
        }
    }
    // No-op for web
};

/**
 * Open WhatsApp with a prepopulated message.
 * Falls back to `window.open` with the `https://wa.me/` link for web users.
 */
export const openWhatsApp = async (mobileNumber: string, message: string = "") => {
    // Strip all non-numeric characters for the WhatsApp URI
    const cleanedNumber = mobileNumber.replace(/\D/g, '');

    if (Capacitor.isNativePlatform()) {
        try {
            // Attempt to launch the native app directly via scheme
            const canOpen = await AppLauncher.canOpenUrl({ url: `whatsapp://send?phone=${cleanedNumber}` });
            if (canOpen.value) {
                await AppLauncher.openUrl({ url: `whatsapp://send?phone=${cleanedNumber}&text=${encodeURIComponent(message)}` });
                return;
            }
        } catch (e) {
            console.warn('Native AppLauncher failed to check WhatsApp scheme, falling back to web link.', e);
        }
    }

    // Fallback: Web generic wa.me link which works everywhere
    const url = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noreferrer,noopener');
};

/**
 * Request to take or pick a picture natively.
 */
export const takePicture = async () => {
    if (!Capacitor.isNativePlatform()) return null; // Web fallback depends on use-case, usually handled by <input type="file" />

    try {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: CameraSource.Prompt // Let the user choose Camera or Gallery
        });
        return image;
    } catch (e) {
        console.error("CAMERA ERROR", e);
        return null;
    }
};

/**
 * Initialize global native styling (Status Bar, Splash Screen).
 * Call this in App.tsx or index.tsx.
 */
export const initializeNativeApp = async () => {
    if (!Capacitor.isNativePlatform()) return;

    try {
        // Set StatusBar to Dark Style (light text) or Light Style depending on your theme
        await StatusBar.setStyle({ style: Style.Light });

        // Hide the Splash Screen once the React component mounts fully
        await SplashScreen.hide();
    } catch (e) {
        console.error('Failed to initialize native app styling', e);
    }
};
