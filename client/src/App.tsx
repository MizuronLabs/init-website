import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SUPPORTED_LANGUAGES } from "./i18n";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SupplierReadiness from "./pages/SupplierReadiness";

function LanguageSync() {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const segment = location.split("/").filter(Boolean)[0];
    const matched = SUPPORTED_LANGUAGES.find((l) => l.code === segment);
    if (matched && matched.code !== i18n.language) {
      i18n.changeLanguage(matched.code);
    } else if (!matched && i18n.language !== "en") {
      i18n.changeLanguage("en");
    }
  }, [location, i18n]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/ja" component={Home} />
      <Route path="/ja/for-suppliers" component={SupplierReadiness} />
      <Route path="/ko" component={Home} />
      <Route path="/ko/for-suppliers" component={SupplierReadiness} />
      <Route path="/zh" component={Home} />
      <Route path="/zh/for-suppliers" component={SupplierReadiness} />
      <Route path="/th" component={Home} />
      <Route path="/th/for-suppliers" component={SupplierReadiness} />
      <Route path="/vi" component={Home} />
      <Route path="/vi/for-suppliers" component={SupplierReadiness} />
      <Route path="/id" component={Home} />
      <Route path="/id/for-suppliers" component={SupplierReadiness} />
      <Route path="/" component={Home} />
      <Route path="/for-suppliers" component={SupplierReadiness} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <LanguageSync />
          <Router />
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
