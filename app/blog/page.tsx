import TopPosts from "@/app/_components/post/top-posts";
import Banner from "@/app/_components/ui/banner";
import BlogCardMd from "@/app/_components/ui/blog-card-md";

import Categories from "@/app/_components/ui/categories";
import SearchBar from "@/app/_components/ui/search-bar";

export default function page() {
	return (
		<main className="grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[1fr_7fr_3fr_1fr]">
			<section className="col-start-2 md:col-start-2 md:col-span-2 grid grid-cols-[1fr] grid-rows-[auto_auto] ">
				<Banner />
				{/* aside || main */}
				<section className="mt-8 grid grid-cols-[1fr] md:grid-cols-[3fr_7fr] md:gap-8">
					<aside>
						<section className="flex justify-between items-center gap-4 flex-wrap md:flex-col ">
							<SearchBar />
							<Categories />
						</section>

						<TopPosts />
					</aside>

					{/* main section */}
					<section className="mt-8 rounded-md md:bg-secondaryAlt md:mt-0 md:p-8">
						<section className="blogCardMdSection mb-8 md:space-y-4">
							<BlogCardMd />
							<BlogCardMd />
							<BlogCardMd />
							<BlogCardMd />
						</section>
						{/* pagination */}
						<section className="flex gap-4 bg-secondary w-max py-2 px-2 rounded-full">
							<button className="bg-background py-1 px-4 rounded-full text-primary hover:">
								Previous
							</button>
							<section>
								<p className="bg-background py-1 px-6 rounded-full text-text">
									1
								</p>
							</section>

							<button className="bg-background py-1 px-4 rounded-full text-primary">
								next
							</button>
						</section>
					</section>
				</section>
			</section>
		</main>
	);
}
