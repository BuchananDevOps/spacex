import { FC } from "react"

import clsx from "clsx"

interface Props {
  children?: React.ReactNode
  className?: string
  type?: "body" | "head"
}

const TableDisplayCell: FC<Props> = ({ children, type, ...other }) => {
  return (
    <div
      className={clsx("table-cell", {
        "table-cell-body px-4 py-2 bg-slate-900/50 font-bold ": type === "body",
        "table-cell-head px-4 py-2 bg-slate-900 font-bold ": type === "head",
      })}
      {...other}
    >
      {children}
    </div>
  )
}

export default TableDisplayCell
