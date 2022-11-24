import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableRowProps = Props & NativeAttrs

export default function TableRow(props: TableRowProps) {
  const { children, className, ...other } = props

  const classes = clsx("table-row", className)

  return (
    <tr className={classes} {...other}>
      {children}
    </tr>
  )
}
