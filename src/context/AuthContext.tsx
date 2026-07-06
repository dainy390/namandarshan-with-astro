import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getApiUrl } from '@/utils/api';

interface User {
    _id?: string;
    email: string;
    name?: string;
    role?: 'admin' | 'manager' | 'user' | 'astrologer' | 'pandit';
    password?: string;
    authProvider?: string;
    avatar?: string;
    banner?: string;
}

interface AuthContextType {
    isUserAuthenticated: boolean;
    isAdminAuthenticated: boolean;
    user: User | null;
    admin: User | null;
    isLoading: boolean;
    loginUser: (email: string, password?: string, role?: string) => Promise<{ success: boolean, message?: string }>;
    signupUser: (email: string, password?: string, name?: string, role?: string) => Promise<{ success: boolean, message?: string }>;
    loginAdmin: (email: string, password?: string) => boolean; // Keeping mock admin for now or adjust later
    logoutUser: () => void;
    logoutAdmin: () => void;
    // New Advanced Auth Methods
    sendOtp: (email: string) => Promise<{ success: boolean, message?: string }>;
    verifyOtp: (email: string, otp: string) => Promise<{ success: boolean, message?: string }>;
    socialLogin: (provider: string, email: string, name: string, socialId: string, role?: string) => Promise<{ success: boolean, message?: string }>;
    updateUserProfile: (updates: Partial<User>) => Promise<{ success: boolean, message?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [admin, setAdmin] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // App Load: Check Tokens
        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            fetchUserFromToken(userToken);
        } else {
            setIsLoading(false);
        }

        // Keep Admin mock state check
        const storedAdminAuth = localStorage.getItem('isAdminAuthenticated');
        const storedAdmin = localStorage.getItem('admin');
        if (storedAdminAuth === 'true' && storedAdmin) {
            setIsAdminAuthenticated(true);
            setAdmin(JSON.parse(storedAdmin));
        }
    }, []);

    const fetchUserFromToken = async (token: string) => {
        try {
            const res = await fetch(getApiUrl('/api/auth/me'), {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.success) {
                setUser(data.user);
                setIsUserAuthenticated(true);
            } else {
                logoutUser();
            }
        } catch (error) {
            console.error(error);
            logoutUser();
        } finally {
            setIsLoading(false);
        }
    };

    const handleAuthSuccess = async (data: any) => {
        if (data.success && data.token) {
            localStorage.setItem('userToken', data.token);
            // Fetch full profile immediately to ensure all fields like avatar/banner are present 
            // and synced from the server's source of truth.
            await fetchUserFromToken(data.token);
            return { success: true, message: data.message || "Success" };
        }
        return { success: false, message: data.message || "Authentication failed" };
    };

    const signupUser = async (email: string, password?: string, name?: string, role: string = 'user'): Promise<{ success: boolean, message?: string }> => {
        try {
            const res = await fetch(getApiUrl('/api/auth/signup'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name, phone: '', role })
            });
            const data = await res.json();
            return await handleAuthSuccess(data);
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const loginUser = async (email: string, password?: string, role: string = 'user'): Promise<{ success: boolean, message?: string }> => {
        try {
            const res = await fetch(getApiUrl('/api/auth/login'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role })
            });
            const data = await res.json();
            return await handleAuthSuccess(data);
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const sendOtp = async (email: string): Promise<{ success: boolean, message?: string }> => {
        try {
            const res = await fetch(getApiUrl('/api/auth/send-otp'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            return { success: data.success, message: data.message };
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const verifyOtp = async (email: string, otp: string): Promise<{ success: boolean, message?: string }> => {
        try {
            const res = await fetch(getApiUrl('/api/auth/verify-otp'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            const data = await res.json();
            return await handleAuthSuccess(data);
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const socialLogin = async (provider: string, email: string, name: string, socialId: string, role: string = 'user'): Promise<{ success: boolean, message?: string }> => {
        try {
            const res = await fetch(getApiUrl('/api/auth/social-login'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ provider, email, name, socialId, role })
            });
            const data = await res.json();
            return await handleAuthSuccess(data);
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const loginAdmin = (email: string, password?: string): boolean => {
        if (email.toLowerCase() === 'admin@namandarshan.com' && password === 'admin123') {
            const adminUser: User = { email, name: 'Admin', role: 'admin' };
            setAdmin(adminUser);
            setIsAdminAuthenticated(true);
            localStorage.setItem('isAdminAuthenticated', 'true');
            localStorage.setItem('admin', JSON.stringify(adminUser));
            return true;
        }
        return false;
    };

    const updateUserProfile = async (updates: Partial<User>): Promise<{ success: boolean, message?: string }> => {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) return { success: false, message: "Not authorized" };

            const res = await fetch(getApiUrl('/api/auth/profile'), {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updates)
            });
            const data = await res.json();
            if (data.success) {
                // Combine existing user with updates for absolute immediate feedback 
                // in case the server response is missing fields we just updated.
                setUser(prev => prev ? { ...prev, ...updates } : null);
                
                // Then sync with whatever server definitely has
                if (data.user) {
                    setUser(data.user);
                }
                
                return { success: true, message: "Profile updated successfully" };
            }
            return { success: false, message: data.message || "Update failed" };
        } catch (err: any) {
            console.error(err);
            return { success: false, message: "Network error occurred." };
        }
    };

    const logoutUser = () => {
        setIsUserAuthenticated(false);
        setUser(null);
        localStorage.removeItem('userToken');
        // Clear all identity-related localStorage keys
        localStorage.removeItem("devotee_name");
        localStorage.removeItem("user.profileImage");
        localStorage.removeItem("user.banner");
    };

    const logoutAdmin = () => {
        setIsAdminAuthenticated(false);
        setAdmin(null);
        localStorage.removeItem('isAdminAuthenticated');
        localStorage.removeItem('admin');
    };

    return (
        <AuthContext.Provider value={{
            isUserAuthenticated, isAdminAuthenticated, user, admin, isLoading,
            loginUser, signupUser, loginAdmin, logoutUser, logoutAdmin,
            sendOtp, verifyOtp, socialLogin, updateUserProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
