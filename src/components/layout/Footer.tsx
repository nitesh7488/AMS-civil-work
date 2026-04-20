'use client';
// src/components/layout/Footer.tsx — SEO-rich footer with service areas

import Link from 'next/link';
import Image from 'next/image';
import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const serviceLinks = [
  { label: 'Bungalow Construction',   href: '/services#bungalow-construction' },
  { label: 'Full Interior Civil Work',href: '/services#interior-civil-work'   },
  { label: 'Swimming Pool Work',      href: '/services#swimming-pool-work'    },
  { label: 'Compound Wall & Gates',   href: '/services#compound-wall-work'    },
  { label: 'Building Repair',         href: '/services#building-repair-work'  },
  { label: 'Bathroom Renovation',     href: '/services#bathroom-renovation'   },
  { label: 'Kitchen Work',            href: '/services#kitchen-work'          },
  { label: 'Tiles Work',              href: '/services#tiles-work'            },
  { label: 'Flooring Work',           href: '/services#flooring-work'         },
  { label: 'POP Work',                href: '/services#pop-work'              },
  { label: 'Plaster Work',            href: '/services#plaster-work'          },
  { label: 'Wall Work',               href: '/services#wall-work'             },
];

const quickLinks = [
  { label: 'Home',          href: '/'         },
  { label: 'About Us',      href: '/about'    },
  { label: 'Services',      href: '/services' },
  { label: 'Projects',      href: '/projects' },
  { label: 'Gallery',       href: '/gallery'  },
  { label: 'Blog',          href: '/blog'     },
  { label: 'Contact',       href: '/contact'  },
  { label: 'Service Areas', href: '/areas'    },
];

const areaLinks = [
  { label: 'Borivali',    href: '/areas/borivali'    },
  { label: 'Andheri',     href: '/areas/andheri'     },
  { label: 'Bandra',      href: '/areas/bandra'      },
  { label: 'Kandivali',   href: '/areas/kandivali'   },
  { label: 'Malad',       href: '/areas/malad'       },
  { label: 'Thane',       href: '/areas/thane'       },
  { label: 'Mira Road',   href: '/areas/mira-road'   },
  { label: 'Navi Mumbai', href: '/areas/vashi'       },
  { label: 'Kalyan',      href: '/areas/kalyan'      },
  { label: 'Panvel',      href: '/areas/panvel'      },
];

const socialLinks = [
  { Icon: Facebook,  href: 'https://www.facebook.com/profile.php?id=61570712849063', label: 'Facebook'  },
  { Icon: Instagram, href: 'https://www.instagram.com/ams.constructionwork/', label: 'Instagram' },
  { Icon: Youtube,   href: '#', label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer style={{ background: '#080D1A', borderTop: '1px solid #1E2D45' }}>

      {/* CTA Banner */}
      <div style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }} className="py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-white text-2xl font-bold">Ready to Start Your Project?</h3>
            <p className="text-white/70 text-sm mt-1">Free consultation from our expert team within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <div className="flex flex-col gap-2">
              <a href="tel:+918779391690"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-xs tracking-wide uppercase hover:opacity-90 transition-opacity bg-[#0B1120] text-white">
                <Phone size={14} /> 87793 91690
              </a>
              <a href="tel:+919004298911"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-xs tracking-wide uppercase hover:opacity-90 transition-opacity bg-[#0B1120] text-white">
                <Phone size={14} /> 90042 98911
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/918779391690" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-xs tracking-wide uppercase border-2 border-white/80 text-white hover:bg-white hover:text-orange-600 transition-all duration-200">
                WhatsApp 1
              </a>
              <a href="https://wa.me/919004298911" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-xs tracking-wide uppercase border-2 border-white/80 text-white hover:bg-white hover:text-orange-600 transition-all duration-200">
                WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content — 5 columns */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand — spans 1 col */}
          <div className="lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-10 h-10 overflow-hidden rounded-sm">
                <Image 
                  src="/logo.png" 
                  alt="AMS Civil Construction Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-display font-bold text-base">AMS Civil</span>
                <span className="block text-[10px] font-mono tracking-[0.18em] uppercase -mt-0.5" style={{ color: '#F97316' }}>Construction</span>
              </div>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed mb-5">
              India&apos;s trusted construction partner for 20+ years. 
              We strictly follow all government rules and regulations to deliver excellence in every project.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="w-8 h-8 flex items-center justify-center footer-social">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2 w-fit mx-auto md:mx-0 items-start">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-orange-400 transition-colors group">
                    <span className="w-2.5 h-px bg-slate-700 group-hover:w-4 group-hover:bg-orange-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-2 w-fit mx-auto md:mx-0 items-start">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-orange-400 transition-colors group">
                    <span className="w-2.5 h-px bg-slate-700 group-hover:w-4 group-hover:bg-orange-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Areas — SEO backlinks */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Top Areas</h4>
            <ul className="flex flex-col gap-2 w-fit mx-auto md:mx-0 items-start">
              {areaLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-orange-400 transition-colors group">
                    <MapPin size={10} className="flex-shrink-0" style={{ color: '#F97316' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/areas" className="inline-flex items-center gap-1 text-xs mt-3" style={{ color: '#F97316' }}>
              View all 40+ areas →
            </Link>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-4 w-fit mx-auto md:mx-0 items-start text-left">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#F97316' }} />
                <span className="text-slate-500 text-xs leading-relaxed">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="flex-shrink-0" style={{ color: '#F97316' }} />
                  <a href="tel:+918779391690" className="text-slate-500 hover:text-orange-400 text-xs transition-colors">
                    +91 87793 91690
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="flex-shrink-0" style={{ color: '#F97316' }} />
                  <a href="tel:+919004298911" className="text-slate-500 hover:text-orange-400 text-xs transition-colors">
                    +91 90042 98911
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="flex-shrink-0" style={{ color: '#F97316' }} />
                <a href="mailto:ams.constructionwork@gmail.com"
                  className="text-slate-500 hover:text-orange-400 text-xs transition-colors break-all">
                  ams.constructionwork@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO keyword area row */}
      <div style={{ borderTop: '1px solid #1E2D45', background: '#060B14' }} className="py-4">
        <div className="container-custom">
          <p className="text-slate-700 text-[10px] leading-relaxed text-center">
            AMS Civil Construction - Top Construction Company in India · Mumbai · Pune · Bangalore · Kolkata · Ranchi ·
            Borivali · Andheri · Bandra · Thane · Navi Mumbai · Kalyan · Panvel ·
            Worli · Dadar · Lower Parel · Bhandup · Vikhroli · Kurla · Sion · Vashi · Nerul · Belapur ·
            Bungalow Construction · Bathroom Renovation · Kitchen Work · Tiles · Flooring · POP Work
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4" style={{ borderTop: '1px solid #0E1827' }}>
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-700 text-xs text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} AMS Civil Construction. All rights reserved. A Mandal Group Venture
            <Link href="/admin" className="ml-1 text-slate-700 hover:text-orange-500 transition-colors cursor-default" title="Admin">.</Link>
          </p>
          <p>Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
