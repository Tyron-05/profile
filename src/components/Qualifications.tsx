import {
  Brain, GraduationCap, Monitor, Users, ShieldCheck,
  ArrowRight, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { qualifications, valueContributions } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Brain, GraduationCap, Monitor, Users, ShieldCheck,
};

const accentMap: Record<string, string> = {
  primary: 'from-primary-500/20 to-primary-600/5 border-primary-500/30',
  accent: 'from-accent-500/20 to-accent-600/5 border-accent-500/30',
  success: 'from-success-500/20 to-success-600/5 border-success-500/30',
  warning: 'from-warning-500/20 to-warning-600/5 border-warning-500/30',
  error: 'from-error-500/20 to-error-600/5 border-error-500/30',
};

const iconColorMap: Record<string, string> = {
  primary: 'text-primary-400',
  accent: 'text-accent-400',
  success: 'text-success-500',
  warning: 'text-warning-500',
  error: 'text-error-500',
};

export default function Qualifications() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="qualifications" className="relative bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest">Education & Training</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">Qualifications</h2>
          </div>

          {/* Qualification cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {qualifications.map((q, i) => {
              const Icon = iconMap[q.icon] ?? GraduationCap;
              const accent = accentMap[q.accent] ?? accentMap.primary;
              const iconColor = iconColorMap[q.accent] ?? iconColorMap.primary;
              return (
                <div
                  key={i}
                  className={`rounded-2xl bg-gradient-to-br ${accent} border p-7 hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950/40 mb-5">
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{q.title}</h3>
                  <p className={`text-sm font-medium ${iconColor} mt-1`}>{q.area}</p>
                  <p className="text-sm text-ink-400 mt-3 leading-relaxed">{q.description}</p>
                </div>
              );
            })}

            {/* Value card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent-600/10 border border-primary-500/30 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950/40 mb-5">
                <Sparkles className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Value I Bring</h3>
              <p className="text-sm text-ink-400 mt-3 leading-relaxed">
                A blend of traditional workplace skills and modern digital capabilities — ready to contribute from day one.
              </p>
            </div>
          </div>

          {/* Value contributions list */}
          <div className="rounded-2xl bg-ink-800/50 border border-white/10 p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-white mb-6">How I Can Contribute</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {valueContributions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500/15 text-primary-400 text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-ink-200">{item}</span>
                  <ArrowRight className="h-4 w-4 text-ink-600 ml-auto group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
