import dynamic from "next/dynamic"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

import InternalButton from "../Button/InternalButton"
import PlusButton from "../Button/PlusButton"

const StatusSuccess = dynamic(() => import("../Status/StatusSuccess"))

const CardLaunch: FC<SPACEX.ArKs.Launches> = ({
  id,
  name,
  date_local,
  success,
  details,
  links,
  rocket,
  payloads,
  launchpad,
}) => {
  const router = useRouter()
  const handlePower = () => {
    router.push(`/launches/${id}`)
  }
  const handleRocket = () => {
    router.push(`/rockets/${rocket}`)
  }
  const handleLaunchpad = () => {
    router.push(`/launchpads/${launchpad}`)
  }
  const handlePayload = () => {
    router.push(`/payloads/${payloads[0]}`)
  }

  return (
    <div className="bg-slate-700/25 relative py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 rounded-2xl h-full">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 sm:col-span-1">
          <div className="flex">
            {links.patch.small === null ? (
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
                src={`${links.patch.small}`}
                width={100}
              />
            )}
          </div>
        </div>
        <div className="col-span-3 sm:col-span-3">
          <div className="absolute right-5 place-items-end">
            <PlusButton onClick={handlePower} />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-white">{name}</h2>
              <StatusSuccess success={success} />
              <p className="text-sm text-slate-300">{date_local}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center bg-slate-700/25 ring-1 ring-slate-700/50 sm:rounded-lg">
        <div className="flex flex-row w-full">
          <InternalButton
            className="basis-1/3"
            title="Rocket"
            onClick={handleRocket}
          />
          <InternalButton
            className="basis-1/3"
            title="Launchpad"
            onClick={handleLaunchpad}
          />
          <InternalButton
            className="basis-1/3"
            title="Payload"
            onClick={handlePayload}
          />
        </div>
      </div>
    </div>
  )
}

export default CardLaunch
