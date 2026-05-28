import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Company Information", href: "/company-information" },
];

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/80971657/" },
  { label: "Contact Us", href: "#contact" },
  { label: "Andy'K Group", href: "https://andykgroup.com" },
  { label: "A.D.A.M.", href: "https://adam.andykgroup.com" },
];

const productLinks = [
  { label: "Features", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Access Portal", href: "#access" },
  { label: "Request Access", href: "/request-access" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#1B1F3A" }} className="border-t border-white/10 py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <a href="/" className="text-white font-bold text-xl tracking-tight block mb-1">
              E.V.E.
            </a>
            <p className="text-sm text-muted-2 mb-2">Intelligence System</p>
            <p className="text-xs text-muted-2">
              By Andy&apos;K Group International LTD
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-2 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-2 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-2 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2">
            &copy; {new Date().getFullYear()} Andy&apos;K Group International LTD. All rights reserved.
          </p>
          <p className="text-xs text-muted-2">
            Reg: 16453500 &middot; 86&ndash;90 Paul Street, London, EC2A 4NE
          </p>
        </div>
      </div>
    </footer>
  );
}
