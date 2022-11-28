import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import Link from "next/link"
import { Suspense } from "react"

const Card = dynamic(() => import("@/interface/Card"), {
  ssr: true,
  suspense: true,
})


export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/rockets`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Page: NextPage<{ data: any }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Rockets | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            {data.map((data: any) => (
              <div
                key={data.id}
                className="col-span-12 md:col-span-12 lg:col-span-12"
              >
                <Card category="rockets" image={data.image} {...data} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Page
