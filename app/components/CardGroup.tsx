import { ReactNode } from "react"

export interface Props {
  children: ReactNode
}

export default async function CardGroup ({ children }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <ul className='grid grid-cols-fluid gap-3'>{children}</ul>
  )
}