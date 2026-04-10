import { useState, useMemo } from 'react';
import { IndianRupee } from 'lucide-react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(3);

  // EMI Calculation Logic: P x R x (1+R)^N / [(1+R)^N-1]
  // P = Principal loan amount
  // R = Rate of interest per month
  // N = Total number of installments (months)
  const calculateEMI = useMemo(() => {
    const P = loanAmount;
    const R = (interestRate / 12) / 100;
    const N = tenureYears * 12;

    if (P === 0 || R === 0 || N === 0) return 0;
    
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, tenureYears]);

  const totalPayment = calculateEMI * tenureYears * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="glass p-8 rounded-2xl w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-forest-green-dark mb-2">Estimate Your EMI</h2>
        <p className="text-gray-600">Adjust the sliders to see what your monthly payments for vehicle financing could be.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sliders Section */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-gray-700">Loan Amount</label>
              <span className="font-bold text-forest-green-dark bg-green-50 px-3 py-1 rounded-md">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-saffron-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹50K</span>
              <span>₹20L</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-gray-700">Interest Rate (% p.a.)</label>
              <span className="font-bold text-forest-green-dark bg-green-50 px-3 py-1 rounded-md">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="7"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-saffron-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>7%</span>
              <span>15%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-gray-700">Loan Tenure (Years)</label>
              <span className="font-bold text-forest-green-dark bg-green-50 px-3 py-1 rounded-md">
                {tenureYears} Years
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-saffron-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 Yr</span>
              <span>5 Yrs</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-forest-green p-6 rounded-xl text-white shadow-inner flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-6 text-saffron-gold border-b border-white/20 pb-2">Repayment Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Principal Amount</span>
                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Interest</span>
                <span className="font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/20">
                <span className="text-gray-200">Total Amount Payable</span>
                <span className="font-bold text-lg">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white/10 p-4 rounded-lg flex items-center justify-between border border-white/10">
            <span className="text-lg font-medium text-gray-200">Monthly EMI</span>
            <div className="flex items-center text-3xl font-extrabold text-saffron-gold">
              <IndianRupee className="h-6 w-6 mr-1" />
              <span>{new Intl.NumberFormat('en-IN').format(calculateEMI)}</span>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}
