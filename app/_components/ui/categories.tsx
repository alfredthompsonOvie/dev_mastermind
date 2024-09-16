"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import { SCREEN_SIZE } from "@/app/_lib/constants";

// const SCREEN_SIZE = 1100;

export default function Categories() {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggleMenu() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function handleCheckScreenSize() {
			console.log("Check screen size");

			if (window.innerWidth > SCREEN_SIZE) {
				setIsOpen(false);
			}
		}

		window.addEventListener("resize", handleCheckScreenSize);
	}, []);
	{
		/* <section
					className={`bg-secondary absolute top-[3.8rem] right-0 z-[1000] flex flex-col rounded-md max-w-[250px] w-full p-4 md:static md:flex ${
            isOpen ? "" : "hidden"
					} md:flex-row md:max-w-[initial] md:bg-transparent md:p-0`}
      > */
	}

	return (
		<section className="relative w-[250px] flex items-center justify-center xsmd:justify-end gap-4 md:w-full">
			<section className={` flex gap-4 items-center xsmd:justify-end`}>
				<p className="md:hidden">Filter By Category</p>
				<Hamburger isOpen={isOpen} onHandleToggleMenu={handleToggleMenu} />
			</section>

			<section
				className={`bg-primary absolute top-[3.8rem] right-0 z-[1000] flex flex-col rounded-md max-w-[250px] w-full p-4 md:static  ${
					isOpen ? "" : "hidden"
				} md:flex md:max-w-[initial]  w-full`}
			>
				<h1 className="text-xl">Categories</h1>

				<ul className="mt-4 space-y-4">
					<li>
						<Link
							href="#"
							className="relative overflow-hidden rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay grid grid-cols-[1fr] grid-rows-[40px] items-center justify-center"
						>
							<span className="col-start-1 row-start-1 text-center z-10">
								Frontend
							</span>
							<Image
								src="/img.jpg"
								width={500}
								height={200}
								alt="Picture of the tech savvy"
								className="h-full w-full object-cover object-right col-start-1 row-start-1"
							/>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="relative overflow-hidden rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay grid grid-cols-[1fr] grid-rows-[40px] items-center justify-center"
						>
							<span className="col-start-1 row-start-1 text-center z-10">
								Fullstack
							</span>
							<Image
								src="/img.jpg"
								width={500}
								height={200}
								alt="Picture of the tech savvy"
								className="h-full w-full object-cover object-right col-start-1 row-start-1"
							/>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="relative overflow-hidden rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay grid grid-cols-[1fr] grid-rows-[40px] items-center justify-center"
						>
							<span className="col-start-1 row-start-1 text-center z-10">
								Backend
							</span>
							<Image
								src="/img.jpg"
								width={500}
								height={200}
								alt="Picture of the tech savvy"
								className="h-full w-full object-cover object-right col-start-1 row-start-1"
							/>
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="relative overflow-hidden rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay grid grid-cols-[1fr] grid-rows-[40px] items-center justify-center"
						>
							<span className="col-start-1 row-start-1 text-center z-10">
								DevOps
							</span>
							<Image
								src="/img.jpg"
								width={500}
								height={200}
								alt="Picture of the tech savvy"
								className="h-full w-full object-cover object-right col-start-1 row-start-1"
							/>
						</Link>
					</li>
				</ul>
			</section>
		</section>
	);
}
