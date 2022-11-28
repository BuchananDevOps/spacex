import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
  className?: string
  colSpan?: number
  type?:
    | "head"
    | "body"
    | "verticle-head"
    | "verticle-body"
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableCellProps = Props & NativeAttrs

export default function TableCell(props: TableCellProps) {
  const { children, className, colSpan, type, ...other } = props

  const classes = clsx(
    "table-cell",
    {
      "table-cell-body border-b border-slate-100 p-4 pr-8 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400": type === "body",
      "table-cell-head border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200": type === "head",
      "table-cell-verticle-head px-4 py-2": type === "verticle-head",
      "table-cell-verticle-body px-4 py-2": type === "verticle-body",
    },
    className
  )

  if (type === "head") {
    return (
      <th colSpan={colSpan} className={classes} {...other}>
        {children}
      </th>
    )
  } else {
    return (
      <td colSpan={colSpan} className={classes} {...other}>
        {children}
      </td>
    )
  }
}
