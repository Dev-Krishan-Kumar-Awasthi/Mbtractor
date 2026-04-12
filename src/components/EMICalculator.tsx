import { useState, useMemo } from 'react';
import { IndianRupee, Calendar } from 'lucide-react';

type Frequency = 'monthly' | 'semi-annual';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [frequency, setFrequency] = useState<Frequency>('monthly');

  // EMI Calculation Logic: P x R x (1+R)^N / [(1+R)^N-1]
  // P = Principal loan amount
  // R = Rate of interest per period
  // N = Total number of installments (periods)
  const calculateEMI = useMemo(() => {
    const P = loanAmount;
    const isMonthly = frequency === 'monthly';
    const R = isMonthly ? (interestRate / 12) / 100 : (interestRate / 2) / 100;
    const N = isMonthly ? tenureYears * 12 : tenureYears * 2;

    if (P === 0 || R === 0 || N === 0) return 0;
    
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, tenureYears, frequency]);

  const totalInstallments = frequency === 'monthly' ? tenureYears * 12 : tenureYears * 2;
  const totalPayment = calculateEMI * totalInstallments;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="glass p-8 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-forest-green-dark mb-2 tracking-tight">Finance Calculator</h2>
        <p className="text-gray-600 font-medium">Get an instant estimate for your tractor loan repayment.</p>
      </div>

      {/* Frequency Toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1.5 rounded-xl flex gap-1 shadow-inner border border-gray-200">
          <button 
            onClick={() => setFrequency('monthly')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-forest-green text-white shadow-md' : 'text-gray-500 hover:text-forest-green'}`}
          >
            Monthly EMI
          </button>
          <button 
            onClick={() => setFrequency('semi-annual')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${frequency === 'semi-annual' ? 'bg-saffron-gold text-forest-green-dark shadow-md' : 'text-gray-500 hover:text-saffron-gold'}`}
          >
            <Calendar size={16} />
            6-Month (Kisan EMI)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sliders Section */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-bold text-gray-700">Loan Amount</label>
              <span className="font-black text-forest-green-dark bg-green-50 px-3 py-1 rounded-md border border-green-100">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-forest-green"
            />
            <div className="flex justify-between text-xs font-bold text-gray-400 mt-1">
              <span>₹50,000</span>
              <span>₹20,00,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-bold text-gray-700">Interest Rate (% p.a.)</label>
              <span className="font-black text-forest-green-dark bg-green-50 px-3 py-1 rounded-md border border-green-100">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-forest-green"
            />
            <div className="flex justify-between text-xs font-bold text-gray-400 mt-1">
              <span>7%</span>
              <span>15%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-bold text-gray-700">Loan Tenure (Years)</label>
              <span className="font-black text-forest-green-dark bg-green-50 px-3 py-1 rounded-md border border-green-100">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-forest-green"
            />
            <div className="flex justify-between text-xs font-bold text-gray-400 mt-1">
              <span>1 Year</span>
              <span>5 Years</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-forest-green p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-saffron-gold opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 text-saffron-gold border-b border-white/20 pb-2 flex justify-between items-center">
              <span>Repayment Details</span>
              <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">Shivpuri Edition</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Principal Amount</span>
                <span className="font-bold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Total Interest</span>
                <span className="font-bold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/20 mt-4">
                <span className="text-gray-200 font-bold">Total Payable</span>
                <span className="font-black text-2xl text-white">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white/10 p-5 rounded-2xl flex flex-col gap-1 border border-white/10 shadow-inner relative z-10">
            <span className="text-sm font-bold text-saffron-gold uppercase tracking-widest">
              {frequency === 'monthly' ? 'Estimated Monthly EMI' : '6-Month Installment (Kisan EMI)'}
            </span>
            <div className="flex items-center text-4xl font-black text-white">
              <IndianRupee className="h-8 w-8 mr-1 text-saffron-gold" />
              <span>{new Intl.NumberFormat('en-IN').format(calculateEMI)}</span>
            </div>
            <p className="text-[10px] text-gray-300 mt-2 italic">*Estimates based on current MP state finance norms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
