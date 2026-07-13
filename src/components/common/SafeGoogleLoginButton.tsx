import { Component, type ErrorInfo, type ReactNode, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, type ButtonProps } from "@/components/ui/button";
import { GOOGLE_AUTH_CONFIG_ERROR, isGoogleAuthConfigured } from "@/utils/googleAuth";

type SafeGoogleLoginButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onToken: (accessToken: string) => Promise<void> | void;
  onUnavailable: (message: string) => void;
  variant?: ButtonProps["variant"];
};

class GoogleLoginErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Google Identity Services can throw for invalid OAuth client IDs.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const GoogleUnavailableButton = ({
  children,
  className,
  disabled,
  onUnavailable,
  variant = "outline",
}: Omit<SafeGoogleLoginButtonProps, "onToken">) => (
  <Button
    type="button"
    variant={variant}
    className={className}
    disabled={disabled}
    onClick={() => onUnavailable(GOOGLE_AUTH_CONFIG_ERROR)}
  >
    {children}
  </Button>
);

const GoogleLoginButtonInner = ({
  children,
  className,
  disabled,
  onToken,
  onUnavailable,
  variant = "outline",
}: SafeGoogleLoginButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  const googleLogin = useGoogleLogin({
    scope: "openid email profile",
    onSuccess: async (tokenResponse) => {
      setIsPending(true);
      try {
        await onToken(tokenResponse.access_token);
      } finally {
        setIsPending(false);
      }
    },
    onError: () => onUnavailable("Google login failed."),
  });

  const handleClick = () => {
    if (!isGoogleAuthConfigured) {
      onUnavailable(GOOGLE_AUTH_CONFIG_ERROR);
      return;
    }

    try {
      googleLogin();
    } catch {
      onUnavailable(GOOGLE_AUTH_CONFIG_ERROR);
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      disabled={disabled || isPending}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export const SafeGoogleLoginButton = (props: SafeGoogleLoginButtonProps) => (
  <GoogleLoginErrorBoundary fallback={<GoogleUnavailableButton {...props} />}>
    <GoogleLoginButtonInner {...props} />
  </GoogleLoginErrorBoundary>
);
