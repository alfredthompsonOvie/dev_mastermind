import Link from "next/link";
import React from "react";

export default function BlogCardDraft() {
	return (
		<section className="flex flex-wrap items-center justify-between bg-background p-4 rounded">
			<section>
        <h1>Untitled</h1>
        <p className="opacity-55">lasted updated may 5</p>
			</section>
			<Link href="/editor">edit</Link>
		</section>
	);
}
