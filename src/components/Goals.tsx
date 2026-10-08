import { Rocket, Flag, TrendingUp, CheckCircle2 } from 'lucide-react';
import { goals } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Goals() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="goals" className="relative bg-ink-950 py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-60 w-[60%] rounded-full bg-primary-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest">Looking Forward</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">Professional Development</h2>
            <p className="mt-4 text-ink-400 max-w-2xl mx-auto">
              My long-term goal is to continue developing my professional and digital capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Short-term */}
            <div className="rounded-2xl bg-ink-900/50 border border-primary-500/20 p-8 hover:border-primary-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15">
                  <Rocket className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Short-Term Goals</h3>
                  <p className="text-sm text-ink-500">Next steps in my career</p>
                </div>
              </div>
              <ul className="space-y-3">
                {goals.shortTerm.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-ink-200">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-term */}
            <div className="rounded-2xl bg-ink-900/50 border border-accent-500/20 p-8 hover:border-accent-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15">
                  <Flag className="h-6 w-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Long-Term Goals</h3>
                  <p className="text-sm text-ink-500">Where I see myself heading</p>
                </div>
              </div>
              <ul className="space-y-3">
                {goals.longTerm.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors">
                    <TrendingUp className="h-5 w-5 text-accent-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-ink-200">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
