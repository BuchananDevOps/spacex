import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const CardCore = dynamic(() => import("@/components/Card/CardCore"))

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/cores`)
  const cores = await res.json()

  return {
    props: {
      cores,
    },
  }
}

const Page: NextPage<{ cores: any }> = ({ cores }) => {
  return (
    <>
      <Head>
        <title>Cores | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {cores.map((core: any) => (
            <div
              key={core.id}
              className="col-span-12 md:col-span-12 lg:col-span-6"
            >
              <CardCore {...core} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
