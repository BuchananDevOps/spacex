import dynamic from "next/dynamic"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

import StatusActiveRetired from "../Status/StatusActiveRetired"

const PlusButton = dynamic(() => import("@/components/Button/PlusButton"))

const CardLandpad: FC<SPACEX.ArKs.Launchpad> = ({
  id,
  details,
  status,
  full_name,
  launch_attempts,
  launch_successes,
  images: { large },
}) => {
  const router = useRouter()

  const handlePower = () => {
    router.push(`/launchpads/${id}`)
  }

  function countDetails(details: string) {
    const str = details || ""
    if (str.length > 380) {
      return str.substring(0, 645) + "...Reac more"
    }
    return str
  }

  function successPercentRate() {
    return (launch_successes / launch_attempts) * 100 + "%" || "0%"
  }

  function formatSuccessRate() {
    const rate = successPercentRate()
    if (rate.length > 4) {
      return rate.substring(0, 4) + "%"
    }
    return rate
  }

  return (
    <div className="relative z-10 -mx-4 bg-[radial-gradient(164.75%_100%_at_50%_0%,#3341558a_0%,#05060aa8_48.73%)] py-10 px-5 shadow-lg sm:mx-0 sm:rounded-3xl sm:px-10">
      <div className="flex ">
        <Image
          alt={full_name}
          className=" w-1/2 ring-1 ring-slate-700/50 contrast-125 sm:rounded-tl-3xl sm:rounded-bl-3xl"
          height={305}
          quality={100}
          src={`${large}`}
          width={543}
        />
        <div className="ml-4 w-1/2 bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <StatusActiveRetired status={status} />
              <h1 className="text-2xl font-bold text-slate-200">{full_name}</h1>
            </div>
          </div>
          <div className="mt-4 flex items-center" />
          <div className="mt-4 flex items-center bg-slate-700/25 ring-1 ring-slate-700/50 sm:rounded-lg">
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Attempts</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {launch_attempts}
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Successes</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {launch_successes}
              </p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center py-4">
              <p className="text-sm leading-6 text-slate-400">Percent</p>
              <p className="text-2xl font-semibold leading-7 text-white">
                {formatSuccessRate()}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center" />
        </div>
      </div>
      <div className="relative -mx-5 mt-8 flex flex-col bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold leading-7 text-white">
            Details
          </h3>
          <div className="flex items-center">
            <PlusButton onClick={handlePower} />
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          {countDetails(details)}
        </p>
      </div>
    </div>
  )
}

export default CardLandpad
