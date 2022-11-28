import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const TablePayloads = dynamic(
  () => import("@/components/Table/TablePayloads"),
  {
    ssr: true,
    suspense: true,
  }
)
const TablePayloadItem = dynamic(
  () => import("@/components/Table/TablePayloadItem"),
  {
    ssr: true,
    suspense: true,
  }
)

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/payloads`)
  const payloads = await res.json()

  return {
    props: {
      payloads,
    },
  }
}

const Page: NextPage<{ payloads: any }> = ({ payloads }) => {
  return (
    <>
      <Head>
        <title>Payloads | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <Suspense fallback={<div>Loading...</div>}>
              <TablePayloads>
                {payloads.map((payload: any) => (
                  <TablePayloadItem key={payload} {...payload} />
                ))}
              </TablePayloads>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
