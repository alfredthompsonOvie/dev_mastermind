import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react'

import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | DevMastermind",
		default: "Welcome | DevMastermind",
	},
	description: "tommy's blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-background text-text`}>
				<Suspense>
				<Navbar isLoggedIn={false} />
				<>{children}</>
				<Footer />
			</Suspense>
			</body>
		</html>
	);
}
