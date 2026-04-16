// src/app/contact/page.tsx  –  Contact page refactored to Server Component
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      values: ['+91 87793 91690'],
      href: 'tel:+918779391690',
    },
    {
      icon: Mail,
      label: 'Email',
      values: ['ams.constructionwork@gmail.com'],
      href: 'mailto:ams.constructionwork@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      values: ['Mumbai, Maharashtra, India'],
      href: null,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      values: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
      href: null,
    },
  ];

  return (
    <ScrollReveal>
      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#080D1A' }}>
        <div className="glow-orb w-[500px] h-[500px] opacity-15"
          style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', top: '-20%', right: '-10%' }} />
        <div className="relative container-custom">
          <div className="section-label animate-fadeIn border-orange-500/30 text-orange-400">Get in Touch</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-2 animate-fadeUp">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-slate-400 mt-3 max-w-xl text-sm leading-relaxed animate-fadeIn">
            Have a project in mind? Reach out for a free consultation.
            Our team responds within 24 hours.
          </p>
          <nav className="flex items-center gap-2 mt-4 text-slate-500 text-sm animate-fadeIn">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#F97316' }}>Contact</span>
          </nav>
        </div>
      </section>

      {/* ── Contact Content ──────────────────────────────────── */}
      <section className="section-y" style={{ background: '#0B1120' }}>
        <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="animate-on-scroll">
              <div className="section-label">Our Coordinates</div>
              <h2 className="font-display text-2xl text-white mt-2 mb-4">
                We&apos;re Here to <span className="text-gradient">Help</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a question, want a quote, or are ready to start — our team is
                ready to help.
              </p>
            </div>

            {contactDetails.map(({ icon: Icon, label, values, href }, i) => (
              <div key={label} className="card p-5 flex items-start gap-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg"
                  style={{ background: 'rgba(249,115,22,0.12)' }}>
                  <Icon size={17} style={{ color: '#F97316' }} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{label}</p>
                  {values.map(v => (
                    href ? (
                      <a key={v} href={href}
                        className="block text-slate-300 text-sm font-medium hover:text-orange-400 transition-colors">
                        {v}
                      </a>
                    ) : (
                      <p key={v} className="text-slate-300 text-sm">{v}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            <a href="https://wa.me/918779391690?text=Hi!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer"
              className="btn-primary justify-center animate-on-scroll">
              <MessageCircle size={17} />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Right — Contact Form (Client Component) */}
          <div className="lg:col-span-3 animate-on-scroll-delayed">
             <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Google Maps ──────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#080D1A' }}>
        <div className="container-custom">
          <div className="section-label animate-on-scroll">Find Us</div>
          <h2 className="font-display text-2xl text-white mb-6 animate-on-scroll">
            Our <span className="text-gradient">Location</span>
          </h2>
          <div className="w-full h-[450px] overflow-hidden rounded-2xl animate-on-scroll shadow-2xl"
            style={{ border: '1px solid #1E2D45' }}>
            <iframe
              title="AMS Civil Construction — Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823357!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c55%3A0xe0b9a2a9e4e3e7f5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(100%)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
