import BlogCardMd from "@/app/_components/ui/blog-card-md";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<section className="bg-secondaryAlt min-h-[95%] p-4 space-y-4">
			<section className="space-y-6 ">
				<BlogCardMd variant={true} />
				<BlogCardMd variant={true} />
				<BlogCardMd variant={true} />
			</section>
		</section>
	);
}
