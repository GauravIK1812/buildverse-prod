import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Community Guild | BuildVerse",
  description:
    "Collaborate with peers, ask debugging questions, and get updates about upcoming tournaments.",
};

const EVENTS = [
  {
    date: "JUL 04",
    title: "Open Hardware Debug Night",
    desc: "Join our lead mentors on WhatsApp Community live to fix loose solder points, write custom interrupts, and organize code packages.",
  },
  {
    date: "JUL 11",
    title: "AI Robotics Guest Lecture",
    desc: "A 1-hour session by an IIT Madras researcher detailing how autonomous warehouse rovers navigate safely using LiDAR arrays.",
  },
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1
          className="font-heading font-bold text-4xl"
          style={{ color: "#e2e8f0" }}
        >
          The BuildVerse Guild
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#8b9bb4" }}>
          Collaborate with peers, ask debugging questions to developers, and get
          updates about upcoming tournaments.
        </p>
      </div>

      {/* WhatsApp CTA */}
      <div className="flex justify-center">
        <div className="glass-card neon-green-glow rounded-2xl p-8 text-center max-w-lg w-full space-y-4">
          <div className="text-5xl">💬</div>
          <h3
            className="font-heading font-bold text-2xl"
            style={{ color: "#e2e8f0" }}
          >
            WhatsApp Channels
          </h3>
          <p className="text-sm" style={{ color: "#8b9bb4" }}>
            Receive immediate alerts regarding new project templates, homework
            templates, rescheduled classes, and contest schedules.
          </p>
          <a
            href="https://chat.whatsapp.com/H8eXjyIYxVG3q7Dnz9jSTc"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "default" }),
              "w-full font-semibold justify-center"
            )}
            style={{
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              color: "#fff",
            }}
          >
            Join WhatsApp Hub
          </a>
        </div>
      </div>

      {/* Upcoming events */}
      <div
        className="glass-card rounded-2xl p-8"
        style={{ border: "1px solid rgba(0,229,255,0.15)" }}
      >
        <h3
          className="font-heading font-bold text-xl mb-6"
          style={{ color: "#e2e8f0" }}
        >
          Upcoming Virtual Meetups
        </h3>
        <div className="space-y-6">
          {EVENTS.map((event, i) => (
            <div key={i} className="flex gap-5">
              <div
                className="shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center text-center text-xs font-bold leading-tight"
                style={{
                  background: "rgba(0,229,255,0.1)",
                  border: "1px solid rgba(0,229,255,0.3)",
                  color: "#00e5ff",
                }}
              >
                {event.date.split(" ").map((part, j) => (
                  <span key={j} className="block">
                    {part}
                  </span>
                ))}
              </div>
              <div>
                <h4
                  className="font-heading font-semibold text-base mb-1"
                  style={{ color: "#e2e8f0" }}
                >
                  {event.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#8b9bb4" }}
                >
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
