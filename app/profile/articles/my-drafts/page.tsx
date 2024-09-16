import React from "react";
import BlogCardDraft from "@/app/_components/ui/blog-card-draft";

export default function page() {
	return (
		<section className="bg-secondaryAlt min-h-[95%] p-4 space-y-4">
			<section className="space-y-6 ">
				<BlogCardDraft />
			</section>
		</section>
	);
}
