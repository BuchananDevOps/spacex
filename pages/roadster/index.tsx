import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/roadster/`)
  const roadster = await res.json()

  return {
    props: {
      roadster,
    },
  }
}

const Page: NextPage<{ roadster: any }> = ({ roadster }) => {
  return (
    <>
      <Head>
        <title>Roadster | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <div className="bg-slate-700/25  ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl">
              <div className="flex">
                <Image
                  alt=""
                  className="w-full rounded-tl-3xl  rounded-bl-3xl md:w-1/2"
                  height={700}
                  src={roadster?.flickr_images[0]}
                  width={700}
                />
                <div className="flex w-full flex-col items-center text-center md:w-1/2">
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-teal-50">
                      {roadster?.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-100">
                      {roadster?.details}
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-100">
                          Launch Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-100">
                          {roadster?.launch_date_utc}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-100">
                          Launch Mass
                        </dt>
                        <dd className="mt-1 text-sm text-gray-100">
                          {roadster?.launch_mass_kg} kg
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-100">
                          Speed
                        </dt>
                        <dd className="mt-1 text-sm text-gray-100">
                          {roadster?.speed_kph} km/h
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-100">
                          Distance
                        </dt>
                        <dd className="mt-1 text-sm text-gray-100">
                          {roadster?.earth_distance_km} km
                        </dd>
                      </div>
                    </dl>
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
export default Page
