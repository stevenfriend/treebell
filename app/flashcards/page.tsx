import Link from 'next/link'
import Item from '../components/Item'
import Image from 'next/image'
import decks from '../../data/decks.json'

export default async function Flashcards() {
  const groups = decks.groups

  return (
    <main className="flex flex-col rounded shadow m-auto p-6 w-11/12 sm:w-3/4 bg-white">
      <h1 className="text-center text-4xl">Flashcards</h1>
      {groups.map(({ id , title }: { id: string, title: string }) => {
        // @ts-ignore
        const group = decks[id]
        return(
        <div key={id}>
          <h2 className="py-6 text-3xl">{title}</h2>
          <ul className='grid grid-cols-fluid gap-3'>
            {group.map(({ id, title, icon }: { id: string, title: string, icon: string }) => (
              <Item id={id} link={`/flashcards/${id}`} text={title} image={`${process.env.basePath}/${icon}`} />
            ))}
          </ul>
        </div>
      )})}
    </main>
  )
}