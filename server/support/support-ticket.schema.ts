import { z } from "zod";

const optionalText = z.string().trim().max(200).optional().or(z.literal(""));

export const supportTicketSchema = z.object({
  alternatePhone: optionalText,
  consent: z.literal(true),
  dealerShop: optionalText,
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .transform((value) => value.toLowerCase()),
  message: z.string().trim().min(10).max(5000),
  mileage: optionalText,
  name: z.string().trim().min(2).max(120),
  ownerType: optionalText,
  phone: z.string().trim().min(7).max(30),
  preferredBranch: z.string().trim().max(100),
  registrationNumber: optionalText,
  source: z.literal("webflow-contact-page"),
  submissionId: z.string().trim().min(8).max(100),
  title: optionalText,
  topic: z.string().trim().min(2).max(100),
  vehicleModel: optionalText,
  yearOfPurchase: optionalText
});

export type SupportTicketInput = z.infer<typeof supportTicketSchema>;
