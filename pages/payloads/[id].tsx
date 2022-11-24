import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { Suspense } from "react"

import useSWR from "swr"

import { Payloads } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Payloads>(
    router.query.id
      ? `https://api.spacexdata.com/v4/payloads/${router.query.id}`
      : null,
    fetcher
  )
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>SpaceX - {data.name} </title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12 lg:col-span-12">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {data.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {data.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Page
