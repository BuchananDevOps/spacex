import dynamic from "next/dynamic"
import Link from "next/link"
import { FC } from "react"

import StatusBoolean from "../Status/StatusBoolean"

const PlusButton = dynamic(() => import("@/components/Button/PlusButton"))

const ShipCard: FC<SPACEX.ArKs.Ships> = ({
  type,
  imo,
  mmsi,
  abs,
  class: shipClass,
  mass_kg,
  mass_lbs,
  year_built,
  home_port,
  status,
  speed_kn,
  course_deg,
  latitude,
  longitude,
  name,
  active,
  id,
  launches,
}) => {
  const hanldeLaunches = () => {
    window.open(`/launches/${id}`)
  }
  function countLaunches(launches: string[]) {
    const str = launches || []
    if (str.length > 3) {
      return str.slice(0, 3)
    }
    return str
  }

  return (
    <>
      8080
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold text-white">{name}</h2>
                  <p className="text-sm text-slate-300">{type}</p>
                </div>
                <div className="flex flex-col">
                  <StatusBoolean active={active} />
                </div>
              </div>
              <div className="mt-4" />
              <div className="mt-4">
                <p className="text-sm text-slate-300" />
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-300">{mass_kg} kg</p>
                      <p className="text-sm text-slate-300">{mass_lbs} lbs</p>
                    </div>
                    <div className="ml-4 flex flex-col">
                      <p className="text-sm text-slate-300">{year_built}</p>
                      <p className="text-sm text-slate-300">{home_port}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-300">{speed_kn} kn</p>
                      <p className="text-sm text-slate-300">{course_deg} deg</p>
                    </div>
                    <div className="ml-4 flex flex-col">
                      <p className="text-sm text-slate-300">{latitude}</p>
                      <p className="text-sm text-slate-300">{longitude}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold text-white">
                    Launches
                  </h2>
                  <p className="text-sm text-slate-300">
                    {countLaunches(launches).map(launch => (
                      <Link
                        key={launch}
                        className="text-sm text-slate-300"
                        href={`/launches/${launch}`}
                      >
                        {launch}
                      </Link>
                    ))}
                  </p>
                </div>
                <div className="flex flex-col">
                  <PlusButton onClick={hanldeLaunches} />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-300">{imo}</p>
                      <p className="text-sm text-slate-300">{mmsi}</p>
                    </div>
                    <div className="ml-4 flex flex-col">
                      <p className="text-sm text-slate-300">{abs}</p>
                      <p className="text-sm text-slate-300">{shipClass}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-300">{status}</p>
                      <p className="text-sm text-slate-300">{type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShipCard
