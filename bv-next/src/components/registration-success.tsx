"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  studentName: string;
  grade: string;
  schoolName: string;
  city: string;
  regId: string;
  onReset: () => void;
}

export function RegistrationSuccess({
  studentName,
  grade,
  schoolName,
  city,
  regId,
  onReset,
}: Props) {
  return (
    <div className="glass-card neon-glow-border rounded-2xl p-8 text-center space-y-6">
      {/* Success icon */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto"
        style={{
          background: "rgba(57,255,20,0.1)",
          border: "2px solid rgba(57,255,20,0.4)",
          boxShadow: "0 0 24px rgba(57,255,20,0.2)",
        }}
      >
        ✔️
      </div>

      <div>
        <h2
          className="font-heading font-bold text-2xl mb-2"
          style={{ color: "#e2e8f0" }}
        >
          Seat Reserved Successfully!
        </h2>
        <p className="text-sm" style={{ color: "#8b9bb4" }}>
          We&apos;ve sent a confirmation email & SMS with setup instructions.
          Your digital workshop pass is below.
        </p>
      </div>

      {/* Digital ticket */}
      <div className="digital-ticket text-left">
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4 border-b"
          style={{ borderColor: "rgba(0,229,255,0.2)" }}
        >
          <div className="text-2xl">🎟️</div>
          <div>
            <div
              className="font-heading font-bold text-xs tracking-widest uppercase"
              style={{ color: "#00e5ff" }}
            >
              BUILDVERSE
            </div>
            <div
              className="text-xs uppercase tracking-wider"
              style={{ color: "#8b9bb4" }}
            >
              Official Workshop Pass
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4 grid grid-cols-2 gap-4">
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#8b9bb4" }}
            >
              Student
            </div>
            <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
              {studentName}
            </div>
          </div>
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#8b9bb4" }}
            >
              Grade
            </div>
            <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
              Grade {grade}
            </div>
          </div>
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#8b9bb4" }}
            >
              School
            </div>
            <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
              {schoolName}
            </div>
          </div>
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#8b9bb4" }}
            >
              City
            </div>
            <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
              {city}
            </div>
          </div>
        </div>

        {/* Confirmation ID */}
        <div
          className="flex items-center justify-between px-5 py-3 border-t"
          style={{
            borderColor: "rgba(0,229,255,0.2)",
            background: "rgba(0,229,255,0.04)",
          }}
        >
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: "#8b9bb4" }}
            >
              Confirmation ID
            </div>
            <div
              className="font-mono font-bold text-sm"
              style={{ color: "#00e5ff" }}
            >
              {regId}
            </div>
          </div>
          <div
            className="text-xs font-mono tracking-widest"
            style={{ color: "#8b9bb4" }}
          >
            |||| | | ||| |||| | ||
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
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
          💬 Join Workshop WhatsApp Group
        </a>
        <Button
          variant="outline"
          className="w-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(0,229,255,0.25)",
            color: "#8b9bb4",
          }}
          onClick={onReset}
        >
          Register Another Student
        </Button>
      </div>
    </div>
  );
}
