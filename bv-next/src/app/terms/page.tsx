export const metadata = {
  title: "Terms & Conditions | BuildVerse",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By registering for our workshops, utilizing the dashboards, or accessing the BuildVerse platform, you agree to comply with and be bound by these Terms and Conditions. If registering as a minor (under the age of 18), your parent or legal guardian must review and accept these terms on your behalf.",
  },
  {
    title: "2. Parent / Guardian Responsibility",
    content:
      "Parents and legal guardians are fully responsible for the activities of their children while using the platform. Parents are encouraged to utilize the Parent Portal dashboard to monitor their child's engagement, feedback, and class schedules.",
  },
  {
    title: "3. Physical Kit Usage & Safety",
    content:
      "Our workshops involve building physical coding and hardware projects (such as ESP8266 development boards, wiring, and sensor packages). Students must follow the lead mentor's instructions carefully. BuildVerse is not liable for minor electrical shorts, component damages, or hardware misuse by the student during home-based experiments.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All materials, designs, custom roadmaps, graphics, code examples, and videos displayed on the BuildVerse site are our intellectual property and may only be used for personal, educational purposes. You may not distribute, reproduce, or resell our materials without written authorization.",
  },
  {
    title: "5. Revisions and Modifications",
    content:
      "We reserve the right to revise these terms or update platform features at any time. Your continued use of the platform after terms updates indicates your acceptance of the revised Terms and Conditions.",
  },
  {
    title: "6. Support & Inquiries",
    content: null,
    jsx: (
      <p>
        For any queries, please email us at{" "}
        <a href="mailto:klubx09@gmail.com" style={{ color: "#00e5ff" }}>
          klubx09@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div
        className="glass-card neon-glow-border rounded-2xl p-8 md:p-12"
      >
        <h1
          className="font-heading font-bold text-3xl text-center mb-2"
          style={{ color: "#e2e8f0" }}
        >
          Terms & Conditions
        </h1>
        <p className="text-center text-sm mb-10" style={{ color: "#8b9bb4" }}>
          Effective Date: July 7, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed">
          {sections.map((s, i) => (
            <div key={i}>
              <h2
                className="font-heading font-bold text-lg mb-3"
                style={{ color: "#00e5ff" }}
              >
                {s.title}
              </h2>
              {s.jsx ? (
                <div style={{ color: "#b0c4de" }}>{s.jsx}</div>
              ) : (
                <p style={{ color: "#b0c4de" }}>{s.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
