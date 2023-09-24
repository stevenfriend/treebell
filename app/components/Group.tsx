"use client"

import { ReactNode, Suspense, useState } from "react"
import { BsChevronRight, BsChevronDown } from "react-icons/bs"
import Loading from "./Loading"
import CardGroup from "./CardGroup"

export interface Props {
  children: ReactNode
  group?: string
}

export default function Group({ children, group }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex items-center">
        { group && <h2 className="mr-3 py-6 text-3xl">{group}</h2> }
        <input id={group} type="checkbox" className="m-3 w-8 h-8"/>
        { group && <button onClick={() => setOpen(!open)}>
          { open ? <BsChevronDown className="m-3 w-8 h-8"/> : <BsChevronRight className="m-3 w-8 h-8" /> }
        </button> }
      </div>
      <Suspense fallback={<Loading />}>
        { (open || !group) && <CardGroup>{children}</CardGroup> }
      </Suspense>
    </>
  )
}