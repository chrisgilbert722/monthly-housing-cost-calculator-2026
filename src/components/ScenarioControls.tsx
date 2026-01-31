import React from 'react';
import type { MonthlyHousingCostInput } from '../logic/monthlyHousingCostCalculations';

interface ScenarioControlsProps {
    values: MonthlyHousingCostInput;
    onChange: (field: keyof MonthlyHousingCostInput, value: number | boolean | string) => void;
}

export const ScenarioControls: React.FC<ScenarioControlsProps> = ({ values, onChange }) => {
    const rentOptions = [
        { label: '$1,500', value: 1500 },
        { label: '$2,000', value: 2000 },
        { label: '$2,500', value: 2500 },
        { label: '$3,000', value: 3000 },
    ];

    const utilitiesOptions = [
        { label: '$150', value: 150 },
        { label: '$200', value: 200 },
        { label: '$300', value: 300 },
        { label: '$400', value: 400 },
    ];

    return (
        <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Quick Adjustments</h3>

            {/* Rent/Mortgage Quick Select */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ marginBottom: 'var(--space-2)' }}>Rent/Mortgage</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {rentOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('rentOrMortgage', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.rentOrMortgage === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.rentOrMortgage === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.rentOrMortgage === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Utilities Quick Select */}
            <div>
                <label style={{ marginBottom: 'var(--space-2)' }}>Utilities</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {utilitiesOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('utilities', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.utilities === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.utilities === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.utilities === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
