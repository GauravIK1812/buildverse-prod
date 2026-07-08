import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact | BuildVerse",
  description:
    "Get in touch with the BuildVerse support team for questions about billing, hardware, or school integrations.",
};

const CONTACT_METHODS = [
  {
    icon: "💬",
    title: "WhatsApp Support",
    value: "+91 6360660450",
    href: "https://wa.me/6360660450",
  },
  {
    icon: "📞",
    title: "Direct Call Hotline",
    value: "+91 6360660450",
    href: "tel:+916360660450",
  },
  {
    icon: "✉️",
    title: "Email Desk",
    value: "klubx09@gmail.com",
    href: "mailto:klubx09@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <ContactForm />

        {/* Details */}
        <div className="space-y-8">
          <div>
            <h1
              className="font-heading font-bold text-4xl mb-3"
              style={{ color: "#e2e8f0" }}
            >
              Get in Touch
            </h1>
            <p style={{ color: "#8b9bb4" }}>
              Our support team is available from 9 AM to 8 PM (Monday to
              Saturday) to assist you.
            </p>
          </div>

          <div className="space-y-3">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.href}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card flex items-center gap-4 p-4 rounded-xl transition-all hover:border-cyan-400/40"
                style={{ border: "1px solid rgba(0,229,255,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(0,229,255,0.08)" }}
                >
                  {m.icon}
                </div>
                <div>
                  <div
                    className="font-heading font-semibold text-sm"
                    style={{ color: "#e2e8f0" }}
                  >
                    {m.title}
                  </div>
                  <div className="text-sm" style={{ color: "#8b9bb4" }}>
                    {m.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div
            className="glass-card rounded-xl p-5"
            style={{ border: "1px solid rgba(0,229,255,0.12)" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">📍</span>
              <div>
                <h4
                  className="font-heading font-semibold text-sm"
                  style={{ color: "#e2e8f0" }}
                >
                  BuildVerse HQ Bangalore
                </h4>
                <p className="text-xs mt-0.5" style={{ color: "#8b9bb4" }}>
                  Level 4, STEM Tech Hub, HSR Layout, Sector 6, Bengaluru,
                  560102
                </p>
              </div>
            </div>
            {/* Visual map placeholder */}
            <div
              className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
              style={{ background: "rgba(0,229,255,0.04)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-1">📍</div>
                <div
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#00e5ff" }}
                >
                  BUILDVERSE HQ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
