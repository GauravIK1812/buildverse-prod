const TECHNOLOGIES = [
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    desc: "Build local neural networks, train image classifiers, and leverage LLM APIs.",
  },
  {
    icon: "📊",
    title: "Machine Learning",
    desc: "Train models using Python, analyze real-world datasets, and run regressions.",
  },
  {
    icon: "🤖",
    title: "Robotics",
    desc: "Assemble multi-joint arms, design mechanical chassis, and program autonomous rovers.",
  },
  {
    icon: "🛸",
    title: "Drones",
    desc: "Understand aerodynamics, configure flight controllers, and program telemetry path plotting.",
  },
  {
    icon: "🔌",
    title: "Electronics",
    desc: "Breadboard basic analog circuits, soldering custom layouts, and measuring with multimeters.",
  },
  {
    icon: "🌐",
    title: "IoT (Internet of Things)",
    desc: "Publish MQTT sensor streams, interface REST APIs, and command relays over remote web apps.",
  },
  {
    icon: "📟",
    title: "Embedded Systems",
    desc: "Write highly efficient firmware for microcontrollers (C/C++ and MicroPython).",
  },
  {
    icon: "💻",
    title: "Programming",
    desc: "Master Python, C++, HTML/JS, and develop solid foundations in logic and structures.",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    desc: "Implement OpenCV for object tracking, facial detection, and barcode reading.",
  },
  {
    icon: "🖨️",
    title: "3D Printing",
    desc: "Scribble CAD blueprints in TinkerCAD/Fusion360, configure slicers, and print structures.",
  },
  {
    icon: "💼",
    title: "Entrepreneurship",
    desc: "Pitching prototypes, calculating unit economics, and drafting MVP slide decks.",
  },
];

export function TechSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "#e2e8f0" }}
          >
            Cutting-Edge Curriculum
          </h2>
          <p className="text-base" style={{ color: "#8b9bb4" }}>
            Real skills. Hard projects. Hands-on hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.title}
              className="glass-card p-5 group hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid rgba(0,229,255,0.12)" }}
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <h3
                className="font-heading font-semibold text-sm mb-2"
                style={{ color: "#e2e8f0" }}
              >
                {tech.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8b9bb4" }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
