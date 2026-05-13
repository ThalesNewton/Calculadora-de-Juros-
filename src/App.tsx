/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Simulator from './components/Simulator';
import Education from './components/Education';
import { TrendingUp, Percent, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center text-white shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">FinanCalc</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Simuladores Financeiros</p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        {/* Intro */}
        <div className="max-w-5xl mx-auto px-4 mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Descubra o Poder dos <span className="text-[#8B0000]">Juros Compostos</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A ferramenta definitiva para planejar sua independência financeira. Simule novos aportes, visualize sua evolução e entenda como o tempo multiplica seu capital.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                <Percent className="w-4 h-4 text-[#8B0000]" />
                Dados em tempo real
              </div>
              <div className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                <Clock className="w-4 h-4 text-[#8B0000]" />
                Projeções de longo prazo
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium italic">
              Exemplo: R$ 1.000 iniciais + R$ 1.000/mês por 20 anos a 8% a.a.
            </p>
          </div>
        </div>

        {/* Simulator Component */}
        <Simulator />

        {/* Education Content */}
        <Education />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#8B0000] rounded flex items-center justify-center text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">FinanCalc</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Ferramentas de simulação financeira gratuitas para ajudar você a tomar melhores decisões com seu dinheiro. Nossos cálculos são baseados em fórmulas matemáticas padrão de juros compostos.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold">Calculadoras</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Juros Compostos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Juros Simples</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renda Fixa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Previdência Privada</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold">Educação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Artigos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glossário</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cursos Gratuitos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Investimento</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          <p>© 2026 FinanCalc. Todos os direitos reservados. Este simulador tem fins puramente educativos e informativos.</p>
        </div>
      </footer>
    </div>
  );
}
