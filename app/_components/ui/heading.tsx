import React from 'react'
import { Playfair_Display } from 'next/font/google';

type HeadingProps = {
  children: React.ReactNode;
  classes?: string;
}; 

const playfairDisplay = Playfair_Display({
  subsets: ['latin']
})

export default function Heading({ classes, children }: HeadingProps) {
  return (
    <h1 className={`${playfairDisplay.className} ${classes} text-4xl font-bold `}>{children }</h1>
  )
}
