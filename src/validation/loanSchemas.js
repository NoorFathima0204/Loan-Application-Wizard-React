import { z } from "zod";

export const step1Schema = z.object({
  loanType: z.string().min(1, "Please select a loan type."),

  loanAmount: z
    .string()
    .min(1, "Loan amount is required.")
    .refine((value) => Number(value) >= 10000, {
      message: "Minimum loan amount is ₹10,000.",
    }),

  loanTenure: z.string().min(1, "Please select the loan tenure."),

  loanPurpose: z
    .string()
    .trim()
    .min(10, "Loan purpose must contain at least 10 characters."),
});