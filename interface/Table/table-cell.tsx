import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
  className?: string
  type?: "head" | "body" | "foot"
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableCellProps = Props & NativeAttrs

export default function TableCell(props: TableCellProps) {
  const { children, className, type, ...other } = props

  const classes = clsx(
    "table-cell",
    {
      "table-cell-body px-4 py-2 bg-slate-900/50 font-bold ": type === "body",
      "table-cell-head px-4 py-2 bg-slate-900 font-bold ": type === "head",
    },
    className
  )

  if (type === "head") {
    return (
      <th className={classes} {...other}>
        {children}
      </th>
    )
  } else {
    return (
      <td className={classes} {...other}>
        {children}
      </td>
    )
  }
}
