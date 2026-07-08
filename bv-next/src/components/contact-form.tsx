"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    toast.success(`Thank you, ${data.name}!`, {
      description:
        "Your support ticket has been registered. Our STEM coordinator will ping you within 2 hours.",
    });
    reset();
  }

  return (
    <div
      className="glass-card neon-glow-border rounded-2xl p-8 space-y-6"
    >
      <div>
        <h2
          className="font-heading font-bold text-2xl mb-2"
          style={{ color: "#e2e8f0" }}
        >
          Send a Message
        </h2>
        <p className="text-sm" style={{ color: "#8b9bb4" }}>
          Have questions about monthly billing plans, hardware shipments, or
          school integrations? Get in touch with support.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="space-y-1.5">
          <Label style={{ color: "#b0c4de" }}>
            Full Name <span style={{ color: "#f87171" }}>*</span>
          </Label>
          <Input
            {...register("name")}
            placeholder="e.g., Rajesh Sen"
            className={cn("form-input-cyber", errors.name && "border-red-400/60")}
          />
          {errors.name && (
            <p className="text-xs" style={{ color: "#f87171" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label style={{ color: "#b0c4de" }}>
            Email Address <span style={{ color: "#f87171" }}>*</span>
          </Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="e.g., rajesh@domain.com"
            className={cn("form-input-cyber", errors.email && "border-red-400/60")}
          />
          {errors.email && (
            <p className="text-xs" style={{ color: "#f87171" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label style={{ color: "#b0c4de" }}>
            I am a <span style={{ color: "#f87171" }}>*</span>
          </Label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className={cn(
                    "form-input-cyber",
                    errors.role && "border-red-400/60"
                  )}
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent
                  style={{
                    background: "#0d0d1f",
                    border: "1px solid rgba(0,229,255,0.2)",
                  }}
                >
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="principal">School Principal / Educator</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.role && (
            <p className="text-xs" style={{ color: "#f87171" }}>
              {errors.role.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label style={{ color: "#b0c4de" }}>
            Message <span style={{ color: "#f87171" }}>*</span>
          </Label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="How can we help your child or school succeed?"
            className={cn(
              "form-input-cyber w-full rounded-lg p-3 text-sm resize-none",
              errors.message && "border-red-400/60"
            )}
          />
          {errors.message && (
            <p className="text-xs" style={{ color: "#f87171" }}>
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 font-bold btn-glow"
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
              Sending…
            </>
          ) : (
            "Send Support Request"
          )}
        </Button>
      </form>
    </div>
  );
}
