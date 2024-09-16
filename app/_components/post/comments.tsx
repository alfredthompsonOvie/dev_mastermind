import Image from "next/image";
import React from "react";
import CommentForm from "./comment-form";
import Comment from "./comment";

export default function Comments() {
	return (
		<section>
			{/* comments */}
      <section className="space-y-4">
        {/* comment */}
				<Comment />
			</section>

			{/* form */}
      <CommentForm />
		</section>
	);
}
