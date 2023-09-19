import Link from 'next/link'
import Image from 'next/image'

export default function Item({ id, link, text, image }: { id: string, link: string, text: string, image: string}) {
  return (
    <li key={id} className='text-center'>
      <Link href={link}>
        <div className='box-border m-2'>
          <Image className='rounded-lg'
            src={image}
            width={600}
            height={600}
            alt={text}/>
        </div>
        {text}
      </Link>
    </li>
  )
}
