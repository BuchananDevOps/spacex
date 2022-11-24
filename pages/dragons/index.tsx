import { NextPage } from "next"
import Head from "next/head"

export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v4/dragons`)
  const dragons = await res.json()

  return {
    props: {
      dragons,
    },
  }
}

const Page: NextPage<{ dragons: any }> = ({ dragons }) => {
  return (
    <>
      <Head>
        <title>Dragons | SpaceX SSR</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Active</th>
                <th className="px-4 py-2">Crew Capacity</th>
                <th className="px-4 py-2">Heat Shield</th>
                <th className="px-4 py-2">Thrusters</th>
                <th className="px-4 py-2">Launch Payload Mass</th>
                <th className="px-4 py-2">Launch Payload Vol</th>
                <th className="px-4 py-2">Return Payload Mass</th>
                <th className="px-4 py-2">Return Payload Vol</th>
                <th className="px-4 py-2">Pressurized Capsule</th>
                <th className="px-4 py-2">Trunk</th>
                <th className="px-4 py-2">Height With Trunk</th>
                <th className="px-4 py-2">Diameter</th>
              </tr>
            </thead>
            <tbody>
              {dragons.map((dragon: any) => (
                <tr key={dragon.id}>
                  <td className="border px-4 py-2">{dragon.name}</td>
                  <td className="border px-4 py-2">{dragon.type}</td>
                  <td className="border px-4 py-2">
                    {dragon.active ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">{dragon.crew_capacity}</td>
                  <td className="border px-4 py-2">{dragon.first_flight}</td>
                  <td className="border px-4 py-2">
                    {dragon.heat_shield.material}
                  </td>
                  <td className="border px-4 py-2">{dragon.thrusters.type}</td>
                  <td className="border px-4 py-2">
                    {dragon.launch_payload_mass.kg}
                  </td>
                  <td className="border px-4 py-2">
                    {dragon.launch_payload_vol.cubic_meters}
                  </td>
                  <td className="border px-4 py-2">
                    {dragon.return_payload_mass.kg}
                  </td>
                  <td className="border px-4 py-2">
                    {dragon.return_payload_vol.cubic_meters}
                  </td>
                  <td className="border px-4 py-2">
                    {dragon.pressurized_capsule.payload_volume.cubic_meters}
                  </td>
                  <td className="border px-4 py-2">
                    {dragon.height_w_trunk.meters}
                  </td>
                  <td className="border px-4 py-2">{dragon.diameter.meters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Page
