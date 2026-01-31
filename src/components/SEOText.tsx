import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This calculator estimates total monthly housing costs for renters or homeowners by combining
                rent or mortgage payments with property taxes, insurance, utilities, HOA fees, and maintenance
                expenses. The annual cost is calculated by multiplying monthly totals by 12. These figures
                are estimates only and actual expenses vary based on location, usage patterns, seasonal
                changes, and other factors specific to your housing situation.
            </p>
        </div>
    );
};
