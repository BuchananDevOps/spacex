import { NextPage } from "next"
import Head from "next/head"

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | SpaceX SSR</title>
      </Head>
      <div className="container">
        <h1 className="text-center text-4xl font-bold">SpaceX SSR</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-2xl font-bold">Launches</h2>
            <p className="text-gray-500">View all SpaceX launches</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-2xl font-bold">Landpads</h2>
            <p className="text-gray-500">View all SpaceX landpads</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
