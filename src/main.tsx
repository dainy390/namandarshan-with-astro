import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeNativeApp } from "./services/native";

// Initialize native Capacitor plugins (Status bar, Splash screen)
initializeNativeApp();

createRoot(document.getElementById("root")!).render(
  <App />
);