import dynamic from "next/dynamic"
import Image from "next/image"
import { FC } from "react"

const StatusActiveRetired = dynamic(
  () => import("@/components/Status/StatusActiveRetired")
)

const Landpad: FC<SPACEX.ArKs.Landpads> = ({
  full_name,
  name,
  status,
  type,
  locality,
  region,
  longitude,
  latitude,
  landing_attempts,
  landing_successes,
  wikipedia,
  details,
  images: { large },
}) => {
  const handleWikipedia = () => {
    window.open(wikipedia)
  }

  function handleMap() {
    window.open(
      `https://google.com/maps/@${latitude},${longitude},508m/data=!3m1!1e3`
    )
  }

  function countDetails(details: string) {
    const str = details || ""
    if (str.length > 645) {
      return (
        <>
          <p className="item-details">{str.substring(0, 645)}</p>
          <p className="item-details first-letter:capitalize">
            {str.substring(645)}
          </p>
        </>
      )
    }
    return str
  }

  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black text-slate-200">
        <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
          <div
            className="
        table-header-background
        bg-grid-slate-700
        mask-image-dark absolute 
        inset-0
        "
          />
          <div className="relative overflow-auto rounded-xl">
            <div className="my-8 overflow-hidden shadow-sm">
              <table className="w-full table-auto border-collapse text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Name
                    </th>
                    <th className="border-b p-4  pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Status
                    </th>
                    <th className="border-b p-4  pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Type
                    </th>
                    <th className="border-b p-4 pt-0 pb-3 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Attempts
                    </th>
                    <th className="border-b p-4  pt-0 pb-3 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Successes
                    </th>
                    <th className="border-b p-4  pt-0 pb-3 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                      Success Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-800 bg-opacity-25">
                  <tr>
                    <td className="border-b border-slate-100 p-4 pl-8 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {name}
                    </td>
                    <td className="border-b border-slate-100 p-4 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      <StatusActiveRetired status={status} />
                    </td>
                    <td className="border-b border-slate-100 p-4 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {type}
                    </td>
                    <td className="border-b border-slate-100 p-4 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {landing_attempts}
                    </td>
                    <td className="border-b border-slate-100 p-4 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {landing_successes}
                    </td>
                    <td className="border-b border-slate-100 p-4 pr-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {landing_attempts > 0
                        ? `${Math.round(
                            (landing_successes / landing_attempts) * 100
                          )}%`
                        : "0%"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-row align-middle">
          <div className="basis-full text-center contrast-125">
            <Image
              alt={full_name}
              height={1000}
              src={`${large}`}
              width={1000}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-row px-10 pt-5">
          <div className="basis-2/3">
            <h1 className="text-4xl font-semibold  text-white">{full_name}</h1>
          </div>
          <div className="text-1xl basis-1/3 text-right font-semibold text-white">
            <button className="btn btn-slate" type="button" onClick={handleMap}>
              <div className="row-span-full">
                {locality}, {region}
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row px-10 pt-5 pb-10 align-middle">
          <div className="mb-1 basis-full">
            {countDetails(details)}
            <div>
              <button
                className="btn btn-primary mt-5"
                type="button"
                onClick={handleWikipedia}
              >
                Wikipedia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landpad
