import dynamic from "next/dynamic"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

const PlusButton = dynamic(() => import("@/components/Button/PlusButton"))

const StatusBoolean = dynamic(() => import("@/components/Status/StatusBoolean"))

const CardShip: FC<SPACEX.ArKs.Ships> = ({
  type,
  class: shipClass,
  year_built,
  image,
  name,
  active,
  id,
}) => {
  const router = useRouter()

  const handlePower = () => {
    router.push(`/ships/${id}`)
  }

  return (
    <div className="relative z-10 -mx-4 bg-[radial-gradient(164.75%_100%_at_50%_0%,#3341558a_0%,#05060aa8_48.73%)] py-10 px-5 shadow-lg sm:mx-0 sm:rounded-3xl sm:px-10">
      <div className="flex">
        <Image
          alt={name}
          className=" w-1/2 ring-1 ring-slate-700/50 contrast-125 sm:rounded-tl-3xl sm:rounded-bl-3xl"
          height={305}
          quality={100}
          src={`${image ? image : "/spacex-twitter-card.jpg"}`}
          width={543}
        />
        <div className="ml-4 w-1/2 bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <StatusBoolean active={active} />
              <h1 className="text-2xl font-bold text-slate-200">{name}</h1>
            </div>
            <div className="flex items-center">
              <PlusButton onClick={handlePower} />
            </div>
          </div>
          <div className="mt-4 flex items-center" />
          <div className="mt-4 flex items-center bg-slate-700/25 ring-1 ring-slate-700/50 sm:rounded-lg">
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Type</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {type}
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Class</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {shipClass}
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Year Built</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {year_built}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center" />
        </div>
      </div>
    </div>
  )
}

export default CardShip
