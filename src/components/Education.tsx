import React from 'react';
import { HelpCircle, BookOpen, Quote, TrendingUp, Info } from 'lucide-react';

export default function Education() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Step by Step Tutorial */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-[#8B0000]" />
            Guia de Uso da Calculadora
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Aprenda a simular seu futuro financeiro em poucos cliques. Nossa ferramenta é gratuita, intuitiva e focada em resultados precisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              step: 1,
              title: "Patrimônio Atual",
              desc: "Inicie preenchendo o 'Valor Inicial' com o capital que você já possui hoje para investir."
            },
            {
              step: 2,
              title: "Aportes Mensais",
              desc: "No campo 'Valor Mensal', informe quanto você pretende poupar e investir todos os meses."
            },
            {
              step: 3,
              title: "Rentabilidade",
              desc: "Defina a 'Taxa de Juros' esperada. Você pode escolher a visualização mensal ou anual."
            },
            {
              step: 4,
              title: "Horizonte",
              desc: "Escolha o 'Período' total do investimento. O tempo é o maior aliado dos juros compostos!"
            },
            {
              step: 5,
              title: "Resultado",
              desc: "Clique em 'Calcular' para gerar seu gráfico de evolução e a tabela detalhada mês a mês."
            }
          ].map((item) => (
            <div key={item.step} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:border-[#8B0000] transition-colors">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#8B0000] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                {item.step}
              </span>
              <h3 className="font-bold text-slate-800 mb-2 mt-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-50 border-l-4 border-[#8B0000] p-6 rounded-r-xl">
          <p className="text-slate-700 italic">
            "Imagine investir R$ 1.000 inicialmente e mais R$ 1.000 mensais por 20 anos com uma taxa de 8% ao ano. Ao final, você teria investido R$ 241 mil, mas o montante acumulado passaria de R$ 573 mil! Isso significa mais de R$ 332 mil gerados apenas pelo rendimento dos 'juros sobre juros'."
          </p>
        </div>
      </section>

      {/* Deep Dive Info */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 border-t border-slate-200">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif text-slate-900 border-b-2 border-[#8B0000] inline-block pb-1">
              A Ciência por trás da Riqueza
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Diferente dos juros simples, que incidem apenas sobre o capital inicial, os <strong>juros compostos</strong> trabalham de forma acumulativa. Cada centavo de rendimento hoje torna-se base para o rendimento de amanhã. É por isso que chamamos de "efeito bola de neve".
            </p>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-inner flex flex-col items-center justify-center space-y-4">
              <span className="text-sm uppercase tracking-widest text-[#8B0000] font-bold">Fórmula Matemática</span>
              <div className="text-3xl md:text-4xl font-serif text-slate-800 italic">
                M = C &times; (1 + i)<sup>t</sup>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4 border-t border-slate-100 text-xs text-center text-slate-500">
                <div><span className="font-bold text-slate-800">M:</span> Montante Final</div>
                <div><span className="font-bold text-slate-800">C:</span> Capital Inicial</div>
                <div><span className="font-bold text-slate-800">i:</span> Taxa de Juros</div>
                <div><span className="font-bold text-slate-800">t:</span> Tempo Total</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900">Onde os juros compostos atuam?</h4>
            <p className="text-slate-600 leading-relaxed">
              Eles são neutros: podem ser seus maiores aliados ou seus piores inimigos. No mundo dos <strong>investimentos</strong> (Tesouro Direto, CDBs, dividendos reinvestidos), eles constroem patrimônio. No mundo das <strong>dívidas</strong> (cartão de crédito, cheque especial), eles podem criar uma bola de neve negativa difícil de conter.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#8B0000] text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Impacto do Longo Prazo
            </h4>
            <p className="text-sm opacity-90 leading-relaxed">
              Veja a diferença de rendimento de um investimento único de R$ 5.000 a 1% ao mês ao longo das décadas:
            </p>
            <div className="space-y-4">
              {[
                { time: "5 anos", simple: "8.000", compound: "9.083" },
                { time: "10 anos", simple: "11.000", compound: "16.501" },
                { time: "20 anos", simple: "17.000", compound: "54.462" },
                { time: "30 anos", simple: "23.000", compound: "179.748" }
              ].map((row) => (
                <div key={row.time} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider opacity-70">
                    <span>{row.time}</span>
                    <span className="text-yellow-400">Juros Compostos</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs opacity-60">Simples: R$ {row.simple}</span>
                    <span className="text-lg font-bold">R$ {row.compound}</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400" 
                      style={{ width: `${(parseInt(row.compound.replace('.','')) / 180000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/20 text-center">
              <p className="text-xs italic font-serif opacity-80">
                "Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha; aquele que não entende, paga."
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-1">— Albert Einstein</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
