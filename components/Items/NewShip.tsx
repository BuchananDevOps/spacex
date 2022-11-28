import Image from "next/image"
import { FC } from "react"
import StatusActiveRetired from "../Status/StatusActiveRetired"

const NewShip: FC<SPACEX.ArKs.Ships> = ({ image, name, status, type, roles }) => {
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
        <div className="col-span-12 ring-1 ring-slate-700/50 contrast-125 sm:col-span-6 sm:rounded-tl-3xl sm:rounded-bl-3xl">
          <div className="flex justify-between">
            <div className="flex flex-col p-8">
              <StatusActiveRetired status={status} />
              <h1 className="text-2xl font-bold text-slate-200">{name}</h1>
              <ul className="flex flex-col">
                <li className="text-sm leading-6 text-slate-400">Type</li>
                <li className="text-2xl font-semibold leading-7 text-white">
                  {type}
                </li>
              </ul>
              <ul className="flex flex-col">
                <li className="text-sm leading-6 text-slate-400">Roles</li>
                {roles.map((role, index) => (
                <li className="text-2xl font-semibold leading-7 text-white">
                  {role}
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewShip
