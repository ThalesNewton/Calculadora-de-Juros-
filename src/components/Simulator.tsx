import React, { useState, useMemo } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Calculator, Info, HelpCircle, RotateCcw, TrendingUp } from 'lucide-react';
import { calculateCompoundInterest, CalculationResult } from '../lib/calculations';
import { cn, formatCurrency, formatNumber } from '../lib/utils';

export default function Simulator() {
  const [initialValue, setInitialValue] = useState<number>(1000);
  const [monthlyValue, setMonthlyValue] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(8);
  const [interestType, setInterestType] = useState<'monthly' | 'annual'>('annual');
  const [period, setPeriod] = useState<number>(20);
  const [periodType, setPeriodType] = useState<'months' | 'years'>('years');
  const [isCalculated, setIsCalculated] = useState(false);

  const results = useMemo(() => {
    return calculateCompoundInterest(
      initialValue,
      monthlyValue,
      interestRate,
      interestType,
      period,
      periodType
    );
  }, [initialValue, monthlyValue, interestRate, interestType, period, periodType]);

  const finalResult = results[results.length - 1];

  const handleCalculate = () => {
    setIsCalculated(true);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setInitialValue(0);
    setMonthlyValue(0);
    setInterestRate(0);
    setPeriod(0);
    setInterestType('annual');
    setPeriodType('years');
    setIsCalculated(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-8">
      {/* Input Section */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-[#8B0000] p-4 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Simulador de Juros Compostos
          </h2>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Valor Inicial */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Valor inicial</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                R$
              </span>
              <input
                type="number"
                value={initialValue || ''}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-slate-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Valor Mensal */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Valor mensal</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                R$
              </span>
              <input
                type="number"
                value={monthlyValue || ''}
                onChange={(e) => setMonthlyValue(Number(e.target.value))}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-slate-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Taxa de Juros */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Taxa de juros</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                %
              </span>
              <input
                type="number"
                value={interestRate || ''}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none border border-slate-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="0"
              />
              <select
                value={interestType}
                onChange={(e) => setInterestType(e.target.value as any)}
                className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-300 bg-white text-slate-700 text-sm focus:ring-red-500 focus:border-red-500"
              >
                <option value="annual">anual</option>
                <option value="monthly">mensal</option>
              </select>
            </div>
          </div>

          {/* Período */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Período</label>
            <div className="flex">
              <input
                type="number"
                value={period || ''}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-slate-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="0"
              />
              <select
                value={periodType}
                onChange={(e) => setPeriodType(e.target.value as any)}
                className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-300 bg-white text-slate-700 text-sm focus:ring-red-500 focus:border-red-500"
              >
                <option value="years">ano(s)</option>
                <option value="months">mês(es)</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleCalculate}
              className="px-8 py-2.5 bg-[#8B0000] text-white font-bold rounded shadow-sm hover:bg-[#A52A2A] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
            >
              Calcular
            </button>
            
            <div className="flex gap-6 items-center text-sm font-medium">
              <button 
                type="button"
                className="text-[#8B0000] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                Simular retiradas mensais
              </button>
              <button 
                type="button"
                onClick={handleReset}
                className="text-slate-600 hover:text-[#8B0000] flex items-center gap-1 cursor-pointer group transition-colors"
                title="Limpar formulário"
              >
                <RotateCcw className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                Limpar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {isCalculated && (
        <div id="results-section" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">Valor Total Final</p>
              <p className="text-2xl font-bold text-[#8B0000]">{formatCurrency(finalResult.totalAccumulated)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">Valor Total Investido</p>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(finalResult.totalInvested)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">Total em Juros</p>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(finalResult.totalInterest)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">Rendimento Bruto</p>
              <p className="text-2xl font-bold text-slate-900">
                {((finalResult.totalInterest / finalResult.totalInvested) * 100).toFixed(2)}%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart Widget */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#8B0000] text-center">Gráfico:</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={results} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAccumulated" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B0000" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12 }} 
                      stroke="#64748B"
                      label={{ 
                        value: periodType === 'years' ? 'Anos' : 'Meses', 
                        position: 'insideBottom', 
                        offset: -5,
                        fontSize: 12
                      }}
                      tickFormatter={(val) => periodType === 'years' ? Math.floor(val / 12) : val}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }} 
                      stroke="#64748B"
                      tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `Tempo: ${label} meses`}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }}
                    />
                    <Legend verticalAlign="top" height={36}/>
                    <Area 
                      type="monotone" 
                      dataKey="totalAccumulated" 
                      name="Total em juros" 
                      stroke="#8B0000" 
                      fillOpacity={1} 
                      fill="url(#colorAccumulated)" 
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="totalInvested" 
                      name="Valor Investido" 
                      stroke="#000000" 
                      fillOpacity={1} 
                      fill="url(#colorInvested)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Table Widget */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[484px]">
              <div className="p-4 bg-slate-50 border-bottom border-slate-200">
                <h3 className="text-lg font-bold text-[#8B0000] text-center">Tabela:</h3>
              </div>
              <div className="flex-1 overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#E9EDF2] text-[#425062] font-bold sticky top-0">
                    <tr>
                      <th className="px-4 py-3 border-b border-slate-200">Mês</th>
                      <th className="px-4 py-3 border-b border-slate-200 text-right">Juros</th>
                      <th className="px-4 py-3 border-b border-slate-200 text-right">Total Investido</th>
                      <th className="px-4 py-3 border-b border-slate-200 text-right">Total Juros</th>
                      <th className="px-4 py-3 border-b border-slate-200 text-right">Total Acumulado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {results.map((r, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-2 text-slate-600">{r.month}</td>
                        <td className="px-4 py-2 text-right text-slate-700">
                          {formatCurrency(r.interest)}
                        </td>
                        <td className="px-4 py-2 text-right text-slate-700">
                          {formatCurrency(r.totalInvested)}
                        </td>
                        <td className="px-4 py-2 text-right text-emerald-600 font-medium">
                          {formatCurrency(r.totalInterest)}
                        </td>
                        <td className="px-4 py-2 text-right font-bold text-slate-900">
                          {formatCurrency(r.totalAccumulated)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
