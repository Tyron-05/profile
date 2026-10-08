import {
  Brain, Monitor, Users, ShieldCheck,
  CheckCircle, Shuffle, Briefcase, HeartHandshake,
  Cpu, Lightbulb, GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories, corePersonalSkills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Brain, Monitor, Users, ShieldCheck,
  CheckCircle, Shuffle, Briefcase, HeartHandshake,
  Cpu, Lightbulb, GraduationCap,
};

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  primary: { bg: 'bg-primary-500/15', text: 'text-primary-400', border: 'border-primary-500/20', hover: 'hover:border-primary-500/40' },
  accent: { bg: 'bg-accent-500/15', text: 'text-accent-400', border: 'border-accent-500/20', hover: 'hover:border-accent-500/40' },
  success: { bg: 'bg-success-500/15', text: 'text-success-500', border: 'border-success-500/20', hover: 'hover:border-success-500/40' },
  warning: { bg: 'bg-warning-500/15', text: 'text-warning-500', border: 'border-warning-500/20', hover: 'hover:border-warning-500/40' },
  error: { bg: 'bg-error-500/15', text: 'text-error-500', border: 'border-error-500/20', hover: 'hover:border-error-500/40' },
};

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="relative bg-ink-950 py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest">Skills & Expertise</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">What I Bring</h2>
            <p className="mt-4 text-ink-400 max-w-2xl mx-auto">
              A versatile skill set spanning AI, digital literacy, hospitality, and workplace safety.
            </p>
          </div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Brain;
              const c = colorMap[cat.color] ?? colorMap.primary;
              return (
                <div
                  key={cat.title}
                  className={`rounded-2xl bg-ink-900/50 border ${c.border} ${c.hover} p-7 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg}`}>
                      <Icon className={`h-6 w-6 ${c.text}`} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{cat.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors"
                      >
                        <div className={`mt-1.5 h-2 w-2 rounded-full ${c.bg.replace('/15', '')} shrink-0`} />
                        <div>
                          <p className="text-sm font-medium text-ink-100">{skill.name}</p>
                          <p className="text-xs text-ink-400 mt-0.5">{skill.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core personal skills */}
          <div className="rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 border border-white/10 p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-white mb-6 text-center">Core Personal Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {corePersonalSkills.map((skill) => {
                const Icon = iconMap[skill.icon] ?? CheckCircle;
                return (
                  <div
                    key={skill.label}
                    className="group flex flex-col items-center text-center rounded-xl bg-white/5 px-4 py-6 hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 mb-3 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">{skill.label}</p>
                    <p className="text-xs text-ink-400 mt-1 leading-snug">{skill.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
