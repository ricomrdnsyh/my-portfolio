import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-on-surface text-surface font-label-code text-label-code uppercase tracking-widest w-full border-t-4 border-on-surface flat no shadows">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 gap-gutter">
        <div className="font-headline-md text-headline-md text-primary">
          RICOMRDNSYH
        </div>
        <div className="flex gap-6 items-center">
          <Link
            className="text-surface-variant hover:text-primary-fixed transition-colors hover:scale-110 transition-transform"
            href="https://instagram.com/ricomrdnsyh/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            className="text-surface-variant hover:text-primary-fixed transition-colors hover:scale-110 transition-transform"
            href="https://x.com/ricomdnsyh/"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-6 h-6" />
          </Link>
          <Link
            className="text-surface-variant hover:text-primary-fixed transition-colors hover:scale-110 transition-transform"
            href="https://linkedin.com/in/ricomardiansyah/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
          <Link
            className="text-surface-variant hover:text-primary-fixed transition-colors hover:scale-110 transition-transform"
            href="https://github.com/ricomrdnsyh/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-surface-variant text-center md:text-right">
          © 2025 · Available for opportunities
        </div>
      </div>
    </footer>
  );
}
