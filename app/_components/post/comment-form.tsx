import Image from "next/image";
import React from "react";

export default function CommentForm() {
	return (
		<section className="mt-4 flex gap-4 items-start flex-wrap bg-background p-4 rounded-md">
			<Image
				src="/img.jpg"
				width={500}
				height={200}
				alt="Picture of the tech savvy"
				className="h-[3em] w-[3em] rounded-full object-cover object-right"
			/>

      <form className="flex-grow flex items-start gap-4">
        <section className="w-full">
          <label htmlFor="comment"></label>
          <textarea name="comment" id="comment" rows={5} className="w-full rounded-md bg-secondary"></textarea>
        </section>
        <button className="bg-accent text-background py-1 px-4 rounded-sm">Send</button>
      </form>
		</section>
	);
}
