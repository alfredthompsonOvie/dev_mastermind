import DashboardNavbar from "@/app/_components/ui/dashboard-navbar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			className="grid 
		grid-cols-[1fr_10fr_1fr]
		grid-rows-[auto]
		relative
		md:grid-cols-[1fr_2fr_8fr_1fr]
		
		"
		>
			{/* side bar */}
			<DashboardNavbar />

			{/* two */}
			<section className="col-[2] md:col-[3] pt-4 md:p-8">{children}</section>
		</main>
	);
}
