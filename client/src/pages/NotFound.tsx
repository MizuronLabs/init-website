import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="text-center px-6 max-w-md">
        <div className="font-serif text-[6rem] text-paper3 font-semibold leading-none mb-4">404</div>
        <h1 className="font-serif text-[1.6rem] text-ink mb-3">Page not found</h1>
        <p className="text-[14px] text-ink2 leading-[1.7] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="bg-ink text-paper px-6 py-3 text-[13px] tracking-[0.06em] font-medium transition-colors hover:bg-gold"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
