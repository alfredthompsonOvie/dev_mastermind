"use server";

import { blogSchema, signupSchema } from "@/app/_util/validation/form";
import { z } from "zod";
import Blog from "@/app/_models/blogModel"
import User from "@/app/_models/userModel"
import { revalidatePath } from "next/cache";

export const transformZodErrors = (error: z.ZodError) => {
  return error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));
};

export async function submitSignupForm(formData: FormData) {
  try {

    //validate the FormData

    const validatedFields = signupSchema.parse({
      fullName: formData.get("fullName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    // send validated data to database here
    await User.create(validatedFields);

    const { fullName, email, username } = validatedFields;

    revalidatePath("/");
    return {
      errors: null,
      data: {
        fullName,
        username,
        email,
      },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error)
      return {
        errors: transformZodErrors(error),
        data: null,
      };
    }

    return {
      errors: {
        message: "An unexpected error occurred. Could not create shelf.",
      },
      data: null,
    };
  }
}

export async function submitBlogForm(formData: FormData) {
  try {

    console.log("form Data", formData);

    //validate the FormData

    const validatedFields = blogSchema.parse({
      title: formData.get("title"),
      // categories: formData.get("categories"),
      // categories: formData.get("categories")?.toString().split(',').map(item => item.trim()),
      categories: formData.getAll("categories"),
    });

    const data = {...validatedFields, status: formData.get("status"), content: formData.get("content")}

    console.log("val=>", validatedFields)
    console.log("get status=>", formData.get("status"))
    console.log("get content=>", formData.get("content"))
    

    // send validated data to database here
    await Blog.create(data);

    // const { fullName, email, username } = validatedFields;

    revalidatePath("/");
    return {
      errors: null,
      data: data
      // data: {
      //   fullName,
      //   username,
      //   email,
      // },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {

      return {
        errors: transformZodErrors(error),
        data: null,
      };
    }

    return {
      errors: {
        message: "An unexpected error occurred. Could not create shelf.",
      },
      data: null,
    };
  }
}