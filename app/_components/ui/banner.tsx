import Image from "next/image";
import React from "react";

export default function Banner() {
	return (
		<section className="mt-8 relative">
			<section className=" rounded-lg overflow-hidden relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay">
				<Image
					src="/img.jpg"
					width={500}
					height={200}
					alt="Picture of the tech savvy"
					className="h-[200px] w-full object-cover object-right"
				/>
      </section>
      <section className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <h1 className="text-4xl">Blog</h1>
      </section>
		</section>
	);
}
