import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo placeholder / brand element */}
        <motion.div
          className="w-12 h-12 border-2 border-[oklch(35.5%_0.088_153)] rounded-sm"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Loading text with shimmer */}
        <motion.div 
          className="text-[oklch(65%_0.12_153)] text-xs font-bold uppercase tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Mizuron Global
        </motion.div>

        {/* Slim progress bar */}
        <div className="w-48 h-0.5 bg-[oklch(22%_0.009_200)] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[oklch(35.5%_0.088_153)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  );
}
