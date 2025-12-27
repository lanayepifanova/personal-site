import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

function createStaticLocation(url: string) {
  const [path, search = ""] = url.split("?");

  return {
    hook: () => [path || "/", () => null] as [string, (path: string) => void],
    searchHook: () => search,
  };
}

export function render(url: string) {
  const location = createStaticLocation(url);

  return renderToString(
    <Router hook={location.hook} searchHook={location.searchHook}>
      <App />
    </Router>
  );
}
