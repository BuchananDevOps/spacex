import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const CardCrew = dynamic(() => import("@/components/Card/CardCrew"))

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/crew`)
  const crew = await res.json()

  return {
    props: {
      crew,
    },
  }
}

const Page: NextPage<{ crew: any }> = ({ crew }) => {
  return (
    <>
      <Head>
        <title>Crew | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {crew.map((crew: any) => (
            <div
              key={crew.id}
              className="col-span-12 md:col-span-12 lg:col-span-6"
            >
              <CardCrew {...crew} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
