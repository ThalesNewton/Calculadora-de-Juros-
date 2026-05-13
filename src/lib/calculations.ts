export interface CalculationResult {
  month: number;
  interest: number;
  totalInvested: number;
  totalInterest: number;
  totalAccumulated: number;
}

export function calculateCompoundInterest(
  initialValue: number,
  monthlyValue: number,
  interestRate: number,
  interestType: 'monthly' | 'annual',
  period: number,
  periodType: 'months' | 'years'
): CalculationResult[] {
  const totalMonths = periodType === 'years' ? period * 12 : period;
  
  // Convert interest rate to monthly decimal
  let monthlyRate: number;
  if (interestType === 'monthly') {
    monthlyRate = interestRate / 100;
  } else {
    // Convert annual to monthly: (1 + r_a) = (1 + r_m)^12 => r_m = (1 + r_a)^(1/12) - 1
    monthlyRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
  }

  const results: CalculationResult[] = [];
  let currentAccumulated = initialValue;
  let currentTotalInvested = initialValue;
  let currentTotalInterest = 0;

  // Month 0 (initial state)
  results.push({
    month: 0,
    interest: 0,
    totalInvested: currentTotalInvested,
    totalInterest: 0,
    totalAccumulated: initialValue,
  });

  for (let m = 1; m <= totalMonths; m++) {
    const interestOfMonth = currentAccumulated * monthlyRate;
    currentAccumulated += interestOfMonth + monthlyValue;
    currentTotalInvested += monthlyValue;
    currentTotalInterest += interestOfMonth;

    results.push({
      month: m,
      interest: interestOfMonth,
      totalInvested: currentTotalInvested,
      totalInterest: currentTotalInterest,
      totalAccumulated: currentAccumulated,
    });
  }

  return results;
}
