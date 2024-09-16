import Image from "next/image";
import Link from "next/link";

export default function BlogCardMini() {
  return (
    // h-[6.5em] flex gap-4 items-center  
    <Link href="/" className="bg-secondary flex flex-col rounded-md overflow-hidden cardMini:flex-row">
      <section className="h-[10rem] relative cardMini:w-[10em] cardMini:h-full">
        <Image
					src="/img.jpg"
					fill
					alt="Picture of the tech savvy"
					className="object-cover object-center"
				/>
      </section>
      <section className="p-4">
        <h1 className="opacity-[.6]">Jane Doe</h1>
        <p className="text-primary font-semibold">Understanding React Component Lifecycle.</p>
        <p className="text-sm mt-4">1234 Reads</p>
      </section>
    </Link>
  )
}
