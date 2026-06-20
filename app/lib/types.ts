import { z } from "zod";

export const jobItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  qualifications: z.array(z.string()),
  badgeLetters: z.string(),
  company: z.string(),
  daysAgo: z.number(),
  duration: z.string(),
  salary: z.string(),
  location: z.string(),
  reviews: z.array(z.string()),
});

export const jobItemsSchema = z.array(jobItemSchema);

export type JobItem = z.infer<typeof jobItemSchema>;

export type PageDirection = "next" | "previous";
