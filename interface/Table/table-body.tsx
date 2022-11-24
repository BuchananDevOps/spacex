import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableBodyProps = Props & NativeAttrs

export default function TableBody(props: TableBodyProps) {
  const { children, className, ...other } = props

  const classes = clsx("table-body", className)

  return (
    <tbody className={classes} {...other}>
      {children}
    </tbody>
  )
}
