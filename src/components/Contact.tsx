import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'tyronmashabane@example.com', href: 'mailto:tyronmashabane@example.com' },
    { icon: Phone, label: 'Phone', value: '+27 00 000 0000', href: 'tel:+270000000000' },
    { icon: MapPin, label: 'Location', value: 'Available to work remotely & on-site', href: null },
  ];

  return (
    <section id="contact" className="relative bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest">Get in Touch</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">Let's Work Together</h2>
            <p className="mt-4 text-ink-400 max-w-2xl mx-auto">
              I'm eager to apply my knowledge in a professional environment and develop through practical experience.
              Reach out — I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl bg-ink-800/50 border border-white/10 p-5 hover:border-primary-500/30 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 shrink-0">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-500 uppercase tracking-widest">{info.label}</p>
                      <p className="text-sm font-medium text-white mt-0.5">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              <div className="rounded-2xl bg-gradient-to-br from-primary-600/15 to-accent-600/10 border border-primary-500/20 p-6">
                <p className="text-sm text-ink-200 leading-relaxed">
                  Open to opportunities where I can use my AI, digital, hospitality, and customer service skills
                  while continuing to grow professionally.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-ink-800/50 border border-white/10 p-7 space-y-5"
            >
              <div>
                <label className="block text-xs text-ink-400 uppercase tracking-widest mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl bg-ink-950/50 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-primary-500/50 focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-ink-400 uppercase tracking-widest mb-2">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl bg-ink-950/50 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-primary-500/50 focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-ink-400 uppercase tracking-widest mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-5 w-5 text-ink-500" />
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl bg-ink-950/50 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-primary-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="I'd like to discuss an opportunity..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all ${
                  sent
                    ? 'bg-success-600'
                    : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 hover:shadow-lg hover:shadow-primary-500/30'
                }`}
              >
                {sent ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
