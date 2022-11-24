import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const Launches = "https://api.spacexdata.com/v4/launches/next"

const Launch = dynamic(() => import("@/components/Items/Launch"))

export async function getServerSideProps() {
  const res = await fetch(`${Launches}`)
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
        <title>Next Launches | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <Launch {...launches} />
      </div>
    </>
  )
}

export default Page
