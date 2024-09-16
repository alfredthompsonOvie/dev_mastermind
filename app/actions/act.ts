"use server"

import Blog from "@/app/_models/blogModel"
// import dbConnect from '@/app/_lib/db';


import { revalidatePath } from "next/cache";
import { z } from "zod";

// let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
//   ssl: "allow",
// });

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createUser(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z
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

type Schema = z.infer<typeof schema>;


  const parse = schema.safeParse({
    user: formData.get("user"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;
  console.log("actions user data", data);

  try {
    // await sql`
    //   INSERT INTO todos (text)
    //   VALUES (${data.todo})
    // `;
    await Blog.create(data)

    revalidatePath("/");
    return { message: `Added user ${data}` };
  } catch (e) {
    return { message: "Failed to create user" };
  }
}