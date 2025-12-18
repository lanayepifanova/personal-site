import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Engineering from "./pages/Engineering";
import Communities from "./pages/Communities";
import Media from "./pages/Media";
import MediaKit from "./pages/MediaKit";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Engineering} />
        <Route path="/media" component={Media} />
        <Route path="/media-kit" component={MediaKit} />
        <Route path="/communities" component={Communities} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
