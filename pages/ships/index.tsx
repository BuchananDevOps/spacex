import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const CardShip = dynamic(() => import("@/components/Card/CardShip"))

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/ships`)
  const ships = await res.json()

  return {
    props: {
      ships,
    },
  }
}

const Page: NextPage<{ ships: any }> = ({ ships }) => {
  return (
    <>
      <Head>
        <title>Ships | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {ships.map((ship: any) => (
            <div
              key={ship.id}
              className="col-span-12 md:col-span-12 lg:col-span-6"
            >
              <CardShip {...ship} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
