import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"

import useSWR from "swr"

import { Ships } from "@/lib/types"

const NewShip = dynamic(() => import("@/components/Items/NewShip"))

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR<Ships>(
    router.query.id
      ? `https://api.spacexdata.com/v4/ships/${router.query.id}`
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
      <NewShip {...data} />
    </>
  )
}

export default Page
