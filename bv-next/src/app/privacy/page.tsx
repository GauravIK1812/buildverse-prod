export const metadata = {
  title: "Privacy Policy | BuildVerse",
};

const sections = [
  {
    title: "1. Children's Privacy & Safety (COPPA/GDPR-K)",
    content: (
      <>
        <p className="mb-3">
          At BuildVerse, we are dedicated to providing a safe, educational, and secure environment.
          Because we teach physical coding and engineering to students under the age of 18, we take
          special precautions to protect children&apos;s privacy under the Children&apos;s Online Privacy
          Protection Act (COPPA) and international child privacy regulations.
        </p>
        <ul className="space-y-2 list-disc list-inside text-sm" style={{ color: "#8b9bb4" }}>
          <li>
            <strong style={{ color: "#e2e8f0" }}>Parental Involvement:</strong> We require express
            parental consent before children under 18 (and especially under 13) can register for
            our active coding portals.
          </li>
          <li>
            <strong style={{ color: "#e2e8f0" }}>Data Minimization:</strong> We collect only the
            minimum necessary information: name, email, password, age range, parent email, and
            homework/project data.
          </li>
          <li>
            <strong style={{ color: "#e2e8f0" }}>No Third-Party Tracking:</strong> We do not run
            third-party advertising tracking or behavior monitoring networks.
          </li>
          <li>
            <strong style={{ color: "#e2e8f0" }}>Parental Rights:</strong> Parents have the
            absolute right to review, update, or request deletion of their child&apos;s account at{" "}
            <a href="mailto:klubx09@gmail.com" style={{ color: "#00e5ff" }}>
              klubx09@gmail.com
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <p>
        We collect information you provide directly, including registration data when you sign up
        for a free workshop or dashboard account, contact us via form or WhatsApp, or log in via
        Google authentication. This includes: name, email, parent-student link association, billing
        details, and any projects, code, or homework uploaded as part of the curriculum.
      </p>
    ),
  },
  {
    title: "3. How We Use Information",
    content: (
      <p>
        We use collected information to provision accounts, operate the interactive dashboard,
        grade projects, award completion certificates, send workshop links, and provide customer
        support. We do not sell, rent, or lease user data to third parties.
      </p>
    ),
  },
  {
    title: "4. Authentication & Security",
    content: (
      <p>
        We use Firebase Authentication (including Google Sign-In) to manage access. Your passwords
        are never stored in plain text. We utilize SSL encryption for all data transit and adhere to
        strict access controls on database records.
      </p>
    ),
  },
  {
    title: "5. Contact Us",
    content: (
      <p>
        For privacy questions, email{" "}
        <a href="mailto:klubx09@gmail.com" style={{ color: "#00e5ff" }}>
          klubx09@gmail.com
        </a>{" "}
        or WhatsApp{" "}
        <a href="https://wa.me/916360660450" style={{ color: "#00e5ff" }}>
          +91 63606 60450
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div
        className="glass-card neon-glow-border rounded-2xl p-8 md:p-12"
      >
        <h1
          className="font-heading font-bold text-3xl text-center mb-2"
          style={{ color: "#e2e8f0" }}
        >
          Privacy Policy
        </h1>
        <p className="text-center text-sm mb-10" style={{ color: "#8b9bb4" }}>
          Effective Date: July 7, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#b0c4de" }}>
          {sections.map((s, i) => (
            <div key={i}>
              <h2
                className="font-heading font-bold text-lg mb-3"
                style={{ color: "#00e5ff" }}
              >
                {s.title}
              </h2>
              <div style={{ color: "#b0c4de" }}>{s.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
