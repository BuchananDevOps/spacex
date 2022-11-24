import dynamic from "next/dynamic"
import { FC } from "react"

const Table = dynamic(() => import("@/interface/Table"))
const TableBody = dynamic(() => import("@/interface/Table/table-body"))
const TableHead = dynamic(() => import("@/interface/Table/table-head"))
const TableCell = dynamic(() => import("@/interface/Table/table-cell"))
const TableRow = dynamic(() => import("@/interface/Table/table-row"))

interface Props {
  children: React.ReactNode
}

const TablePayloads: FC<Props> = ({ children }) => {
  return (
    <div className="table-payloads">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell type={"head"}>Name</TableCell>
            <TableCell type={"head"}>Type</TableCell>
            <TableCell type={"head"}>Reused</TableCell>
            <TableCell type={"head"}>Launch</TableCell>
            <TableCell type={"head"}>Mass</TableCell>
            <TableCell type={"head"}>Orbit</TableCell>
            <TableCell type={"head"}>Reference System</TableCell>
            <TableCell type={"head"}>Semi Major Axis</TableCell>
            <TableCell type={"head"}>Eccentricity</TableCell>
            <TableCell type={"head"}>Periapsis</TableCell>
            <TableCell type={"head"}>Apoapsis</TableCell>
            <TableCell type={"head"}>Inclination</TableCell>
            <TableCell type={"head"}>Period</TableCell>
            <TableCell type={"head"}>Lifespan</TableCell>
            <TableCell type={"head"}>Epoch</TableCell>
            <TableCell type={"head"}>Mean Motion</TableCell>
            <TableCell type={"head"}>RAAN</TableCell>
            <TableCell type={"head"}>Arg of Pericenter</TableCell>
            <TableCell type={"head"}>Mean Anomaly</TableCell>
            <TableCell type={"head"}>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </div>
  )
}

export default TablePayloads
