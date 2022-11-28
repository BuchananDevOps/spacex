import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const latest = "https://api.spacexdata.com/v4/launches/latest"

const CardLaunch = dynamic(() => import("@/components/Card/CardLaunch"), {
  ssr: true,
  suspense: true,
})

export async function getServerSideProps() {
  const res = await fetch(`${latest}`)
  const launches = await res.json()

  return {
    props: {
      launches,
    },
  }
}

const Page: NextPage<{ launches: any }> = ({ launches }) => {
  return (
    <>
      <Head>
        <title>Latest Launches | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <Suspense fallback={<div>Loading...</div>}>
              <CardLaunch {...launches} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
