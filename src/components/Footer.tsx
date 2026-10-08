import { Sparkles, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">{personalInfo.name}</p>
              <p className="text-xs text-ink-500">{personalInfo.tagline}</p>
            </div>
          </div>

          <p className="text-xs text-ink-600 text-center">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors group"
          >
            Back to Top
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
