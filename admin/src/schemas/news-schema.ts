import { z } from "zod";

export const NewsSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  type: z.enum(["main", "sports"], {
    required_error: "Please select a news type",
  }),
  imageUrl: z.string().url().optional().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type News = z.infer<typeof NewsSchema>