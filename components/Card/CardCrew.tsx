import Image from "next/image"
import { FC } from "react"

const CardCrew: FC<SPACEX.ArKs.Crew> = ({ name, agency, image }) => {
  return (
    <div>
      <div className=" mb-10 grid-flow-col-dense bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] shadow-lg sm:rounded-3xl">
        <div className="w-full">
          <div className="flex align-top">
            <div className="">
              <div className="relative">
                <Image
                  alt={name}
                  className="rounded-tl-lg rounded-bl-lg"
                  height={120}
                  layout="fixed"
                  src={image}
                  width={120}
                />
              </div>
            </div>
            <div className="ml-4 mt-4">
              <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-100">
                {name}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {agency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCrew
