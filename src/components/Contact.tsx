import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-concrete-900 grid-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-orange" />
            <span className="font-mono text-xs tracking-[0.3em] text-concrete-500">SEC.05</span>
          </div>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl tracking-tighter text-white">
            SUBMIT<br />
            <span className="text-orange">REQUEST</span>
          </h2>
          <p className="mt-4 text-concrete-400 max-w-lg font-mono text-sm">
            // All fields are required. Your message will be processed and you'll receive
            a structural response within 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-concrete-400 mb-2">
                  FULL NAME <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-concrete-800 border-2 border-concrete-600 text-white font-mono text-sm px-4 py-3 focus:border-orange focus:outline-none transition-colors placeholder:text-concrete-600"
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-concrete-400 mb-2">
                  EMAIL <span className="text-orange">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-concrete-800 border-2 border-concrete-600 text-white font-mono text-sm px-4 py-3 focus:border-orange focus:outline-none transition-colors placeholder:text-concrete-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs font-bold tracking-widest text-concrete-400 mb-2">
                SUBJECT <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry"
                className="w-full bg-concrete-800 border-2 border-concrete-600 text-white font-mono text-sm px-4 py-3 focus:border-orange focus:outline-none transition-colors placeholder:text-concrete-600"
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold tracking-widest text-concrete-400 mb-2">
                MESSAGE <span className="text-orange">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project requirements..."
                className="w-full bg-concrete-800 border-2 border-concrete-600 text-white font-mono text-sm px-4 py-3 focus:border-orange focus:outline-none transition-colors resize-none placeholder:text-concrete-600"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="font-mono text-sm font-bold tracking-wider bg-orange text-white px-10 py-4 border-2 border-orange hover:bg-transparent hover:text-orange transition-all duration-300 inline-flex items-center gap-3"
              >
                {submitted ? (
                  <>
                    <span className="text-green-400">✓</span>
                    MESSAGE SENT
                  </>
                ) : (
                  <>
                    TRANSMIT MESSAGE
                    <span>→</span>
                  </>
                )}
              </button>
              <span className="font-mono text-[10px] text-concrete-500">
                ALL FIELDS ENCRYPTED
              </span>
            </div>
          </motion.form>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="border-2 border-concrete-600 p-6 bg-concrete-800/50">
              <h3 className="font-mono text-sm font-bold text-orange tracking-wider mb-4">
                DIRECT CONTACT
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'EMAIL', value: 'engineer@portfolio.com' },
                  { label: 'PHONE', value: '+212 6XX XXX XXX' },
                  { label: 'LOCATION', value: 'Casablanca, Morocco' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-mono text-[10px] text-concrete-500 tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="font-mono text-sm text-concrete-200">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-concrete-600 p-6 bg-concrete-800/50">
              <h3 className="font-mono text-sm font-bold text-orange tracking-wider mb-4">
                PROFILES
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'LinkedIn', url: '#' },
                  { name: 'GitHub', url: '#' },
                  { name: 'ResearchGate', url: '#' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center justify-between font-mono text-sm text-concrete-300 hover:text-orange transition-colors py-2 border-b border-concrete-700 last:border-0"
                  >
                    {link.name}
                    <span>→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-2 border-concrete-600 p-6 bg-concrete-800/50">
              <h3 className="font-mono text-sm font-bold text-orange tracking-wider mb-4">
                AVAILABILITY
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 animate-pulse" />
                <span className="font-mono text-sm text-green-400">OPEN FOR PROJECTS</span>
              </div>
              <p className="text-xs text-concrete-400 leading-relaxed">
                Currently available for freelance work, internships, and collaborative
                structural engineering projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
