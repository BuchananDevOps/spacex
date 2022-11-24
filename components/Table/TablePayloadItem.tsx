import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FC } from "react"

const TableCell = dynamic(() => import("@/interface/Table/table-cell"))
const TableRow = dynamic(() => import("@/interface/Table/table-row"))
const PlusButton = dynamic(() => import("../Button/PlusButton"))

const TablePayloadItem: FC<SPACEX.ArKs.Payloads> = ({
  name,
  type,
  reused,
  launch,
  mass_lbs,
  orbit,
  reference_system,
  semi_major_axis_km,
  eccentricity,
  periapsis_km,
  apoapsis_km,
  inclination_deg,
  period_min,
  lifespan_years,
  epoch,
  mean_motion,
  raan,
  arg_of_pericenter,
  mean_anomaly,
  id,
}) => {
  const router = useRouter()
  const launchButton = () => {
    router.push(`/launches/${launch}`)
  }
  const handlePayload = () => {
    router.push(`/payloads/${id}`)
  }
  return (
    <TableRow>
      <TableCell type={"body"}>{name}</TableCell>
      <TableCell type={"body"}>{type}</TableCell>
      <TableCell type={"body"}>{reused ? "Yes" : "No"}</TableCell>
      <TableCell type={"body"}>
        <PlusButton onClick={launchButton} />
      </TableCell>
      <TableCell type={"body"}>{mass_lbs} lbs</TableCell>
      <TableCell type={"body"}>{orbit}</TableCell>
      <TableCell type={"body"}>{reference_system}</TableCell>
      <TableCell type={"body"}>
        {semi_major_axis_km}
        <br /> km
      </TableCell>
      <TableCell type={"body"}>{eccentricity}</TableCell>
      <TableCell type={"body"}>
        {periapsis_km}
        <br /> km
      </TableCell>
      <TableCell type={"body"}>
        {apoapsis_km}
        <br /> km
      </TableCell>
      <TableCell type={"body"}>
        {inclination_deg}
        <br /> deg
      </TableCell>
      <TableCell type={"body"}>
        {period_min}
        <br /> min
      </TableCell>
      <TableCell type={"body"}>
        {lifespan_years} <br /> years
      </TableCell>
      <TableCell type={"body"}>{epoch}</TableCell>
      <TableCell type={"body"}>{mean_motion}</TableCell>
      <TableCell type={"body"}>{raan}</TableCell>
      <TableCell type={"body"}>{arg_of_pericenter}</TableCell>
      <TableCell type={"body"}>{mean_anomaly}</TableCell>
      <TableCell type={"body"}>
        <PlusButton onClick={handlePayload} />
      </TableCell>
    </TableRow>
  )
}

export default TablePayloadItem
