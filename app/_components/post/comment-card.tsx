"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CommentForm from './comment-form'

export default function CommentCard() {
  const [isFormOpen, setIsFormOpen] = useState(false) 

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen)
  }
  return (
    <section>
      <section className='grid grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto] bg-background p-4 rounded-md md:grid-cols-[3.2em_1.5fr_.5fr] md:grid-rows-[auto_auto] md:gap-4'>
				{/* profile */}
				<section className="flex gap-4 items-center flex-wrap col-span-full md:col-[2]">
					<Image
						src="/img.jpg"
						width={500}
						height={200}
						alt="Picture of the tech savvy"
						className="h-[3em] w-[3em] rounded-full object-cover object-right"
					/>
					{/* username */}
					<h1 className="font-semibold text-primary">Tommy <span>YOU</span></h1>
					<p className="opacity-75">1 month ago</p>
				</section>
				<p className="my-4 col-span-full md:col-[2/-1] md:my-0">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
					nihil quam, possimus perspiciatis placeat, nisi exercitationem
					voluptatibus ut assumenda velit tempore reprehenderit eum dolore eos
					quas laudantium mollitia excepturi repellendus.
				</p>
				{/* upvoting */}
				<section className="bg-secondaryAlt flex gap-4 items-center max-w-max py-2 px-4 rounded-md md:flex-col md:col-[1] md:row-[1/-1] self-start">
					<button>+</button>
					<span>12</span>
					<button>-</button>
        </section>
        {/* deleteBtn */}
				<section className='justify-self-end self-center md:col-[3] md:row-[1]'>
					{/* <section className='flex gap-4'>
						<button className='text-red-500 font-semibold'>Delete</button>
						<button className='text-accent font-semibold'>Edit</button>
					</section> */}
					<button className='text-primary font-semibold' onClick={handleToggleForm}>Reply</button>
				</section>
      </section>
      
      {/* reply form */}
      {isFormOpen && <CommentForm />}
    </section>
  )
}
