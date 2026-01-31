import React from 'react';
import type { MonthlyHousingCostInput } from '../logic/monthlyHousingCostCalculations';

interface InputCardProps {
    values: MonthlyHousingCostInput;
    onChange: (field: keyof MonthlyHousingCostInput, value: number | boolean | string) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Rent or Mortgage */}
                <div>
                    <label htmlFor="rentOrMortgage">Monthly Rent or Mortgage Payment ($)</label>
                    <input
                        type="number"
                        id="rentOrMortgage"
                        value={values.rentOrMortgage}
                        onChange={(e) => onChange('rentOrMortgage', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="50"
                    />
                </div>

                {/* Property Tax */}
                <div>
                    <label htmlFor="propertyTax">Property Taxes (monthly) ($)</label>
                    <input
                        type="number"
                        id="propertyTax"
                        value={values.propertyTax}
                        onChange={(e) => onChange('propertyTax', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="25"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Enter 0 if included in rent
                    </span>
                </div>

                {/* Insurance */}
                <div>
                    <label htmlFor="insurance">Homeowners or Renters Insurance (monthly) ($)</label>
                    <input
                        type="number"
                        id="insurance"
                        value={values.insurance}
                        onChange={(e) => onChange('insurance', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="10"
                    />
                </div>

                {/* Utilities */}
                <div>
                    <label htmlFor="utilities">Utilities (monthly estimate) ($)</label>
                    <input
                        type="number"
                        id="utilities"
                        value={values.utilities}
                        onChange={(e) => onChange('utilities', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="25"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Electric, gas, water, internet, etc.
                    </span>
                </div>

                {/* HOA Fees */}
                <div>
                    <label htmlFor="hoaFees">HOA Fees (if applicable) ($)</label>
                    <input
                        type="number"
                        id="hoaFees"
                        value={values.hoaFees}
                        onChange={(e) => onChange('hoaFees', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="25"
                    />
                </div>

                {/* Maintenance */}
                <div>
                    <label htmlFor="maintenance">Maintenance Costs (monthly estimate) ($)</label>
                    <input
                        type="number"
                        id="maintenance"
                        value={values.maintenance}
                        onChange={(e) => onChange('maintenance', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="25"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Repairs, lawn care, cleaning, etc.
                    </span>
                </div>
            </div>
        </div>
    );
};
