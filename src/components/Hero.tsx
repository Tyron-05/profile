import { ArrowDown, Sparkles, Brain, Monitor, ShieldCheck, Users } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary-600/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />

      {/* Floating icons */}
      <div className="hidden md:block absolute top-[20%] left-[12%] animate-float">
        <div className="glass rounded-2xl p-4 border border-white/10">
          <Brain className="h-8 w-8 text-primary-400" />
        </div>
      </div>
      <div className="hidden md:block absolute top-[30%] right-[15%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass rounded-2xl p-4 border border-white/10">
          <Monitor className="h-8 w-8 text-accent-400" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-[25%] left-[18%] animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass rounded-2xl p-4 border border-white/10">
          <Users className="h-8 w-8 text-success-500" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-[30%] right-[12%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-2xl p-4 border border-white/10">
          <ShieldCheck className="h-8 w-8 text-warning-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-accent-400" />
          <span className="text-sm font-medium text-ink-200">Open to opportunities</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-up">
          {personalInfo.name}
        </h1>

        <p className="mt-4 font-display text-2xl sm:text-3xl font-semibold gradient-text animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {personalInfo.tagline}
        </p>

        <p className="mt-6 text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {personalInfo.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all hover:shadow-xl hover:shadow-primary-500/30"
          >
            Learn About Me
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 text-base font-semibold text-ink-200 border border-white/15 rounded-xl hover:bg-white/5 hover:text-white transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-ink-500 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5 text-ink-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
