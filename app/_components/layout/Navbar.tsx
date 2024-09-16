"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from 'react'
import ThemeToggler from "../ui/theme-toggler";
import Hamburger from "../ui/hamburger";
import { SCREEN_SIZE } from "@/app/_lib/constants";

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	function handleToggleNotification() {
		setIsNotificationOpen(!isNotificationOpen);
	}

	useEffect(() => {
		function handleCheckScreenSize() {
			console.log("Check screen size");

			if (window.innerWidth > SCREEN_SIZE) {
				setIsOpen(false);
			}
		}

		window.addEventListener("resize", handleCheckScreenSize);

		return () => window.removeEventListener("resize", handleCheckScreenSize);
	}, []);

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		setIsOpen(false);
		// function handleRouteChange() {
		//   // setIsMenuOpen(false);
		// };

		// router.events.on('routeChangeStart', handleRouteChange);
		// return () => {
		//   router.events.off('routeChangeStart', handleRouteChange);
		// };
	}, [pathname, searchParams]);

	return (
		<Suspense>
		<nav className="bg-secondary text-text grid grid-cols-[1fr_10fr_1fr] z-50">
			<section className="col-start-2 py-4 flex justify-between items-center gap-6 md:justify-start md:bg-transparent relative">
				{/* Logo */}
				<section className="text-xl font-bold md:text-2xl">
					<Link href="/">DevMastermind</Link>
				</section>

				{/*  menu*/}
				<section
					className={`bg-secondary absolute top-[3.8rem] right-0 z-[1000] flex flex-col rounded-md max-w-[250px] w-full p-4 md:static md:flex ${
						isOpen ? "" : "hidden"
					} md:flex-row md:max-w-[initial] md:bg-transparent md:p-0`}
				>
					{/* Navigation Links */}
					<ul className={`flex flex-col md:flex-row`}>
						<li className="">
							<Link
								href="/"
								className={`hover:text-yellow-400 py-3 px-4 block ${
									pathname === "/" ? "text-yellow-400" : ""
								} `}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={`hover:text-yellow-400 py-3 px-4 block ${
									pathname === "/about" ? "text-yellow-400" : ""
								} `}
							>
								About us
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								className={`hover:text-yellow-400 py-3 px-4 block ${
									pathname === "/blog" ? "text-yellow-400" : ""
								} `}
							>
								Blog
							</Link>
						</li>
						{/* <li>
							<Link
								href="/news"
								className={`hover:text-yellow-400 py-3 px-4 block ${
									pathname === "/news" ? "text-yellow-400" : ""
								} `}
							>
								News
							</Link>
						</li> */}
						<li>
							<Link
								href="/contact"
								className={`hover:text-yellow-400 py-3 px-4 block ${
									pathname === "/contact" ? "text-yellow-400" : ""
								} `}
							>
								Contact us
							</Link>
						</li>
					</ul>
					{/*  */}
					<ul className="flex flex-col gap-4 bg-background p-4 rounded-md md:flex-row md:items-center md:p-0 md:ml-auto md:bg-transparent">
						{isLoggedIn ? (
							<>
								<li>
									<button
										className="relative hover:text-yellow-400"
										onClick={handleToggleNotification}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M15 17h5l-1.405-1.405C18.791 15.06 18 13.573 18 12V8a6 6 0 10-12 0v4c0 1.573-.791 3.06-2.595 3.595L3 17h5m7 0a3 3 0 11-6 0h6z"
											/>
										</svg>
										{/* Notification Badge */}
										<span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
											3
										</span>
									</button>
									{isNotificationOpen && (
										<section className="w-[20rem] bg-red-500 absolute top-[5rem] right-0 p-5">
											<p>
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Accusantium fugiat provident minus tempora ipsam
												repellendus magnam hic voluptatum laborum illum
												doloribus enim delectus, architecto quasi temporibus
												saepe excepturi libero harum!
											</p>
											<Link
												href="/profile/notification"
												className="block text-center bg-slate-400 p-2 mt-2"
											>
												view all
											</Link>
										</section>
									)}
								</li>
								<li>
									<Link href="/profile" className="hover:text-yellow-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5.121 17.804A7.996 7.996 0 0112 15a7.996 7.996 0 016.879 2.804M12 12a4 4 0 110-8 4 4 0 010 8z"
											/>
										</svg>
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/login" className="block hover:text-yellow-400">
										Sign In
									</Link>
								</li>
								<li>
									<Link
										href="/signup"
										className="block bg-accent text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400"
									>
										Create Account
									</Link>
								</li>
							</>
						)}
					</ul>
					{/* User Actions */}
				</section>

				<section className="flex items-center gap-4">
					{/* Mobile Menu Toggle */}
					<section className="md:hidden">
						{/*  <button className="text-yellow-500" onClick={handleToggleMenu}>
							{/* Hamburger Menu Icon 
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
								/>
							</svg>
						</button> */}
						<Hamburger isOpen={isOpen} onHandleToggleMenu={handleToggleMenu} />
					</section>
					{/* Theme switcher */}
					{/* <ThemeToggler /> */}
				</section>
			</section>
		</nav>

		</Suspense>
	);
}
