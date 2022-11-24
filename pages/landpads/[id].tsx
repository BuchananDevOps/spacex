import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"

import useSWR from "swr"

import { Landpads } from "@/lib/types"

const Landpad = dynamic(() => import("@/components/Items/Landpad"))

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Landpads>(
    router.query.id
      ? `https://api.spacexdata.com/v4/landpads/${router.query.id}`
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
      <Landpad {...data} />
    </>
  )
}

export default Page
