import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { VPNScheme } from "./components/VPNScheme";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { ConnectionMethods } from "./components/ConnectionMethods";
import { TelegramBot } from "./components/TelegramBot";
import { Benefits } from "./components/Benefits";
import { TargetAudience } from "./components/TargetAudience";
import { OfficeConnection } from "./components/OfficeConnection";
import { Limitations } from "./components/Limitations";
import { Requirements } from "./components/Requirements";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        <ThemeToggle />
        <Hero />
        <VPNScheme />
        <HowItWorks />
        <Features />
        <Pricing />
        <ConnectionMethodsScroll />
        <TelegramBot />
        <Benefits />
        <TargetAudience />
        <OfficeConnection />
        <Limitations />
        <Requirements />
        <FinalCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}