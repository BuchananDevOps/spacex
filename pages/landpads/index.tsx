import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const CardLandpad = dynamic(() => import("@/components/Card/CardLandpad"))

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/landpads`)
  const landpads = await res.json()

  return {
    props: {
      landpads,
    },
  }
}

const Page: NextPage<{ landpads: any }> = ({ landpads }) => {
  return (
    <>
      <Head>
        <title>Landpads | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {landpads.map((landpad: any) => (
            <div
              key={landpad.id}
              className="col-span-12 md:col-span-12 lg:col-span-12"
            >
              <CardLandpad {...landpad} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
