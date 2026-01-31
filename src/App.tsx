import { useState } from 'react';
import { Header } from './components/Header';
import { InputCard } from './components/InputCard';
import { ResultsPanel } from './components/ResultsPanel';
import { ScenarioControls } from './components/ScenarioControls';
import { AdContainer } from './components/AdContainer';
import { BreakdownTable } from './components/BreakdownTable';
import { SEOText } from './components/SEOText';
import { Footer } from './components/Footer';
import { calculateMonthlyHousingCost } from './logic/monthlyHousingCostCalculations';
import type { MonthlyHousingCostInput } from './logic/monthlyHousingCostCalculations';

function App() {
  const [values, setValues] = useState<MonthlyHousingCostInput>({
    rentOrMortgage: 1800,
    propertyTax: 250,
    insurance: 100,
    utilities: 200,
    hoaFees: 0,
    maintenance: 100
  });

  const handleChange = (field: keyof MonthlyHousingCostInput, value: number | boolean | string) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const result = calculateMonthlyHousingCost(values);

  return (
    <>
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

        {/* 1) HEADER */}
        <Header />

        {/* 2) INPUT CARD */}
        <InputCard values={values} onChange={handleChange} />

        {/* 3) RESULTS PANEL */}
        <ResultsPanel result={result} />

        {/* 4) SCENARIO CONTROLS */}
        <ScenarioControls values={values} onChange={handleChange} />

        {/* 5) NATIVE AD */}
        <AdContainer slotId="native-slot-placeholder" sticky={false} />

        {/* 6) BREAKDOWN TABLE */}
        <BreakdownTable result={result} />

        {/* 7) SEO TEXT */}
        <SEOText />

        {/* 8) FOOTER */}
        <Footer />

        {/* 9) STICKY FOOTER AD */}
        <AdContainer slotId="sticky-footer-placeholder" sticky={true} />

      </main>
    </>
  );
}

export default App;
