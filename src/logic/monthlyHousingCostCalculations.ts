export interface MonthlyHousingCostInput {
    rentOrMortgage: number;
    propertyTax: number;
    insurance: number;
    utilities: number;
    hoaFees: number;
    maintenance: number;
}

export interface MonthlyHousingCostResult {
    rentOrMortgage: number;
    propertyTax: number;
    insurance: number;
    utilities: number;
    hoaFees: number;
    maintenance: number;
    totalMonthlyCost: number;
    annualCost: number;
    percentageBreakdown: {
        rentOrMortgage: number;
        propertyTax: number;
        insurance: number;
        utilities: number;
        hoaFees: number;
        maintenance: number;
    };
    message: string;
}

export function calculateMonthlyHousingCost(input: MonthlyHousingCostInput): MonthlyHousingCostResult {
    const {
        rentOrMortgage,
        propertyTax,
        insurance,
        utilities,
        hoaFees,
        maintenance
    } = input;

    // Calculate total monthly cost
    const totalMonthlyCost = rentOrMortgage + propertyTax + insurance + utilities + hoaFees + maintenance;

    // Calculate annual cost
    const annualCost = totalMonthlyCost * 12;

    // Calculate percentage breakdown
    const calculatePercent = (value: number) =>
        totalMonthlyCost > 0 ? (value / totalMonthlyCost) * 100 : 0;

    const percentageBreakdown = {
        rentOrMortgage: calculatePercent(rentOrMortgage),
        propertyTax: calculatePercent(propertyTax),
        insurance: calculatePercent(insurance),
        utilities: calculatePercent(utilities),
        hoaFees: calculatePercent(hoaFees),
        maintenance: calculatePercent(maintenance)
    };

    // Generate message
    let message: string;
    if (totalMonthlyCost === 0) {
        message = 'Enter your housing costs to see the total';
    } else if (rentOrMortgage > totalMonthlyCost * 0.7) {
        message = 'Rent/mortgage is the primary housing expense';
    } else {
        message = 'Total estimated monthly housing costs';
    }

    return {
        rentOrMortgage,
        propertyTax,
        insurance,
        utilities,
        hoaFees,
        maintenance,
        totalMonthlyCost,
        annualCost,
        percentageBreakdown,
        message
    };
}
