import Image from "next/image"
import { FC } from "react"

const NewShip: FC<SPACEX.ArKs.Ships> = ({ image, name }) => {
  return (
    <div className="bg-[radial-gradient(164.75%_100%_at_50%_0%,#3341558a_0%,#05060aa8_48.73%)]">
      <div className="grid grid-cols-12">
        <Image
          alt={name}
          className="col-span-12 ring-1 ring-slate-700/50 contrast-125 sm:col-span-6 sm:rounded-tl-3xl sm:rounded-bl-3xl"
          height={563}
          quality={100}
          src={`${image ? image : "/spacex-twitter-card.jpg"}`}
          width={1000}
        />
        <div className="col-span-12" />
      </div>
    </div>
  )
}

export default NewShip
