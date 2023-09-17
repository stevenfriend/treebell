import Link from 'next/link'
import Image from 'next/image'

export default function Item({ id, link, text, image }: { id: string, link: string, text: string, image: string}) {
  return (
    <li key={id} className='text-center'>
      <Link href={link}>
        <Image className='m-2 rounded-lg'
          src={image}
          width={500}
          height={500}
          alt={text}/>
        {text}
      </Link>
    </li>
  )
}
