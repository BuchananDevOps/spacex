import dynamic from "next/dynamic"
import { FC } from "react"

const StatusBoolean = dynamic(() => import("@/components/Status/StatusBoolean"))

const Launches: FC<SPACEX.ArKs.Launches> = ({
  success,
  details,
  name,
  date_local,
}) => {
  return (
    <div className="gird-cols-12 grid gap-4">
      <div className="col-span-12 md:col-span-12 lg:col-span-6">
        <div className="bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-white">{name}</h2>
              <p className="text-sm text-slate-300">{date_local}</p>
            </div>
            <div className="flex flex-col">
              <StatusBoolean active={success} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-300">{details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launches
