import Link from 'next/link'
import decks from '../../data/decks.json'

export default async function Home() {
  const groups = decks.groups

  return (
    <main>
      <h1>Flashcards</h1>
      {groups.map(({ id , title }: { id: string, title: string }) => {
        // @ts-ignore
        const group = decks[`${id}`]
        return(
        <section key={id}>
          <h2>{title}</h2>
          <ul>
            {group.map(({ id, title }: { id: string, title: string }) => (
              <li key={id}><Link href={`/flashcards/${id}`}>{title}</Link></li>
            ))}
          </ul>
        </section>
      )})}
    </main>
  )
}