import { z } from "zod";

export const buttonSchema = z
  .object({
    style: z
      .string()
      .trim()
      .toLowerCase()
      .max(30, "Style too long")
      .regex(/^[^<>]*$/, "Text contains forbidden characters")
      .optional(),
    color: z
      .string()
      .trim()
      .max(30, "Color too long")
      .regex(/^[^<>]*$/, "Text contains forbidden characters")
      .optional(),
    size: z
      .string()
      .trim()
      .max(30, "Size too long")
      .regex(/^[^<>]*$/, "Text contains forbidden characters")
      .optional(),
    text: z
      .string()
      .trim()
      .min(1, "Text cannot be empty")
      .max(100, "Text too long")
      .regex(/^[^<>]*$/, "Text contains forbidden characters"),
  })
  .superRefine((data, ctx) => {
    // If style is present, skip color/size requirement
    if (data.style) return;
    // If no style, check color and size
    if (!data.color && !data.size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "You must provide either a style OR a color and size",
        path: ["form"],
      });
    } else {
      if (!data.color) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please provide a color",
          path: ["color"],
        });
      }
      if (!data.size) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please provide a size",
          path: ["size"],
        });
      }
    }
  })
  .transform((data) => {
    // If style is present, ignore color/size completely
    if (data.style) {
      return {
        ...data,
        color: undefined,
        size: undefined,
      };
    }
    return data;
  });
