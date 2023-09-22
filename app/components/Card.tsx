import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Card({ id, text, image }: { id: string, text: string, image: string}) {
  interface Props {
    image?: ReactNode,
    info?: ReactNode,
    action?: ReactNode
  }
  
  return (
    <li key={id} className='text-center'>
      <Image className='rounded-lg'
        src={image}
        width={600}
        height={600}
        alt={text}/>
      <span className='text-xl'>{text}</span>
    </li>
  )
}