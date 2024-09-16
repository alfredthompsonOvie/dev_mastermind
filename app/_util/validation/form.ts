import { z } from "zod";

export const signupSchema = z
.object({
  fullName: z
    .string()
    .min(2, { message: "Must be at least 2 characters long" })
    .regex(/^[a-zA-Z ]+$/, {
      message: "The username must contain only letters",
    }),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        "The username must contain only letters, numbers and underscore (_)",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must not be lesser than 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password do not match" }),
})
.superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ["confirmPassword"],
    });
  }
});

export type SignupSchema = z.infer<typeof signupSchema>;

// ! BLOG===============================================
// ! ///////////////////////////////////////////////////



export const blogSchema = z.object({
	title: z.string().min(2, { message: "Must be at least 2 characters long" }),
	categories: z.string().array().nonempty({ message: "Select at least a category" }),
});

z.setErrorMap((issue, ctx) => {
  if (issue.code === "invalid_type" && issue.expected === "array")
    return { message: "Select at least one category" };
  return { message: ctx.defaultError };
});

export type BlogSchema = z.infer<typeof blogSchema>; 














// ! REFERENCE ===================================
// // Define the file size limit and accepted file types as constants
// const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];


// export const formSchema = z.object({
//   name: z
//     .string({ message: "Name is required" })
//     .min(3, "Name should be at least 3 characters"),
//   description: z
//     .string()
//     .min(10, "Description should be at least 10 characters long")
//     .optional()
//     .or(z.literal("")),
//   private: z.boolean().optional(),
//   image: z
//     .instanceof(File)
//     .refine(
//       (file) => file.size <= MAX_FILE_SIZE,
//       `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`
//     )
//     .refine(
//       (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
//       `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(
//         ", "
//       )}.`
//     )
//     .optional()
//     .nullable(),
// });


// export type FormSchema = z.infer<typeof formSchema>;