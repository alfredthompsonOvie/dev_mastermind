// "use client";
import Image from "next/image";
import PostList from "./_components/post/PostList";
import SearchBar from "@/app/_components/ui/search-bar";
import Link from "next/link";
// import { useEffect, useState } from "react";
import BlogCard from "@/app/_components/ui/blog-card";
import BlogCardMini from "@/app/_components/ui/blog-card-mini";
import BlogCardMd from "@/app/_components/ui/blog-card-md";
import BlogCardXsm from "@/app/_components/ui/blog-card-xsm";
import { Dancing_Script, Pacifico } from "next/font/google";
import Heading from "@/app/_components/ui/heading";
import TopBlog from "./_components/topBlog/topBlog";
// import { getBlogs } from "./actions/blogs";

const SCREEN_SIZE = 850;
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

console.log(dancingScript);

export default async function Home() {
	const res = await fetch(
		" https://newsapi.org/v2/top-headlines?category=technology&apiKey=0a9a71515c554773b6524eaf08151f11"
	);

	const data = await res.json();

	// console.log(data)
	const [mainNews, ...moreNews] = data.articles.slice(0, 4);


	// const blogs = await getBlogs();

	// // console.log("blogs=>>>", blogs)
	
	// const topblogs = blogs.filter(blog => (blog.isPopular === true) || (blog.isMustRead === true));
	// console.log("topblogs=>>>", topblogs)
	// const featured = blogs.filter((b: any) => b.isFeatured === true)
	// console.log("featured=>>>", featured)


	return (
		<main className="grid grid-cols-1 md:grid-cols-[1fr_7fr_3fr_1fr]">
			<section className="overflow-hidden col-span-full flex flex-col">
				<header className="flex flex-col gap-8 items-center py-10 px-4">
					<Heading classes="heading">
						<span className={`the`}>THE</span>
						<span className="heading__center">
							<span>
								{" "}
								<span className="">Dev</span>
								<span className={`text-accent`}>Mastermind</span>{" "}
							</span>
						</span>
						<span className={`${pacifico.className} post`}>posts</span>
					</Heading>

					<SearchBar />
				</header>

				<section className="smd:grid smd:grid-cols-[.5fr_6fr_4fr_.5fr] smd:grid-rows-[150px_150px_150px]">
					{/* card--primary */}

					<Link
						href={mainNews.url}
						className="bg-violet-100 smd:col-start-2 smd:row-span-full grid grid-cols-1 grid-rows-1 h-full"
					>
						<section className="col-span-full row-span-full flex relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-overlay overflow-hidden">
							<Image
								//src="https://cdn.mos.cms.futurecdn.net/3WzZnC32QNxt9sVQTBBMx5-1200-80.jpg"
								
								src={`/img.jpg`}
								width={500}
								height={200}
								alt="Picture of the tech savvy"
								className="h-full w-full object-cover object-right"
							/>
						</section>
						<section className="relative col-span-full row-span-full p-4 self-center justify-self-center flex flex-col items-start gap-4 max-w-[40em]">
							<small className="bg-accent text-background py-1 px-2 rounded">
								Emerging Tech
							</small>
							<h1 className="text-2xl md:text-3xl font-semibold">
								{/* Breaking: AI Surpasses Human Intelligence */}
								{mainNews.title}
							</h1>
							<p>
								{/* New breakthroughs in artificial intelligence have surpassed
								human-level intelligence, opening new possibilities and
								challenges. */}
								{mainNews.description}
							</p>
						</section>
					</Link>
					{/* card--secondary */}

					<section className="hidden smd:col-start-3 smd:grid smd:grid-rows-[150px_150px_150px] h-full">
						{moreNews.map((article: any, idx: number)=> <Link key={idx}
							href={article.url}
							target="_blank"
							className="border-t first:border-t-0 grid grid-cols-[150px_1fr] gap-4 bg-secondary overflow-hidden"
						>
							<section className="col-[1] w-full h-full bg-red-500 overflow-hidden relative">
								<Image
									src={`/img.jpg`}
									fill
									alt="Picture of the tech savvy"
									className="object-cover object-right"
								/>
							</section>
							<section className="col-[2] flex flex-col gap-3 justify-center items-start">
								<small className="bg-accent text-background py-1 px-2 rounded">
									{/* Emerging Tech */}
									{article?.author}
								</small>
								<h1 className="text-l font-semibold">
									{/* Breaking: AI Surpasses Human Intelligence */}
									{article.title}
								</h1>
							</section>
						</Link>)}
						
					</section>
				</section>
			</section>
			{/* 2 popular post || Latest Blog || editors pick || must read */}
			

			<TopBlog />
			{/* 3 feature posts */}
			{/* =================================================== */}
			{/* =================================================== */}
			{/* =================================================== */}
			{/* =================================================== */}
			{/* =================================================== */}
			{/* =================================================== */}
			{/* =================================================== */}
			<section className="min-h-screen md:col-span-full grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[.5fr_7fr_4fr_.5fr] md:gap-6">
				<section className=" col-start-2 md:row-span-full">
					<header className="flex justify-between items-center mb-8">
						<h1 className="text-4xl font-semibold">Featured Posts</h1>
						<Link
							href="/blog"
							className="bg-primary py-2 px-4 rounded-sm text-background hover:text-text hover:bg-secondary"
						>
							View All
						</Link>
					</header>
					{/*  */}
					<section className="blogCardMdSection mb-8 md:space-y-4">
						<BlogCardMd />
						<BlogCardMd />
						<BlogCardMd />
						<BlogCardMd />
					</section>
				</section>

				<section className="col-start-2 md:col-start-3 md:row-span-full">
					{/* SUBCRIBE */}
					<section className="m-[4em_0_2em] flex justify-center">
						<section className="max-w-lg">
							{/* <!-- form/card wrapper --> */}
							<form className="wrapper bg-secondary rounded-lg shadow-lg">
								{/* card */}
								<section className="p-6">
									<section className="card-image">
										<svg
											className="w-10 h-10 text-accent fill-current"
											xmlns="http://www.w3.org/2000/svg"
											width="512"
											height="512.002"
											viewBox="0 0 512 512.002"
										>
											<g transform="translate(0 0.002)">
												<path
													d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z"
													opacity="0.4"
												/>
												<path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z" />
											</g>
										</svg>
									</section>

									<section className="card-text mt-4">
										<h1 className="text-xl font-bold leading-tight mb-2">
											Subcribe for updates
										</h1>
										<p className="text-base">
											Get the latest components right into your inbox!
										</p>
										<p className="text-base md:text-lg mt-3 ">
											Join 4k+ happy subscribers!
										</p>
									</section>

									<section className="flex items-center mt-6 md:flex-col md:gap-4">
										<input
											type="email"
											className="border-l border-t border-b border-accent rounded-l-md w-full text-base md:text-lg px-3 py-2 md:rounded-md"
											placeholder="Enter Your Email"
										/>
										<button className="bg-primary hover:bg-accent hover:border-primary text-text hover:text-background font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-accent md:w-full md:rounded-md">
											subscribe
										</button>
									</section>
								</section>
							</form>
						</section>
					</section>
					{/* EDITORS PICK */}
					<section>
						<h1 className="text-3xl font-semibold mb-6">Editors Pick</h1>
						<section className="overflow-hidden rounded-lg">
							<section className="grid grid-cols-[1fr] grid-rows-[250px] h-full">
								<section className="col-span-full row-span-full flex relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-overlay overflow-hidden">
									<Image
										src="/img.jpg"
										width={500}
										height={200}
										alt="Picture of the tech savvy"
										className="h-full w-full object-cover object-right"
									/>
								</section>

								<section className="relative col-span-full row-span-full p-4 self-center justify-self-center flex flex-col items-start gap-4 max-w-[40em]">
									<section className="flex gap-3 items-center">
										<Image
											src="/img.jpg"
											width={500}
											height={200}
											alt="Picture of the tech savvy"
											className="w-12 h-12 object-cover object-center rounded-full"
										/>
										{/* author */}
										<section className="flex flex-col md:w-full">
											<Link href="/user/" className="text-sm">
												Jane Doe
											</Link>
											<section className="flex gap-3 flex-wrap md:justify-between">
												<p className="text-sm opacity-70">Posted on 13/06</p>
												<p className="text-sm opacity-70">6 mins read</p>
											</section>
										</section>
									</section>
									<Link
										href="/news"
										className="text-2xl md:text-3xl font-semibold"
									>
										Breaking: AI Surpasses Human Intelligence
									</Link>
								</section>
							</section>
						</section>
					</section>
					{/* POPULAR POSTS */}
					<section className="mt-8">
						<h1 className="text-3xl font-semibold mb-6">Popular Post</h1>
						<section className="blogCardMdSection md:flex flex-col gap-8">
							<BlogCardXsm variant={true} />
							<BlogCardXsm variant={true} />
							<BlogCardXsm variant={true} />
							<BlogCardXsm variant={true} />
						</section>
					</section>
				</section>
			</section>
		</main>
	);
}
