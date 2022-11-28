import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const upcoming = "https://api.spacexdata.com/v4/launches/upcoming"

const CardLaunch = dynamic(() => import("@/components/Card/CardLaunch"), {
  ssr: true,
  suspense: true,
})

export async function getServerSideProps() {
  const res = await fetch(`${upcoming}`)
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
        <title>Ppcoming Launches | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            {launches.map((launch: any) => (
              <div
                key={launch.id}
                className="col-span-12 md:col-span-12 lg:col-span-6"
              >
                <CardLaunch {...launch} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Page
