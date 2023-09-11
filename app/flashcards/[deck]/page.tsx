import decks from '../../../data/decks.json'
import { getDeck } from '../../../lib/decks'

// Return a list of `params` to populate the [deck] dynamic segment
export async function generateStaticParams() {
  const groups = decks.groups.map(group => group.id)
  // @ts-ignore
  const deckList = groups.flatMap(group => decks[group])
  const deckIDs = deckList.map(deck => ({ deck: deck.id, }))
  return deckIDs
}

export default async function Deck({ params }: {params: { deck: string }} ) {
  const deck = await getDeck(params.deck);

  return (
    <>
      <h1>
        {deck.title}
      </h1>
      {deck.units &&
        <ul>
          {deck.units.map((unit: string) => (
            <li key={unit}>
              {unit}
            </li>
          ))}
        </ul>
      }
  </>
  )
}