import dynamic from "next/dynamic"
import { FC, PropsWithChildren } from "react"

import clsx from "clsx"

const TableCell = dynamic(() => import("./TableDisplayCell"))

const TableDisplay: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="table w-full">
      <div className="table-header-group">
        <div className="table-row">
          <TableCell type="head">Name</TableCell>
          <TableCell type="head">Type</TableCell>
          <TableCell type="head">Launch</TableCell>
          <TableCell type="head">Orbit</TableCell>
          <TableCell type="head">System</TableCell>
          <TableCell type="head">Expand</TableCell>
          <TableCell type="head">Manifest</TableCell>
        </div>
      </div>
      {children}
    </div>
  )
}

export default TableDisplay
