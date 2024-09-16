"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type ArticlesLayoutProps = {
  children: React.ReactNode;
}
export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
  const pathname = usePathname()

  return (
    <section className="bg-secondaryAlt min-h-[95%] p-4 space-y-4">
      <header>
        <Link href="/profile/articles" className={`${pathname === "/profile/articles" ? "bg-primary" : ""} px-4 py-2 rounded`}>Articles</Link>
        
        <Link href="/profile/articles/publish-blog" className={` ${pathname === "/profile/articles/publish-blog" ? "bg-primary" : ""}  px-4 py-2 rounded`}>My Pusblish Blogs</Link>
        
        <Link href="/profile/articles/my-drafts" className={`${pathname === "/profile/articles/my-drafts" ? "bg-primary" : ""} px-4 py-2 rounded`}>My Drafts</Link>
      </header>
      
      <section className="space-y-6 mt-8">
        {children}
				</section>
    </section>
  )
}
