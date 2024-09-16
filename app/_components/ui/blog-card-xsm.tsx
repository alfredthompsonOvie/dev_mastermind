import Link from "next/link";

type BlogCardXsmProps = {
	variant?: boolean;
}

export default function BlogCardXsm({variant}:BlogCardXsmProps) {
	return (
		<Link href="/" className="bg-background p-4 rounded hover:scale-[1.01] transition duration-300">
			{variant && <p className="text-5xl opacity-60">01</p>}
			<section>
				<h1 className="text-xl text-accent font-semibold ">
					Understanding React Component Lifecycle.
				</h1>
				<p className="flex gap-1 opacity-60">
					<span>Jane Doe</span>
					in
					<span>Frontend Development</span>
				</p>
				{variant && <p className="flex gap-1 opacity-60">
					<span>Mar 20</span>-<span>5 min read</span>
				</p>}
			</section>
		</Link>
	);
}
