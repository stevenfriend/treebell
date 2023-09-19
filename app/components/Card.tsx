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
      <div className='box-border m-2'>
        <Image className='rounded-lg'
          src={image}
          width={600}
          height={600}
          alt={text}/>
      </div>
      <span className='text-xl'>{text}</span>
    </li>
  )
}