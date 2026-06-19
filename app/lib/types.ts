import { z } from "zod";

export const jobItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  qualifications: z.array(z.string()),
  badgeLetters: z.string(),
  company: z.string(),
  daysAgo: z.number(),
});

export const jobItemsSchema = z.array(jobItemSchema);

export type JobItem = z.infer<typeof jobItemSchema>;

export type PageDirection = "next" | "previous";
