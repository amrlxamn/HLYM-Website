import { AnimatePresence } from "framer-motion";
import { SplashContent, SplashLogo, SplashOverlay, SplashRedLine } from "./splash.styles";

const EASING = [0.22, 1, 0.36, 1] as const;

type SplashScreenProps = {
  isVisible: boolean;
  onComplete: () => void;
};

export function SplashScreen({ isVisible, onComplete }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <SplashOverlay
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          initial={{ opacity: 1 }}
          key="splash"
          transition={{ duration: 0.5, ease: EASING }}
          onAnimationComplete={(definition) => {
            // Only fire onComplete when the exit animation finishes
            if (
              typeof definition === "object" &&
              "opacity" in definition &&
              definition.opacity === 0
            ) {
              onComplete();
            }
          }}
        >
          <SplashContent>
            <SplashLogo
              alt="Hong Leong Yamaha Motor"
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.96 }}
              src="/assets/logo.png"
              transition={{ delay: 0.3, duration: 0.8, ease: EASING }}
            />
            <SplashRedLine
              animate={{ scaleX: 1, opacity: 1 }}
              initial={{ scaleX: 0, opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: EASING }}
            />
          </SplashContent>
        </SplashOverlay>
      )}
    </AnimatePresence>
  );
}
