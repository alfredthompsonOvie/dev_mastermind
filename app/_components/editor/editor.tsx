"use client";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
// Require Editor CSS files.
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/plugins/code_view.min.css";
// import "froala-editor//css/themes/royal.min.css";
// import "froala-editor//css/themes/dark.min.css";



const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), {
  ssr: false, // Disable server-side rendering
});
const FroalaEditorView = dynamic(() => import('react-froala-wysiwyg/FroalaEditorView'), {
  ssr: false, // Disable server-side rendering
});
// import FroalaEditor from "react-froala-wysiwyg";
// import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
// import "froala-editor/js/plugins/image.min.js";
// import "froala-editor/js/plugins/markdown.min.js";
// import "froala-editor/js/plugins/save.min.js";
// import "froala-editor/js/plugins/colors.min.js";
// import "froala-editor/js/plugins/code_view.min.js";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, BlogSchema } from "@/app/_util/validation/form";
import { submitBlogForm } from "@/app/actions/form";
import { useRouter } from "next/navigation";


export default function Editor() {
const router = useRouter();

	const [content, setContent] = useState(
		() => localStorage.getItem("contentHTML") || ""
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<BlogSchema>({
		resolver: zodResolver(blogSchema),
	});

	const onSubmitForm: SubmitHandler<BlogSchema> = async (data) => {
		if (content === "") {
			return;
		}

		const blog = {
			title: data.title,
			categories: data.categories,
			content,
			status: "published",
		};
		// call the server action
		const formData = new FormData();
		formData.append("title", blog.title);
		blog.categories.forEach(category => {
			formData.append("categories", category); // Append each category
		});
		formData.append("content", blog.content);
		formData.append("status", blog.status);

		const { data: success, errors } = await submitBlogForm(formData);


		if (errors) {
			// handle errors (e.g., display an alert notification or add error messages to the form)
			console.log("An Error occurred", errors);
		}

		if (success) {
			// handle success (e.g., display a success notification)
			console.log("SUCCESS", success);
			router.push("/profile");
		}
	};

	// const onSubmit = async (data: BlogSchema) => {

	// 	if (content !== "") {
	// 		// console.log(data);
	// 		// add categories to the form like a checkbox field
	// 		const blog = {
	// 			title: data.title,
	// 			categories: data.categories,
	// 			content,
	// 			status: "published"
	// 		};
	// 		// console.log(blog);

	// 		const res = await fetch('/api/blogs', {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/x-www-form-urlencoded"
	// 				// "Content-Type": "application/json"
	// 			},

	// 			body: JSON.stringify(blog),
	// 		})

	// 		const resData = await res.json();
	// 		console.log("back ",resData);

	// 	}
	// };

	return (
		<section>
			<section>
				<section className="my-8 flex flex-wrap gap-4 justify-end">
					<button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-700">
						Save As Draft
					</button>
					<button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-700">
						Preview
					</button>
				</section>

				<form
					className="bg-secondaryAlt p-2 rounded space-y-4"
					onSubmit={handleSubmit(onSubmitForm)}
				>
					<section className="overflow-hidden rounded">
						<label htmlFor="title"></label>
						<input
							type="text"
							className={`w-full p-4 text-4xl bg-secondary ${
								errors?.title?.message ? "border-red-500 border-2" : ""
							}`}
							placeholder="Title"
							aria-invalid={errors.title ? "true" : "false"}
							{...register("title", { required: true })}
						/>
						{errors?.title?.message && (
							<p role="alert" className="text-red-500 italic text-xs">
								{errors?.title?.message}
							</p>
						)}
					</section>
					{/* categories */}
					<section>
						<h1>Select Categories</h1>
						<section>
							<section>
								<input
									type="checkbox"
									id="frontend"
									value="frontend"
									{...register("categories")}
								/>
								<label htmlFor="frontend">frontend</label>
							</section>
							<section>
								<input
									type="checkbox"
									id="backend"
									value="backend"
									{...register("categories")}
								/>
								<label htmlFor="backend">backend</label>
							</section>
							<section>
								<input
									type="checkbox"
									id="python"
									value="python"
									{...register("categories")}
								/>
								<label htmlFor="python">python</label>
							</section>
						</section>

						{errors?.categories?.message && (
							<p role="alert" className="text-red-500 italic text-xs">
								{errors?.categories?.message}
							</p>
						)}
					</section>

					<FroalaEditor
						model={content}
						onModelChange={(e: string) => setContent(e)}
						tag="textarea"
						config={{
							theme: "dark",
							colorsBackground: ["#61BD6D", "#1ABC9C", "#54ACD2"],
							saveInterval: 1000,
							events: {
								"save.before": function (html: string) {
									localStorage.setItem("contentHTML", html);
								},
							},
						}}
					/>

					<section className="space-x-4">
						<button className="bg-green-500 py-2 px-4 rounded hover:bg-green-700">
							Publish
						</button>
					</section>
				</form>
			</section>
			<FroalaEditorView model={content} />
		</section>
	);
}
