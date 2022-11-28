import dynamic from "next/dynamic"
import { FC, useState } from "react"

import clsx from "clsx"

const TableCell = dynamic(() => import("./TableDisplayCell"))

const TableDisplayItem: FC<SPACEX.ArKs.Payloads> = ({
  id,
  name,
  type,
  orbit,
  launch,
  reference_system,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <button
      className="collapse"
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="table-row-group">
        <div className="table-row">
          <TableCell type="body">{name}</TableCell>
          <TableCell type="body">{type}</TableCell>
          <TableCell type="body">{launch}</TableCell>
          <TableCell type="body">{orbit}</TableCell>
          <TableCell type="body">{reference_system}</TableCell>
          <TableCell type="body">Expand</TableCell>
          <TableCell type="body">Launch</TableCell>
        </div>
      </div>
    </button>
  )
}

export default TableDisplayItem
