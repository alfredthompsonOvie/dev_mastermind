
import React from "react";
import BlogCardXsm from "../ui/blog-card-xsm";

export default function TopPosts() {
	return (
		<section className="hidden md:flex md:flex-col md:gap-8 mt-8 bg-secondaryAlt p-4 rounded-md">
			<h1 className="text-3xl font-semibold text-accent">Top Posts</h1>
			<section className=" md:flex flex-col gap-8">
				<BlogCardXsm />
				<BlogCardXsm />
				<BlogCardXsm />
				<BlogCardXsm />
			</section>
		</section>
	);
}
