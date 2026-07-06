export const normalizeCRMRole = (role?: string | null) => {
    if (!role) return "";
    return role === "team" ? "manager" : role;
};

export const getCRMUser = () => {
    try {
        const rawUser = localStorage.getItem("crmUser");
        if (!rawUser) return null;

        const parsedUser = JSON.parse(rawUser);
        return {
            ...parsedUser,
            role: normalizeCRMRole(parsedUser?.role),
        };
    } catch (error) {
        console.error("Failed to read CRM user from storage:", error);
        return null;
    }
};

export const getCRMUserId = (user?: any) => {
    const resolvedUser = user || getCRMUser();
    return resolvedUser?.userId || resolvedUser?.id || resolvedUser?._id || "";
};

export const getCRMHeaders = (user?: any, includeContentType = false) => {
    const userId = getCRMUserId(user);

    return {
        ...(includeContentType ? { "Content-Type": "application/json" } : {}),
        ...(userId ? { "x-user-id": userId } : {}),
    };
};

export const isCRMRole = (user: any, role: string) => normalizeCRMRole(user?.role) === role;

export const isMasterAdmin = (user: any) => isCRMRole(user, "master_admin");

export const isAdminOrAbove = (user: any) => {
    const role = normalizeCRMRole(user?.role);
    return role === "admin" || role === "master_admin";
};

export const isManagerOrAbove = (user: any) => {
    const role = normalizeCRMRole(user?.role);
    return role === "manager" || role === "admin" || role === "master_admin";
};
