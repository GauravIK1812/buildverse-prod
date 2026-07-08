"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import { registrationSchema, type RegistrationFormValues } from "@/lib/schemas";
import { supabase } from "@/lib/supabase";
import { RegistrationSuccess } from "./registration-success";
import { cn } from "@/lib/utils";

const TOTAL_SEATS = 50;
const SEATS_FILLED = 35;

const INTEREST_OPTIONS = [
  { value: "ai", label: "🧠 AI" },
  { value: "ml", label: "📊 Machine Learning" },
  { value: "robotics", label: "🤖 Robotics" },
  { value: "drones", label: "🛸 Drones" },
  { value: "iot", label: "🌐 IoT" },
  { value: "embedded", label: "📟 Microcontrollers" },
  { value: "printing", label: "🖨️ 3D Printing" },
];

const GRADE_OPTIONS = [
  { value: "6", label: "Grade 6 (Age 10–11)" },
  { value: "7", label: "Grade 7 (Age 11–12)" },
  { value: "8", label: "Grade 8 (Age 12–13)" },
  { value: "9", label: "Grade 9 (Age 13–14)" },
  { value: "10", label: "Grade 10 (Age 14–15)" },
  { value: "11", label: "Grade 11 (Age 15–16)" },
  { value: "12", label: "Grade 12 (Age 16–18)" },
];

const EXP_OPTIONS = [
  { value: "none", label: "🟢 Beginner — Never coded or assembled hardware" },
  { value: "scratch", label: "🟡 Familiar with Scratch / block programming" },
  { value: "python-basics", label: "🟠 Know Python or C++ basics" },
  { value: "arduino-esp", label: "🔴 Built projects on Arduino / ESP32 before" },
];

