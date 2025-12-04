import { useState } from 'react';
import { ChevronRight, BarChart3, TrendingUp, Database, Brain, Target, CheckCircle } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { DataSection } from './components/DataSection';
import { MethodologySection } from './components/MethodologySection';
import { ResultsSection } from './components/ResultsSection';
import { VisualizationSection } from './components/VisualizationSection';
import { ConclusionSection } from './components/ConclusionSection';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <HeroSection />
        <DataSection />
        <MethodologySection />
        <ResultsSection />
        <VisualizationSection />
        <ConclusionSection />
      </main>
      
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>UCI Machine Learning Repository - German Credit Dataset</p>
          <p className="text-sm mt-2">Зээлийн эрсдэлийн шинжилгээ - 2025</p>
        </div>
      </footer>
    </div>
  );
}
