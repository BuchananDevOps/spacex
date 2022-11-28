import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const CardLaunchpad = dynamic(() => import("@/components/Card/CardLaunchpad"), {
  ssr: true,
  suspense: true,
})

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/launchpads/`)
  const launchpads = await res.json()

  return {
    props: {
      launchpads,
    },
  }
}

const Page: NextPage<{ launchpads: any }> = ({ launchpads }) => {
  return (
    <>
      <Head>
        <title>launchpads | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="mx-auto grid grid-cols-12 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            {launchpads.map((launchpad: any) => (
              <div
                key={launchpads.id}
                className="col-span-12 md:col-span-12 lg:col-span-6"
              >
                <CardLaunchpad {...launchpad} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Page
