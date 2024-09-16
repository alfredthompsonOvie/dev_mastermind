import React from "react";

type HamburgerProps = {
  isOpen: boolean;
  onHandleToggleMenu: () => void;
}

export default function Hamburger({ isOpen, onHandleToggleMenu}: HamburgerProps) {
	return (
		<section className="flex items-center md:hidden">
			<button className="text-primary" onClick={onHandleToggleMenu}>
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
			</button>
		</section>
	);
}
