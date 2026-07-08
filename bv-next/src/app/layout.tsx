import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildVerse | Build. Compete. Innovate.",
  description:
    "Premium STEM Education platform offering live mentorship in AI, Robotics, Drones, Electronics, IoT, and Embedded Systems. Build your future today.",
  keywords:
    "STEM, AI, Robotics, Drones, IoT, Electronics, Mentorship, Arduino, ESP32, Programming, Education",
  openGraph: {
    type: "website",
    url: "https://thebuilders.in",
    title: "BuildVerse | Build. Compete. Innovate.",
    description:
      "Premium STEM Education platform offering live mentorship in AI, Robotics, Drones, Electronics, IoT, and Embedded Systems.",
    images: [{ url: "https://thebuilders.in/assets/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildVerse | Build. Compete. Innovate.",
    description:
      "Premium STEM Education platform offering live mentorship in AI, Robotics, Drones, Electronics, IoT, and Embedded Systems.",
    images: ["https://thebuilders.in/assets/logo.jpg"],
  },
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#06060f", color: "#e2e8f0" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#0d0d1f",
              border: "1px solid rgba(0,229,255,0.3)",
              color: "#e2e8f0",
            },
          }}
        />
      </body>
    </html>
  );
}
