import { NextPage } from "next"
import Head from "next/head"


const Page: NextPage<{rockets: any}> = ({rockets}) => {
  return (
    <>
      <Head>
        <title>Home | SpaceX SSR</title>
      </Head>

    </>
  )
}

export default Page
