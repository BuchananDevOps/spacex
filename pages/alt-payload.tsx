import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

const TableDisplay = dynamic(() => import("@/components/Table/TableDisplay"), {
  ssr: true,
  suspense: true,
})
const TableDisplayItem = dynamic(
  () => import("@/components/Table/TableDisplayItem"),
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
        <Suspense fallback={<div>Loading...</div>}>
          <TableDisplay>
            {payloads.map((payload: any) => (
              <TableDisplayItem key={payload} {...payload} />
            ))}
          </TableDisplay>
        </Suspense>
      </div>
    </>
  )
}

export default Page
