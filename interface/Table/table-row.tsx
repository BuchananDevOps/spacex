import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
  className?: string
  type?: "default" | "verticle"
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableRowProps = Props & NativeAttrs

export default function TableRow(props: TableRowProps) {
  const { children, className, type, ...other } = props

  const classes = clsx(
    "table-row ",
    {
      "table-row--default bg-dark-slate-800 ": type === "default",
      "table-row--verticle bg-dark-slate-800 ": type === "verticle",
    },
    className
  )

  return (
    <tr className={classes} {...other}>
      {children}
    </tr>
  )
}
