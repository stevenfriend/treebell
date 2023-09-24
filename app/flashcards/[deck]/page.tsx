import Group from '@/app/components/Group'
import decks from '../../../data/decks.json'
import { getDeck } from '../../../lib/decks'
import Card from '@/app/components/Card'
import SideBar from '@/app/components/SideBar'

// Return a list of `params` to populate the [deck] dynamic segment
export async function generateStaticParams() {
  const hat = decks.groups.map(group => group.id)
  // @ts-ignore
  const deckList = hat.flatMap(group => decks[group])
  const deckIDs = deckList.map(deck => ({ deck: deck.id }))
  return deckIDs
}

export default async function Deck({ params }: {params: { deck: string }} ) {
  const deck = await getDeck(params.deck)

  return (
    <>
      <SideBar />
      <main className="flex flex-col rounded shadow mx-auto mb-6 p-6 w-11/12 sm:w-3/4 bg-white">
        <h1 className="text-center text-4xl">
          {deck.title}
        </h1>
        {deck.groups ? deck.groups.map((group: string, index: number) => {
          // @ts-ignore
          const cardGroup = deck.cards.filter((card) => parseInt(card.group) == index)
          // @ts-ignore
          const cards = cardGroup.map(card => 
            <Card id={card.id} text={card.text} image={`${process.env.basePath}/${params.deck}/${card.image}`} />
          )
          return (<Group group={group}>{cards}</Group>)
        }) : 
        <Group>
          {// @ts-ignore
          deck.cards.map(card => 
            <Card id={card.id} text={card.text} image={`${process.env.basePath}/${params.deck}/${card.image}`} />
          )}
        </Group>
        }
      </main> 
    </>
  )
}