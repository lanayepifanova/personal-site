import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as
  | string
  | undefined;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as
  | string
  | undefined;

if (!container) {
  throw new Error("Root container not found");
}

if (analyticsEndpoint && analyticsWebsiteId) {
  const existingScript = document.getElementById("umami-analytics");
  if (!existingScript) {
    const script = document.createElement("script");
    script.id = "umami-analytics";
    script.defer = true;
    script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
    script.setAttribute("data-website-id", analyticsWebsiteId);
    document.head.appendChild(script);
  }
}

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
