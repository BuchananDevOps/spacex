import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const past = "https://api.spacexdata.com/v4/launches/past"

const CardLaunch = dynamic(() => import("@/components/Card/CardLaunch"))

export async function getServerSideProps() {
  const res = await fetch(`${past}`)
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
        <title>Past Launches | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {launches.map((launch: any) => (
            <div
              key={launch.id}
              className="col-span-12 md:col-span-12 lg:col-span-6"
            >
              <CardLaunch {...launch} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
