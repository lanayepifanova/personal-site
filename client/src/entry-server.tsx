import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import App from "./App";

export function render(url: string) {
  const location = memoryLocation({ path: url, static: true });

  return renderToString(
    <Router hook={location.hook} searchHook={location.searchHook}>
      <App />
    </Router>
  );
}
