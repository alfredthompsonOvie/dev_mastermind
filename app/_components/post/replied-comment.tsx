import React from "react";
import CommentCard from "./comment-card";

type RepliedCommentProps = {
  children: React.ReactNode;
}

export default function RepliedComment({children}: RepliedCommentProps) {
	return (
		<section className="mt-4 flex flex-col items-end relative before:content-[''] before:absolute before:top-0 before:left-[1%] before:h-full before:w-[1px] before:bg-secondary before:opacity-40">
			<section className="max-w-[95%] space-y-4">
				{children}
			</section>
		</section>
	);
}
