import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const Card = dynamic(() => import("@/interface/Card"))
const CardContent = dynamic(() => import("@/interface/Card/card-content"))

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/rockets`)
  const rockets = await res.json()

  return {
    props: {
      rockets,
    },
  }
}

const Page: NextPage<{ rockets: any }> = ({ rockets }) => {
  return (
    <>
      <Head>
        <title>Rockets | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {rockets.map((rocket: any) => (
            <div
              key={rocket.id}
              className="col-span-12 md:col-span-12 lg:col-span-6"
            >
              <Card {...rocket}>
                <CardContent>
                  <h1 className="text-2xl font-bold">{rocket.name}</h1>
                  <p className="text-gray-500">{rocket.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
