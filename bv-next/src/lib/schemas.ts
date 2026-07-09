import { z } from "zod";

const phoneRegex = /^[+]?[\d\s\-().]{7,15}$/;

export const registrationSchema = z.object({
  studentName: z.string().min(2, "Enter the student's full name"),
  parentName: z.string().min(2, "Enter the parent / guardian name"),
  mobileNumber: z.string().regex(phoneRegex, "Enter a valid mobile number"),
  whatsappNumber: z.string().regex(phoneRegex, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email address"),
  grade: z.enum(["6", "7", "8", "9", "10", "11", "12"] as const, {
    message: "Select the student's current grade",
  }),
  city: z.string().min(2, "Enter the city name"),
  schoolName: z.string().min(2, "Enter the school name"),
  prevExp: z
    .enum(["none", "scratch", "python-basics", "arduino-esp"] as const)
    .optional(),
  interests: z.array(z.string()).optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  role: z.enum(["parent", "principal", "student", "other"] as const, {
    message: "Please select your role",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
