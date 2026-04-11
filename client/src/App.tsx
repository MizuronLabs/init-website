import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Industries = lazy(() => import("./pages/Industries"));
const SustainabilityLab = lazy(() => import("./pages/SustainabilityLab"));
const Logistics = lazy(() => import("./pages/Logistics"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy Loaded Product pages
const Vermicompost = lazy(() => import("./pages/products/Vermicompost"));
const Biochar = lazy(() => import("./pages/products/Biochar"));
const CoffeePage = lazy(() => import("./pages/products/Coffee"));
const AgriProducts = lazy(() => import("./pages/products/AgriProducts"));
const ProductsIndex = lazy(() => import("./pages/products/ProductsIndex"));

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/industries" component={Industries} />
            <Route path="/sustainability-lab" component={SustainabilityLab} />
            <Route path="/logistics" component={Logistics} />
            <Route path="/contact" component={Contact} />
            {/* Product routes */}
            <Route path="/products" component={ProductsIndex} />
            <Route path="/products/vermicompost" component={Vermicompost} />
            <Route path="/products/biochar" component={Biochar} />
            <Route path="/products/coffee" component={CoffeePage} />
            <Route path="/products/agri" component={AgriProducts} />
            {/* Fallback */}
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "oklch(17% 0.009 200)",
                border: "1px solid oklch(26% 0.009 200)",
                color: "oklch(90% 0.003 200)",
              },
            }}
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
