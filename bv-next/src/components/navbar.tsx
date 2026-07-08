"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Free Workshop", href: "/workshop" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        background: "rgba(6,6,15,0.88)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(0,229,255,0.12)",
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/logo.jpg"
            alt="BuildVerse Logo"
            width={36}
            height={36}
            className="rounded-full ring-1 ring-cyan-400/30"
          />
          <span
            className="font-heading font-bold text-xl tracking-wide"
            style={{ color: "#e2e8f0" }}
          >
            BUILD
            <span className="gradient-text">VERSE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-300 hover:text-cyan-400 hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/workshop"
            className={cn(
              buttonVariants({ size: "default" }),
              "btn-glow font-semibold text-sm"
            )}
            style={{
              background: "linear-gradient(135deg, #00e5ff, #00b8d4)",
              color: "#06060f",
            }}
          >
            Join Free Workshop
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l"
            style={{
              background: "#0a0a1a",
              borderColor: "rgba(0,229,255,0.2)",
            }}
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/assets/logo.jpg"
                  alt="BuildVerse"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-heading font-bold">
                  BUILD<span className="gradient-text">VERSE</span>
                </span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/workshop"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ size: "default" }),
                "w-full btn-glow font-semibold justify-center"
              )}
              style={{
                background: "linear-gradient(135deg, #00e5ff, #00b8d4)",
                color: "#06060f",
              }}
            >
              Reserve Workshop Seat
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
