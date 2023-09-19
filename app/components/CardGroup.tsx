"use client"

import { ReactNode, useState } from "react"
import { BsChevronRight, BsChevronDown } from "react-icons/bs"

export interface Props {
  children: ReactNode
  group?: string
}

export default function CardGroup({ children, group }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex items-center">
        <h2 className="mr-3 py-6 text-3xl">{group}</h2>
        <input id={group} type="checkbox" className="m-3 w-8 h-8"/>
        <button onClick={() => setOpen(!open)}>
          {open ? <BsChevronDown className="m-3 w-8 h-8"/> : <BsChevronRight className="m-3 w-8 h-8" /> }
        </button>
      </div>
      {open && <ul className='grid grid-cols-fluid gap-3'>{children}</ul>}
    </>
  )
}