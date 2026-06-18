import React from "react";
import Link from "next/link";
import { Briefcase, Code, Globe } from "lucide-react";

import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105 group">
              <Logo className="scale-75 origin-left" />
            </Link>
            <p className="text-text-muted text-sm">
              We build digital products that scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Code className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Services</h4>
            <a href="#services" className="text-text-muted hover:text-white transition-colors">Web Development</a>
            <a href="#services" className="text-text-muted hover:text-white transition-colors">Mobile Apps</a>
            <a href="#services" className="text-text-muted hover:text-white transition-colors">Cloud Infrastructure</a>
            <a href="#services" className="text-text-muted hover:text-white transition-colors">UI/UX Design</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Company</h4>
            <a href="#about" className="text-text-muted hover:text-white transition-colors">About Us</a>
            <a href="#work" className="text-text-muted hover:text-white transition-colors">Our Work</a>
            <a href="#insights" className="text-text-muted hover:text-white transition-colors">Insights</a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">Careers</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Contact</h4>
            <p className="text-text-muted">hello@drw.digital</p>
            <p className="text-text-muted">123 Tech Avenue<br />San Francisco, CA 94105</p>
            <Link href="/contact" className="text-primary hover:text-primary-glow font-medium mt-2">
              Book a call &rarr;
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-text-muted gap-4">
          <p>&copy; {new Date().getFullYear()} DR.W. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
