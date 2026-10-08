import { Target, UserRound, CheckCircle2 } from 'lucide-react';
import { aboutContent, professionalStatement } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest">About Me</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">Who I Am</h2>
          </div>

          {/* Profile card */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-ink-800/50 border border-white/10 p-8 hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/15">
                  <UserRound className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">Personal Profile</h3>
              </div>
              <p className="text-ink-300 leading-relaxed">{aboutContent.profile}</p>
              <p className="mt-4 text-ink-400 leading-relaxed text-sm">{aboutContent.profileDetail}</p>
            </div>

            <div className="rounded-2xl bg-ink-800/50 border border-white/10 p-8 hover:border-accent-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15">
                  <Target className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">Career Objective</h3>
              </div>
              <p className="text-ink-300 leading-relaxed">{aboutContent.objective}</p>
              <ul className="mt-4 space-y-2">
                {aboutContent.objectivePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-400">
                    <CheckCircle2 className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional role */}
          <div className="rounded-2xl bg-gradient-to-br from-ink-800/50 to-ink-950/50 border border-white/10 p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-white mb-2">My Professional Role</h3>
            <p className="text-ink-400 leading-relaxed mb-6">
              My professional role is to contribute as a reliable, technology-aware, customer-focused, and adaptable employee
              who can work effectively with people, digital tools, and everyday workplace responsibilities. I aim to bring:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {aboutContent.rolePoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary-400 shrink-0" />
                  <span className="text-sm text-ink-200">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional statement */}
          <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-950/20 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="text-5xl font-display font-bold text-primary-500/30 leading-none">&ldquo;</div>
              <p className="text-lg text-ink-200 leading-relaxed italic">{professionalStatement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
