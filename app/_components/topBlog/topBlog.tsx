"use client"
import React, { useState } from "react";
import BlogCardMini from "../ui/blog-card-mini";
import BlogCard from "../ui/blog-card";
import Link from "next/link";
import Heading from "../ui/heading";

interface Blog {
  title: string;
	id: number,
    author: string,
    date: string,
    excerpt:  string,
    content: string,
    tags: [],
    category: string,
    isFeatured: boolean,
    isPopular: boolean,
    isMustRead: boolean,
    isLiked: boolean,
    isWishlisted: boolean,
    likesCount: number,
    status: string,
}

type TopBlogProps = {
	topblogs: Blog[];
}
export default function TopBlog() {
  // const [filteredBlogs, setFilteredBlogs] = useState(()=> topblogs || [])
	const [isActiveTab, setIsActiveTab] = useState("all")
	
	// const categories = topblogs.filter((item: any) => item.category);
	// console.log("top==>>",topblogs)
	// console.log("cat==>>",categories)

  function filterBlogsBy(category: string) {
    // const result: any = filteredBlogs.filter((blog: any) => blog.category === category)

    // setFilteredBlogs(result)
    setIsActiveTab(category)
  }

	return (
		<section className="my-[6em] col-span-full grid grid-cols-[1fr_10fr_1fr] gap-4 md:grid-cols-[.5fr_7fr_4fr_.5fr] md:gap-8">
			{/* add commentCount and bookmarkCount */}
			{/* <section className="min-h-screen bg-blue-500 md:col-span-full md:grid md:grid-cols-[1fr_7fr_3fr_1fr]"> */}
			{/* main section ================================= */}
			<section className="col-start-2 mb-[3em]">
				{/* tab section */}
				<header className="py-8">
					{/* blogs categories */}
					<Heading>Top Blogs</Heading>
					<ul className="flex gap-4 mt-8 flex-wrap">
						<li>
							<button className={`${isActiveTab === "all" ? "text-primary" : ""} hover:text-primary`} onClick={()=>filterBlogsBy("all")}>All</button>
						</li>
						<li>
							<button className={`${isActiveTab === "frontend" ? "text-primary" : ""} hover:text-primary`} onClick={()=>filterBlogsBy("frontend")}>F.E</button>
						</li>
						<li>
							<button className={`${isActiveTab === "backend" ? "text-primary" : ""} hover:text-primary`} onClick={()=>filterBlogsBy("backend")}>B.E</button>
						</li>
						<li className="mr-auto">
							<button className={`${isActiveTab === "DevOps" ? "text-primary" : ""} hover:text-primary`} onClick={()=>filterBlogsBy("Devops")}>DevOps</button>
						</li>
						<li>
							<Link
								href="/blog"
								className="bg-primary py-2 px-4 rounded-sm text-background hover:text-text hover:bg-secondary"
							>
								View All
							</Link>
						</li>
					</ul>
				</header>
				{/* card ======================================================================================================================================== */}
				<section className="cardSection">
					<BlogCard />
					<BlogCard />
					{/* <BlogCard />
          <BlogCard /> */}
				</section>
			</section>

			{/* side section ================================= */}
			{/* <p>section 2 aside</p> */}
			<section className=" bg-secondaryAlt rounded-2xl p-6 col-start-2  md:col-start-3">
				<header>
					<ul className="flex gap-4">
						<li>
							<button>Recent Post</button>
						</li>
						<li>
							{/* must read */}
							<button>Recommended</button>
						</li>
					</ul>
				</header>
				<section className="cardMiniSection">
					<BlogCardMini />
					<BlogCardMini />
					<BlogCardMini />
					<BlogCardMini />
				</section>
			</section>
		</section>
	);
}
