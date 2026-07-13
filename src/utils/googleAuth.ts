export const GOOGLE_CLIENT_ID = String(import.meta.env.VITE_GOOGLE_CLIENT_ID || "").trim();

export const isGoogleAuthConfigured =
  GOOGLE_CLIENT_ID.length > 0 &&
  !GOOGLE_CLIENT_ID.includes("dummy") &&
  GOOGLE_CLIENT_ID.endsWith(".apps.googleusercontent.com");

export const GOOGLE_PROVIDER_CLIENT_ID = isGoogleAuthConfigured
  ? GOOGLE_CLIENT_ID
  : "not-configured.apps.googleusercontent.com";

export const GOOGLE_AUTH_CONFIG_ERROR =
  "Google login is not configured correctly. Set VITE_GOOGLE_CLIENT_ID to a valid Google Web OAuth client ID and add this domain to Authorized JavaScript origins.";