interface FieldWrapperProps {
  label: string;
  icon: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, icon, required, error, children }: FieldWrapperProps) {
  return (
    <div className="space-y-1.5">
      <Label
        className="flex items-center gap-1.5 text-sm font-medium"
        style={{ color: "#b0c4de" }}
      >
        <span>{icon}</span>
        {label}
        {required && <span style={{ color: "#f87171" }}>*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    studentName: string;
    grade: string;
    schoolName: string;
    city: string;
    regId: string;
  } | null>(null);
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [seatsProgress, setSeatsProgress] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      prevExp: "none" as const,
      interests: ["iot"],
    },
  });

  const mobileValue = watch("mobileNumber");

  // Animate progress bar on mount
  useEffect(() => {
    const pct = Math.round((SEATS_FILLED / TOTAL_SEATS) * 100);
    const timer = setTimeout(() => setSeatsProgress(pct), 200);
    return () => clearTimeout(timer);
  }, []);

  // Mirror mobile → whatsapp when checkbox is on
  useEffect(() => {
    if (sameAsMobile) {
      setValue("whatsappNumber", mobileValue ?? "", { shouldValidate: true });
    }
  }, [mobileValue, sameAsMobile, setValue]);

  async function onSubmit(data: RegistrationFormValues) {
    const regId = `BV-ESP8266-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const { error } = await supabase.from("registrations").insert({
        student_name: data.studentName,
        parent_name: data.parentName,
        email: data.email,
        mobile_number: data.mobileNumber,
        whatsapp_number: data.whatsappNumber,
        grade: data.grade,
        school_name: data.schoolName,
        city: data.city,
        timestamp: new Date().toISOString(),
      });

      if (error) {
        console.error("Supabase error:", error);
      }
    } catch (err) {
      console.error("Registration save failed:", err);
    }

    setSubmittedData({
      studentName: data.studentName,
      grade: data.grade,
      schoolName: data.schoolName,
      city: data.city,
      regId,
    });
    setSubmitted(true);

    toast.success("Seat reserved! Welcome to BuildVerse 🚀", {
      description: `Confirmation ID: ${regId}`,
    });
  }

  function handleReset() {
    setSubmitted(false);
    setSubmittedData(null);
    setSameAsMobile(false);
    setSeatsProgress(0);
    setTimeout(
      () => setSeatsProgress(Math.round((SEATS_FILLED / TOTAL_SEATS) * 100)),
      200
    );
  }

  const seatsLeft = TOTAL_SEATS - SEATS_FILLED;

  if (submitted && submittedData) {
    return (
      <RegistrationSuccess
        studentName={submittedData.studentName}
        grade={submittedData.grade}
        schoolName={submittedData.schoolName}
        city={submittedData.city}
        regId={submittedData.regId}
        onReset={handleReset}
      />
    );
  }

  return (
    <div
      className="glass-card neon-glow-border rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div
        className="p-6 border-b"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.06), rgba(57,255,20,0.03))",
          borderColor: "rgba(0,229,255,0.15)",
        }}
      >
        {/* Accent line */}
        <div
          className="h-0.5 w-12 mb-4 rounded-full"
          style={{ background: "linear-gradient(90deg, #00e5ff, #39ff14)" }}
        />

        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3
              className="font-heading font-bold text-xl mb-1"
              style={{ color: "#e2e8f0" }}
            >
              Reserve Your Free Seat
            </h3>
            <p className="text-sm" style={{ color: "#8b9bb4" }}>
              Strictly capped at 50 — 1:5 mentor ratio guaranteed.
            </p>
          </div>
          <Badge
            className="shrink-0 text-sm font-bold px-3 py-1"
            style={{
              background: "rgba(57,255,20,0.15)",
              borderColor: "rgba(57,255,20,0.4)",
              color: "#39ff14",
            }}
          >
            FREE
          </Badge>
        </div>

        {/* Seats progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "#8b9bb4" }}>Workshop Capacity</span>
            <span className="font-semibold" style={{ color: "#00e5ff" }}>
              {Math.round((SEATS_FILLED / TOTAL_SEATS) * 100)}%
            </span>
          </div>
          <Progress
            value={seatsProgress}
            className="h-2"
            style={{
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "#8b9bb4" }}>
              {SEATS_FILLED} of {TOTAL_SEATS} seats filled
            </span>
            <span
              className="font-semibold"
              style={{ color: "#f59e0b" }}
            >
              ⚡ Only {seatsLeft} left!
            </span>
          </div>
        </div>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6" noValidate>

        {/* Personal Details */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#00e5ff" }}>
            Personal Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Student Name" icon="👤" required error={errors.studentName?.message}>
              <Input
                {...register("studentName")}
                placeholder="e.g., Aarav Sharma"
                className={cn("form-input-cyber", errors.studentName && "border-red-400/60")}
              />
            </FieldWrapper>

            <FieldWrapper label="Parent / Guardian Name" icon="👨‍👧" required error={errors.parentName?.message}>
              <Input
                {...register("parentName")}
                placeholder="e.g., Priya Sharma"
                className={cn("form-input-cyber", errors.parentName && "border-red-400/60")}
              />
            </FieldWrapper>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#00e5ff" }}>
            Contact Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Mobile Number" icon="📱" required error={errors.mobileNumber?.message}>
              <Input
                {...register("mobileNumber")}
                type="tel"
                placeholder="+91 98765 43210"
                className={cn("form-input-cyber", errors.mobileNumber && "border-red-400/60")}
              />
            </FieldWrapper>

            <FieldWrapper label="WhatsApp Number" icon="💬" required error={errors.whatsappNumber?.message}>
              <Input
                {...register("whatsappNumber")}
                type="tel"
                placeholder="+91 98765 43210"
                readOnly={sameAsMobile}
                className={cn(
                  "form-input-cyber",
                  errors.whatsappNumber && "border-red-400/60",
                  sameAsMobile && "opacity-60 cursor-not-allowed"
                )}
              />
              <label className="flex items-center gap-2 mt-1.5 cursor-pointer">
                <Checkbox
                  checked={sameAsMobile}
                  onCheckedChange={(checked) => {
                    setSameAsMobile(!!checked);
                    if (checked) {
                      setValue("whatsappNumber", mobileValue ?? "", {
                        shouldValidate: true,
                      });
                    }
                  }}
                  className="border-cyan-400/40 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <span className="text-xs" style={{ color: "#8b9bb4" }}>
                  Same as mobile
                </span>
              </label>
            </FieldWrapper>
          </div>

          <div className="mt-4">
            <FieldWrapper label="Email Address" icon="✉️" required error={errors.email?.message}>
              <Input
                {...register("email")}
                type="email"
                placeholder="parent@email.com"
                className={cn("form-input-cyber", errors.email && "border-red-400/60")}
              />
            </FieldWrapper>
          </div>
        </div>

        {/* Academic Profile */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#00e5ff" }}>
            Academic Profile
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Grade" icon="🎓" required error={errors.grade?.message}>
              <Controller
                name="grade"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={cn(
                        "form-input-cyber",
                        errors.grade && "border-red-400/60"
                      )}
                    >
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        background: "#0d0d1f",
                        border: "1px solid rgba(0,229,255,0.2)",
                      }}
                    >
                      {GRADE_OPTIONS.map((g) => (
                        <SelectItem key={g.value} value={g.value}>
                          {g.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </FieldWrapper>

            <FieldWrapper label="City" icon="📍" required error={errors.city?.message}>
              <Input
                {...register("city")}
                placeholder="e.g., Bengaluru"
                className={cn("form-input-cyber", errors.city && "border-red-400/60")}
              />
            </FieldWrapper>
          </div>

          <div className="mt-4">
            <FieldWrapper label="School Name" icon="🏫" required error={errors.schoolName?.message}>
              <Input
                {...register("schoolName")}
                placeholder="e.g., Delhi Public School"
                className={cn("form-input-cyber", errors.schoolName && "border-red-400/60")}
              />
            </FieldWrapper>
          </div>
        </div>

        {/* Preferences (optional) */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00e5ff" }}>
              Preferences
            </p>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#8b9bb4",
              }}
            >
              Optional
            </span>
          </div>

          <div className="space-y-4">
            <FieldWrapper label="Prior Coding / Electronics Experience" icon="⚡">
              <Controller
                name="prevExp"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="form-input-cyber">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        background: "#0d0d1f",
                        border: "1px solid rgba(0,229,255,0.2)",
                      }}
                    >
                      {EXP_OPTIONS.map((e) => (
                        <SelectItem key={e.value} value={e.value}>
                          {e.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </FieldWrapper>

            <div>
              <Label
                className="text-sm font-medium mb-3 block"
                style={{ color: "#b0c4de" }}
              >
                Technologies of Interest{" "}
                <span className="text-xs font-normal" style={{ color: "#8b9bb4" }}>
                  (select all that apply)
                </span>
              </Label>
              <Controller
                name="interests"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_OPTIONS.map((opt) => {
                      const checked = (field.value ?? []).includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            const current = field.value ?? [];
                          const next = checked
                              ? current.filter((v) => v !== opt.value)
                              : [...current, opt.value];
                            field.onChange(next);
                          }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150"
                          style={
                            checked
                              ? {
                                  background: "rgba(0,229,255,0.15)",
                                  borderColor: "rgba(0,229,255,0.5)",
                                  color: "#00e5ff",
                                }
                              : {
                                  background: "rgba(255,255,255,0.04)",
                                  borderColor: "rgba(255,255,255,0.12)",
                                  color: "#8b9bb4",
                                }
                          }
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 font-bold text-base btn-glow"
          style={{
            background: isSubmitting
              ? "rgba(0,229,255,0.3)"
              : "linear-gradient(135deg, #00e5ff, #00b8d4)",
            color: "#06060f",
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Reserving your seat…
            </>
          ) : (
            "🚀 Reserve My Free Seat"
          )}
        </Button>

        <p
          className="text-xs text-center flex items-center justify-center gap-1.5"
          style={{ color: "#5a6a7e" }}
        >
          <ShieldCheck size={12} />
          No payment required. Confirmed on first-come, first-served basis.
        </p>
      </form>
    </div>
  );
}
