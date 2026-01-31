import React from 'react';
import type { MonthlyHousingCostResult } from '../logic/monthlyHousingCostCalculations';

interface BreakdownTableProps {
    result: MonthlyHousingCostResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const costRows = [
        { label: 'Rent/Mortgage Payment', value: formatMoney(result.rentOrMortgage), isTotal: false },
        { label: 'Property Taxes', value: formatMoney(result.propertyTax), isTotal: false },
        { label: 'Insurance', value: formatMoney(result.insurance), isTotal: false },
        { label: 'Utilities', value: formatMoney(result.utilities), isTotal: false },
        { label: 'HOA Fees', value: formatMoney(result.hoaFees), isTotal: false },
        { label: 'Maintenance', value: formatMoney(result.maintenance), isTotal: false },
        { label: 'Estimated Total Monthly Cost', value: formatMoney(result.totalMonthlyCost), isTotal: true },
    ];

    const annualRows = [
        { label: 'Monthly Total', value: formatMoney(result.totalMonthlyCost), isTotal: false },
        { label: 'Estimated Annual Cost', value: formatMoney(result.annualCost), isTotal: true },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#166534' : 'inherit'
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Monthly Costs Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Monthly Cost Breakdown</h3>
            </div>
            {renderTable(costRows)}

            {/* Annual Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F0FDF4' }}>
                <h3 style={{ fontSize: '1rem', color: '#166534' }}>Annual Summary</h3>
            </div>
            {renderTable(annualRows, true)}
        </div>
    );
};
