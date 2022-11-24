import dynamic from "next/dynamic"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

import PlusButton from "../Button/PlusButton"

const StatusBoolean = dynamic(() => import("@/components/Status/StatusBoolean"))

const CardLaunch: FC<SPACEX.ArKs.Launches> = ({
  id,
  name,
  date_local,
  success,
  details,
  links: {
    patch: { small },
  },
}) => {
  const router = useRouter()
  const handlePower = () => {
    router.push(`/launches/${id}`)
  }

  return (
    <div className="bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
      <div className="flex justify-between">
        <div className="flex flex-col">
          {small === null ? (
            <Image
              alt="Picture of the author"
              height={50}
              src="/spacex-twitter-card.jpg"
              width={50}
            />
          ) : (
            <Image
              alt="Picture of the author"
              height={100}
              quality={100}
              src={`${small}`}
              width={100}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <StatusBoolean active={success} />
          <p className="text-sm text-slate-300">{date_local}</p>
        </div>
        <div className="flex flex-col">
          <PlusButton onClick={handlePower} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-slate-300">{details}</p>
      </div>
    </div>
  )
}

export default CardLaunch
