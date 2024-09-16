import Image from "next/image";
import React from "react";
import CommentForm from "./comment-form";
import Comments from "./comments";
import CommentCard from "./comment-card";
import RepliedComment from "./replied-comment";

export default function Comment() {
	return (
		<section className="">
			<CommentCard />
			{/* replies || comments */}
			<RepliedComment>
				<CommentCard />
				<RepliedComment>
					<CommentCard />
					<RepliedComment>
						<CommentCard />
					</RepliedComment>
				</RepliedComment>
			</RepliedComment>
		</section>
	);
}
