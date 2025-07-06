import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PowerShellSection from './components/PowerShellSection';
import TraditionalSection from './components/TraditionalSection';
import MenuPreview from './components/MenuPreview';
import RecommendedMethods from './components/RecommendedMethods';
import UnattendedMode from './components/UnattendedMode';
import FAQSection from './components/FAQSection';
import DownloadsSection from './components/DownloadsSection';
import SystemRequirements from './components/SystemRequirements';
import ScreenshotsGallery from './components/ScreenshotsGallery';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsGallery />
      <PowerShellSection />
      <TraditionalSection />
      <MenuPreview />
      <RecommendedMethods />
      <UnattendedMode />
      <SystemRequirements />
      <FAQSection />
      <DownloadsSection />
      <Footer />
    </div>
  );
}

export default App;