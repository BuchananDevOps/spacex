import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const TablePayloads = dynamic(() => import("@/components/Table/TablePayloads"))
const TablePayloadItem = dynamic(
  () => import("@/components/Table/TablePayloadItem")
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
            <TablePayloads>
              {payloads.map((payload: any) => (
                <TablePayloadItem key={payload} {...payload} />
              ))}
            </TablePayloads>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
