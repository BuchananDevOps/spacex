import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableHeadProps = Props & NativeAttrs

export default function TableHead(props: TableHeadProps) {
  const { children, className, ...other } = props

  const classes = clsx("table-head", className)

  return (
    <thead className={classes} {...other}>
      {children}
    </thead>
  )
}
