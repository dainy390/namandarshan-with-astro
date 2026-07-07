const DEFAULT_DEV_API_BASE_URL = "http://localhost:5001";
const DEFAULT_PROD_API_BASE_URL = "https://namandarshan-astrotalk-testing-backend.onrender.com";
const LEGACY_PROD_API_BASE_URL = "http://52.66.103.126:5001";

const trimTrailingSlash = (value: string) => value.replace(/\/$/, "");

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

export const getApiBaseUrl = () => {
    // Current environment check
    const isProd = !import.meta.env.DEV;
    const envBaseUrl = (import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL)?.trim();

    // 1. Production Mode - Strict Domain Fallbacks
    if (isProd) {
        // Priority: Environment Variable > Sacred Production Domain
        if (envBaseUrl && isAbsoluteUrl(envBaseUrl)) {
            return trimTrailingSlash(envBaseUrl);
        }
        
        // If we are on Amplify or the main domain, return the official backend
        return DEFAULT_PROD_API_BASE_URL;
    }

    // 2. Development Mode (Localhost)
    const devUrl = trimTrailingSlash(envBaseUrl || DEFAULT_DEV_API_BASE_URL);
    // const devUrl = "https://namandarshan-astrotalk-testing-backend.onrender.com";
    return devUrl;
};

/**
 * Constructs a full API URL.
 * If the path is already an absolute URL (e.g., S3 URL), returns it unchanged.
 * @param path - The API endpoint path or full URL
 * @returns Full URL
 */
export const getApiUrl = (path: string) => {
    if (isAbsoluteUrl(path)) {
        return path;
    }
    const base = getApiBaseUrl();
    const endpoint = path.startsWith("/") ? path : `/${path}`;

    return `${base}${endpoint}`;
};

export const readJsonResponse = async <T = any>(response: Response): Promise<T> => {
    const payload = await response.text();
    const contentType = response.headers.get("content-type") || "";

    if (!payload && response.ok) {
        return {} as T;
    }

    if (!contentType.toLowerCase().includes("application/json")) {
        console.error(`[API] Unexpected content-type: "${contentType}". Body preview:`, payload.slice(0, 500));
        throw new Error("Server returned an unexpected (non-JSON) response. This usually happens if the API URL is wrong or the server is down.");
    }

    try {
        return JSON.parse(payload) as T;
    } catch (error) {
        console.error("[API] Failed to parse JSON response:", error, "Body preview:", payload.slice(0, 500));
        throw new Error("Server returned an unreadable response. Please refresh and try again.");
    }
};

// Simple helper for those who just want the base string
export const API_URL = getApiBaseUrl();
