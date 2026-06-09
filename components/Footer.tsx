import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-on-surface text-surface font-label-code text-label-code uppercase tracking-widest w-full border-t-4 border-on-surface flat no shadows">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 gap-gutter">
        <div className="font-headline-md text-headline-md text-primary">
          AHMAD RICO M.
        </div>
        <div className="text-surface-variant text-center md:text-left">
          © 2024 AHMAD RICO MARDIANSYAH • BUILT WITH CODE AND COFFEE
        </div>
        <div className="flex gap-6 items-center">
          <Link className="text-surface-variant hover:text-primary-fixed transition-colors scale-105 hover:scale-110 transition-transform" href="#">GITHUB</Link>
          <Link className="text-surface-variant hover:text-primary-fixed transition-colors scale-105 hover:scale-110 transition-transform" href="#">LINKEDIN</Link>
          <Link className="text-surface-variant hover:text-primary-fixed transition-colors scale-105 hover:scale-110 transition-transform" href="#">INSTAGRAM</Link>
        </div>
      </div>
    </footer>
  );
}
