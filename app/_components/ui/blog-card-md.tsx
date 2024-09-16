import Image from "next/image";
import Link from "next/link";

type BlogCardMdProps = {
	variant?: boolean;
}
export default function BlogCardMd({ variant }:BlogCardMdProps) {
	return (
		<section className={`${variant ? "bg-background" : "bg-secondary"}  rounded overflow-hidden md:max-w-[initial] md:grid md:grid-cols-[1.5fr_2.5fr]`}>
			<section className=" h-[200px] md:h-full">
				<Image
					src="/img.jpg"
					width={500}
					height={200}
					alt="Picture of the tech savvy"
					className="w-full h-full object-cover object-center"
				/>
			</section>
			<section className="p-4">
				<section className="flex gap-3 items-center">
					<Image
						src="/img.jpg"
						width={500}
						height={200}
						alt="Picture of the tech savvy"
						className="w-8 h-8 object-cover object-center rounded-full"
					/>
					{/* author */}
					<section className="flex flex-col md:w-full">
						<h1 className="text-sm">Jane Doe</h1>
						<section className="flex gap-3 flex-wrap md:justify-between">
							<p className="text-sm opacity-70">Posted on 13/06</p>
							<p className="text-sm opacity-70">6 mins read</p>
						</section>
					</section>
				</section>
				<p className="text-primary my-2 font-semibold text-xl">Understanding React Component Lifecycle.</p>
				<p className="text-base max-w-[600px] text-pretty">
					Learn the basics of Flutter and how it empowers developers to create
					beautiful, natively compiled mobile applications.
				</p>
				<section className="flex flex-wrap items-center gap-4 mt-4 justify-between">
					<Link href="/blog/2" className="text-accent hover:text-primary hover:underline">Continue reading...</Link>
					<p className="text-sm opacity-75">123 comments</p>
				</section>
			</section>
		</section>
	);
}
