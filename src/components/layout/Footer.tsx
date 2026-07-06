import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";
import namanLogo from "@/assets/naman.webp";
import { openWhatsApp } from "@/services/native";

const Footer = () => {
  const navigate = useNavigate();
  const quickLinks = [
    { name: "Kedarnath Yatra", href: "/kedarnath-yatra" },
    { name: "Vrindavan Yatra", href: "/vrindavan-yatra" },
    { name: "Ayodhya Ram Mandir", href: "/ayodhya-yatra" },

    { name: "Live Darshan", href: "/live-darshan" },
  ];

  const services = [
    { name: "Temple Darshan", href: "/temples" },
    { name: "Puja Services", href: "/puja" },
    { name: "Chadhava Seva", href: "/chadhava" },
    { name: "Prasadam Seva", href: "/prasadam" },
    { name: "Astro Services", href: "/astro-naman" },
    { name: "International Temple", href: "international_temple_action" },
  ];

  const support = [
    { name: "About Us", href: "/about-us" },
    { name: "News & Events", href: "/news-events" },
    { name: "Blogs", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
    {name:"Media", href:"/media/aarti"},
    { name: "Volunteer", href: "/volunteer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start leading-none">
              <img src={namanLogo} alt="Naman" className="h-20 w-auto object-contain" />
              <span className="text-[7px] font-bold text-primary uppercase tracking-[0.05em] mt-1 whitespace-nowrap opacity-80">
                Seva • Suvidha • Samarpan
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Experience divine ease with Guided Darshan Assistance from Naman Darshan. A knowledgeable Pandit Ji will accompany you, guide you through the temple, and share insights about the temple's history and significance, prioritizing tranquility and reverence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Naman-Darshan/61562897897801/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/namandarshanofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Naman.Darshan?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/naman-darshan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Contact Info / Company Links */}
          <div className="lg:pl-12">
            <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h4 className="font-display text-xl font-semibold mb-6">Popular Yatras</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:pl-12">
            <h4 className="font-display text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  {link.name === "International Temple" ? (
                    <button
                      onClick={() => {
                        navigate('/darshan?category=international#available-darshans');
                      }}
                      className="text-white/70 hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center">
              Copyright 2026 by NAMANDARSHAN (Namandarshan is an alliance of Traininglobe Consultancy Private Limited)
            </p>
            <p className="text-white/50 text-xs text-center max-w-xl">
              Guided Darshan Assistance is designed to provide dedicated guide and accompaniment services from local Pandit Jis for temple visits.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
