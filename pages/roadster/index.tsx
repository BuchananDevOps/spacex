import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const CardRoadster = dynamic(() => import("@/components/Card/CardRoadster"), {
  ssr: true,
  suspense: true,
})

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
      <Suspense fallback={<div>Loading...</div>}>
        <CardRoadster {...roadster} />
      </Suspense>
    </>
  )
}
export default Page
