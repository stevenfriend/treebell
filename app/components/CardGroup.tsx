import { ReactNode } from "react"

export interface Props {
  children: ReactNode
}

export default function CardGroup ({ children }: Props) {

  return (
    <ul className='grid grid-cols-fluid gap-3'>{children}</ul>
  )
}