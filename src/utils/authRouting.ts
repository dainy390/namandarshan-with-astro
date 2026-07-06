export const getPostAuthPath = ({
  role,
  redirectUrl,
  from,
}: {
  role?: string;
  redirectUrl?: string | null;
  from?: string | null;
}) => {
  if (redirectUrl) return decodeURIComponent(redirectUrl);
  if (role === 'pandit' || role === 'astrologer') return '/pandit-dashboard';
  if (from && from !== '/') return from;
  return '/my-trips';
};
