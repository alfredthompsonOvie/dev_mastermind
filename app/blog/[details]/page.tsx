import Comments from "@/app/_components/post/comments";
import BackButton from "@/app/_components/ui/back-button";
import Image from "next/image";

import React from "react";

export default function page() {
	return (
		<main className="grid grid-cols-[1fr_10fr_1fr]">
			<section className="col-start-2 mt-8">
				<BackButton />

				<section className=" mt-6 grid grid-cols-[1fr] grid-rows-[auto] items-start md:grid-cols-[7fr_3fr] md:gap-4">
					{/* main section */}
					<section className="p-4 bg-secondaryAlt rounded-md">
						{/* main article */}
						<section>
							<section className="h-[25em] rounded-md overflow-hidden">
								<Image
									src="/img.jpg"
									width={500}
									height={200}
									alt="Picture of the tech savvy"
									className="h-full w-full object-cover object-right"
								/>
							</section>
							<section className="mt-4">
								<h1 className="text-4xl text-primary font-semibold md:text-4xl">
									Title of the Blog Post
								</h1>
								<p className="text-sm font-semibold text-primary">
									by author name / 8 august 2018
								</p>
							</section>
							<section className="mt-4 space-y-4">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Delectus placeat quisquam deleniti voluptatum obcaecati, magni
									quasi repellat hic officiis quia recusandae dolore
									reprehenderit corporis veniam labore reiciendis iusto illo
									inventore.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Delectus placeat quisquam deleniti voluptatum obcaecati, magni
									quasi repellat hic officiis quia recusandae dolore
									reprehenderit corporis veniam labore reiciendis iusto illo
									inventore.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Delectus placeat quisquam deleniti voluptatum obcaecati, magni
									quasi repellat hic officiis quia recusandae dolore
									reprehenderit corporis veniam labore reiciendis iusto illo
									inventore.
								</p>
							</section>
							<section className="flex flex-wrap gap-4 mt-8">
								<h1>tags</h1>
								<ul className="flex flex-wrap gap-4 max-w-[400px] w-full">
									<li>
										<button className="bg-accent text-background py-1 px-4 rounded-sm">
											React.js
										</button>
									</li>
									<li>
										<button className="bg-accent text-background py-1 px-4 rounded-sm">
											JavaScript
										</button>
									</li>
									<li>
										<button className="bg-accent text-background py-1 px-4 rounded-sm">
											TypeScript
										</button>
									</li>
									<li>
										<button className="bg-accent text-background py-1 px-4 rounded-sm">
											HTML
										</button>
									</li>
								</ul>
							</section>
						</section>
						{/* comments */}
						<section className="mt-8">
							<Comments />
						</section>
					</section>
					{/* author profile */}
					{/* only display on desktop */}
					<section className="max-w-[250px] p-4 bg-secondaryAlt rounded-md hidden md:max-w-[initial] md:block">
						<section>
							<h1 className="capitalize text-primary text-xl">About me</h1>
							<section className="mt-4">
								<section className="bg-secondary rounded-md overflow-hidden">
									<section className="">
										<Image
											src="/img.jpg"
											width={500}
											height={200}
											alt="Picture of the tech savvy"
											className="h-full w-full object-cover object-right"
										/>
									</section>
									<h1 className="py-1 px-2">Hey, I&apos;m Tommy</h1>
								</section>
								{/* bio */}
								<p className="mt-4 text-pretty">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
									porro nihil nobis obcaecati consequatur mollitia laborum
									voluptas doloribus ipsa! Laboriosam voluptatibus.
								</p>
								{/* social links */}
								<section className="flex flex-wrap gap-4 mt-8">
									<h1>follow</h1>
									<ul className="flex flex-wrap gap-4 max-w-[400px] w-full">
										<li>
											<button className="bg-accent text-background py-1 px-4 rounded-sm">
												X
											</button>
										</li>
										<li>
											<button className="bg-accent text-background py-1 px-4 rounded-sm">
												Ins
											</button>
										</li>
										<li>
											<button className="bg-accent text-background py-1 px-4 rounded-sm">
												Face
											</button>
										</li>
										<li>
											<button className="bg-accent text-background py-1 px-4 rounded-sm">
												Git
											</button>
										</li>
									</ul>
								</section>
							</section>
						</section>
						{/* related posts */}
						<section className="mt-4">
							<h1>Related Posts</h1>
						</section>
					</section>
				</section>
			</section>
			{/* map */}

			{/* 
      //mobile
        main artile
          image
          title
          author / post date
          article
          tags
        comments
      //desktop
      main article | author profile
      main article | related posts
      */}
		</main>
	);
}
