import { useState, useMemo } from 'react';
import { Clock, Landmark, AlertCircle, TrendingDown, Wallet, Calendar } from 'lucide-react';

export default function EMICalculator() {
  const [totalPrice, setTotalPrice] = useState<number>(1000000); // Ex: Tractor Price
  const [downPayment, setDownPayment] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
  const [intervalMonths, setIntervalMonths] = useState<number>(1); // "Har kitne mahine mein"

  const calculation = useMemo(() => {
    const P = totalPrice - downPayment;
    const annualRate = interestRate;
    const years = tenureYears;
    const iMonths = intervalMonths;

    // Error and Edge Case Handling
    if (P <= 0 || annualRate <= 0 || years <= 0 || years > 7 || iMonths <= 0) {
      return { 
        installment: 0, 
        totalInterest: 0, 
        totalPayable: 0, 
        installmentsCount: 0, 
        error: years > 7 ? "Maximum tenure is 7 years." : iMonths <= 0 ? "Interval must be > 0" : "" 
      };
    }

    // High Precision Internal Calculation (Reducing Balance)
    // Custom Frequency per Year = 12 / IntervalMonths
    const f = 12 / iMonths;
    const r = annualRate / (f * 100);
    const n = years * f;

    // Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    const factor = Math.pow(1 + r, n);
    const installment = P * r * (factor / (factor - 1));
    
    const totalPayable = installment * n;
    const totalInterest = totalPayable - P;

    return {
      installment: Number(installment.toFixed(2)),
      totalInterest: Number(totalInterest.toFixed(2)),
      totalPayable: Number(totalPayable.toFixed(2)),
      installmentsCount: n,
      error: ""
    };
  }, [totalPrice, downPayment, interestRate, tenureYears, intervalMonths]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="glass p-5 md:p-8 rounded-[2rem] w-full max-w-4xl mx-auto shadow-xl border border-white/20 backdrop-blur-md relative overflow-hidden text-gray-800">
      {/* Space Saving Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <h2 className="text-xl md:text-2xl font-black text-forest-green-dark flex items-center gap-2">
          <Landmark size={20} className="text-saffron-gold" />
          Tractor Finance <span className="text-saffron-gold">EMI</span>
        </h2>
        <div className="bg-forest-green/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-forest-green flex items-center gap-1">
          <TrendingDown size={12} />
          Reducing Balance
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Compact Inputs Grid */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: Amount and Down Payment */}
          <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tractor Price (₹)</label>
              <input 
                type="number" 
                value={totalPrice} 
                onChange={(e) => setTotalPrice(Number(e.target.value))}
                className="w-28 text-right bg-white border border-gray-200 rounded-lg px-2 py-1 font-black text-forest-green-dark focus:border-forest-green outline-none"
              />
            </div>
            <input type="range" min="100000" max="5000000" step="10000" value={totalPrice} onChange={(e) => setTotalPrice(Number(e.target.value))} className="w-full h-1.5 accent-forest-green" />
          </div>

          <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><Wallet size={12}/> Down Payment (₹)</label>
              <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-28 text-right bg-white border border-gray-200 rounded-lg px-2 py-1 font-black text-forest-green-dark focus:border-forest-green outline-none"
              />
            </div>
            <input type="range" min="0" max={totalPrice} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-1.5 accent-saffron-gold" />
          </div>

          {/* Row 2: Rate, Tenure, Frequency */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
              <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block tracking-widest">Rate (% p.a.)</label>
              <div className="flex items-center gap-2">
                <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 font-bold text-forest-green-dark" />
              </div>
            </div>

            <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 relative">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Tenure</label>
                <div className="flex bg-white rounded-lg p-0.5 border border-gray-200">
                  <button 
                    onClick={() => setTenureUnit('years')}
                    className={`px-2 py-0.5 text-[9px] font-black rounded-md transition-all ${tenureUnit === 'years' ? 'bg-forest-green text-white' : 'text-gray-400 hover:text-forest-green'}`}
                  >
                    YEARS
                  </button>
                  <button 
                    onClick={() => setTenureUnit('months')}
                    className={`px-2 py-0.5 text-[9px] font-black rounded-md transition-all ${tenureUnit === 'months' ? 'bg-forest-green text-white' : 'text-gray-400 hover:text-forest-green'}`}
                  >
                    MONTHS
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="number" 
                  min={tenureUnit === 'years' ? "0.1" : "1"} 
                  max={tenureUnit === 'years' ? "7" : "84"} 
                  step={tenureUnit === 'years' ? "0.1" : "1"}
                  value={tenureUnit === 'years' ? tenureYears : Math.round(tenureYears * 12)} 
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTenureYears(tenureUnit === 'years' ? val : val / 12);
                  }} 
                  className={`w-full bg-white border border-gray-200 rounded-lg px-3 py-2 font-black text-lg outline-none focus:border-forest-green ${tenureYears > 7 ? 'text-red-500 border-red-200' : 'text-forest-green-dark'}`} 
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase">
                  {tenureUnit === 'years' ? 'Yrs' : 'Mos'}
                </span>
              </div>
              
              {tenureUnit === 'years' && tenureYears > 0 && (
                <div className="mt-1 text-[9px] font-bold text-forest-green/60 italic">
                   ≈ {Math.round(tenureYears * 12)} Full Months
                </div>
              )}
              {calculation.error && tenureYears > 7 && (
                <div className="absolute -bottom-6 left-0 text-[10px] font-black text-red-500 flex items-center gap-1">
                  <AlertCircle size={10} /> {calculation.error}
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-forest-green/20 relative shadow-sm hover:shadow-md transition-all">
              <label className="text-[10px] font-black text-forest-green uppercase mb-2 block tracking-widest leading-none">Har [X] Mahine mein</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                   <input 
                    type="number" 
                    min="1" 
                    max="12"
                    value={intervalMonths} 
                    onChange={(e) => setIntervalMonths(Number(e.target.value))}
                    className="w-full bg-forest-green/5 border border-forest-green/10 rounded-lg px-3 py-2 font-black text-2xl text-forest-green-dark outline-none focus:bg-white focus:border-forest-green"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-forest-green/40 uppercase">Months</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-saffron-gold/10 flex items-center justify-center text-saffron-gold">
                  <Clock size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Results Card */}
        <div className="lg:col-span-12 mt-4">
          <div className="bg-forest-green-dark p-6 rounded-3xl text-white shadow-lg relative overflow-hidden group">
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-gold/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left space-y-1">
                <span className="text-saffron-gold text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Aapki Installment Amount</span>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  <span className="text-3xl font-black mt-2">₹</span>
                  <span className="text-6xl font-black tracking-tighter tabular-nums leading-none">
                    {new Intl.NumberFormat('en-IN').format(calculation.installment)}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[11px] font-bold text-white/60">
                  <Calendar size={12} />
                  <span>Har {intervalMonths} mahine mein | Kul {Math.ceil(calculation.installmentsCount)} installments</span>
                </div>
              </div>

              <div className="w-full md:w-auto grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Principal Amount</p>
                  <p className="text-lg font-black text-white">{formatCurrency(totalPrice - downPayment)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-saffron-gold/70 uppercase tracking-widest">Total Interest</p>
                  <p className="text-lg font-black text-saffron-gold">{formatCurrency(calculation.totalInterest)}</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/5 space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Total Payable Amount</p>
                  <p className="text-2xl font-black text-white">{formatCurrency(calculation.totalPayable)}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-6 italic font-medium max-w-2xl mx-auto leading-relaxed">
            Note: Yeh calculation Reducing Balance method par aadharit hai. Har {intervalMonths} mahine ki frequency ke hisaab se interest calculate kiya gaya hai. Actual processing fees alag ho sakti hai.
          </p>
        </div>
      </div>
    </div>
  );
}
