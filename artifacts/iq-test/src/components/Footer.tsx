import { Link } from 'wouter';
import { BrainCircuit } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight text-primary">FreeIQTest</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              A professional online cognitive testing platform built on established psychometric principles. Designed for self-discovery and educational purposes.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/author" className="hover:text-primary transition-colors">About the Author</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/updates" className="hover:text-primary transition-colors">Updates</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/wiki" className="hover:text-primary transition-colors">Knowledge Base</Link></li>
              <li><Link href="/methodology" className="hover:text-primary transition-colors">Methodology</Link></li>
              <li><Link href="/science" className="hover:text-primary transition-colors">The Science</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FreeIQTest.online. All rights reserved.</p>
          <p>Educational and entertainment purposes only. Not a clinical diagnostic tool.</p>
        </div>
      </div>
    </footer>
  );
}
