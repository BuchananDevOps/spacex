import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
  className?: string
  type?: "default" | "verticle"
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableBodyProps = Props & NativeAttrs

export default function TableBody(props: TableBodyProps) {
  const { children, className, type, ...other } = props

  const classes = clsx(
    "table-body",
    {
      "table-body--default bg-slate-800 bg-opacity-25": type === "default",
      "table-body--verticle grid grid-cols-2": type === "verticle",
    },
    className
  )

  return (
    <tbody className={classes} {...other}>
      {children}
    </tbody>
  )
}
