import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"
import { Suspense } from "react"

import useSWR from "swr"

import { Launchpad } from "@/lib/types"

const LaunchPad = dynamic(() => import("@/components/Items/LaunchPad"), {
  ssr: true,
  suspense: true,
})

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Launchpad>(
    router.query.id
      ? `https://api.spacexdata.com/v4/launchpads/${router.query.id}`
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
        <LaunchPad {...data} />
      </Suspense>
    </>
  )
}

export default Page
