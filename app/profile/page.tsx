import BlogCardDraft from "@/app/_components/ui/blog-card-draft";
import BlogCardMd from "@/app/_components/ui/blog-card-md";
import BlogCardMini from "@/app/_components/ui/blog-card-mini";
import BlogCardXsm from "@/app/_components/ui/blog-card-xsm";
import Link from "next/link";

export default function page() {
	return (
		<section className="bg-secondaryAlt min-h-[95%] p-4 space-y-4">
			<section className="bg-secondary min-h-[200px] rounded-md w-full p-4">
				<h1 className="text-4xl">Hello Tommy</h1>
				<p className="my-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
					molestias animi minus beatae blanditiis quam suscipit dolorem!
					Deserunt nobis sed dolorem perferendis obcaecati cum, minus maiores
					perspiciatis odit numquam reiciendis!
				</p>

				<Link
					href="/editor"
					className="bg-primary py-2 rounded-md px-4 inline-block hover:bg-background"
				>
					Write a post
				</Link>
			</section>

			<section className="bg-secondaryAlt min-h-[150px] rounded-md p-4 flex flex-col gap-4 md:grid md:grid-cols-[1fr_1fr]">
				<section className="bg-secondary p-4 rounded-md">
					<header className="flex flex-wrap justify-between items-center">
						<h1 className="text-2xl">Top five(5) Blogs</h1>
						<Link
							href="/blogs"
							className="bg-primary py-2 rounded-md px-4 inline-block hover:bg-background"
						>
							View All
						</Link>
					</header>
					<section className="flex flex-col gap-6 mt-8">
						<BlogCardXsm />
						<BlogCardXsm />
						<BlogCardXsm />
						<BlogCardXsm />
					</section>
				</section>

				<section className="bg-secondary p-4 rounded-md">
					<header className="flex flex-wrap justify-between items-center">
						<h1 className="text-2xl">Drafts</h1>
						<Link
							href="/profile/bookmarks"
							className="bg-primary py-2 rounded-md px-4 inline-block hover:bg-background"
						>
							View All
						</Link>
					</header>
					<section className="space-y-6 mt-8">
						<BlogCardDraft />
						<BlogCardDraft />
						<BlogCardDraft />
						<BlogCardDraft />
					</section>
				</section>
			</section>

			<section className="bg-secondary p-4 rounded-md">
				<header className="flex flex-wrap justify-between items-center">
					<h1 className="text-2xl">Bookmarks</h1>
					<Link
						href="/profile/bookmarks"
						className="bg-primary py-2 rounded-md px-4 inline-block hover:bg-background"
					>
						View All
					</Link>
				</header>
				<section className="space-y-6 mt-8">
					<BlogCardMd variant={true} />
					<BlogCardMd variant={true} />
					<BlogCardMd variant={true} />
				</section>
			</section>
		</section>
	);
}
