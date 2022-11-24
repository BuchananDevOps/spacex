import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const defaultProps = {
  className: "",
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardContentProps = Props & NativeAttrs

export default function CardContent(props: CardContentProps) {
  const { children, className, ...other } = props

  const classes = clsx("flex", className)

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  )
}
