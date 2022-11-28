import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"
import { Suspense } from "react"

import useSWR from "swr"

import { Rockets} from "@/lib/types"

const Rocket = dynamic(() => import("@/components/Items/Rocket"), {
  ssr: true,
  suspense: true,
})

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Rockets>(
    router.query.id
      ? `https://api.spacexdata.com/v4/rockets/${router.query.id}`
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
        <Rocket {...data} />
      </Suspense>
    </>
  )
}

export default Page
