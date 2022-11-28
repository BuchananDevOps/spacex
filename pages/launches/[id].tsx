import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"
import { Suspense } from "react"

import useSWR from "swr"

import { Launches } from "@/lib/types"

const Launch = dynamic(() => import("@/components/Items/Launch"), {
  ssr: true,
  suspense: true,
})

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Launches>(
    router.query.id
      ? `https://api.spacexdata.com/v4/launches/${router.query.id}`
      : null
  )
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>SpaceX - {data.name} </title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Launch {...data} />
      </Suspense>
    </>
  )
}

export default Page
