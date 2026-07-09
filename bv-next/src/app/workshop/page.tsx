import { CurriculumCarousel } from "@/components/curriculum-carousel";
import { RegistrationForm } from "@/components/registration-form";

export const metadata = {
  title: "Free ESP8266 Workshop | BuildVerse",
  description:
    "Build your first IoT project using ESP8266 and enter the world of AI, Robotics, Drones and Automation. Strictly limited to 50 seats.",
};

export default function WorkshopPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Details & Carousel */}
        <div className="space-y-6">
          <div>
            <h1
              className="font-heading font-bold text-3xl md:text-4xl mb-3"
              style={{ color: "#e2e8f0" }}
            >
              Free ESP8266 Innovation Workshop
            </h1>
            <p className="text-lg" style={{ color: "#8b9bb4" }}>
              Build your first IoT project using ESP8266 and enter the world of
              AI, Robotics, Drones and Automation.
            </p>
          </div>

          {/* Workshop highlights */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "⏱️", label: "5 Days", sub: "Live sessions" },
              { icon: "👨‍🏫", label: "1:5 Ratio", sub: "Max 5 students" },
              { icon: "🔌", label: "ESP8266", sub: "Real hardware" },
              { icon: "🏆", label: "Certificate", sub: "On completion" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-4 flex items-center gap-3"
                style={{ border: "1px solid rgba(0,229,255,0.12)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div
                    className="font-heading font-bold text-sm"
                    style={{ color: "#e2e8f0" }}
                  >
                    {item.label}
                  </div>
                  <div className="text-xs" style={{ color: "#8b9bb4" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum carousel */}
          <div>
            <h2
              className="font-heading font-semibold text-lg mb-3"
              style={{ color: "#e2e8f0" }}
            >
              5-Day Curriculum
            </h2>
            <CurriculumCarousel />
          </div>
        </div>

        {/* Right: Registration form */}
        <div className="lg:sticky lg:top-20 self-start">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
