import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const activeShips = "https://api.spacexdata.com/v4/ships/?active=true"

const CardShip = dynamic(() => import("@/components/Card/CardShip"), {
  ssr: true,
  suspense: true,
})

export async function getServerSideProps() {
  const res = await fetch(`${activeShips}`)
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
          <Suspense fallback={<div>Loading...</div>}>
            {ships.map((ship: any) => (
              <div
                key={ship.id}
                className="col-span-12 md:col-span-12 lg:col-span-12"
              >
                <CardShip {...ship} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Page
