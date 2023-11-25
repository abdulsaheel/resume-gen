"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import clglogo from "public/clglogo.png"
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">Digi Vyaapar Resume Builder</span>
          <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-10 w-full"
            priority
          />
          
        </Link>
        <Link href="https://mrec.ac.in" target="_blank">
          <span className="sr-only">Malla Reddy Engineering Colllege</span>
          <Image
            src={clglogo}
            alt="OpenResume Logo"
            className="h-10 w-full"
            priority
          />
          
        </Link>
        
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["http://127.0.0.1:5000/", "Portfolio Builder"],
            ["/resume-builder", "Resume Builder"],
            ["/resume-parser", "Resume Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}

        </nav>
      </div>
    </header>
  );
};
