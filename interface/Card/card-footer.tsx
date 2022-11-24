import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  disableAutoMargin?: boolean
  className?: string
  children: React.ReactNode
}

const defaultProps = {
  disableAutoMargin: false,
  className: "",
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardFooterProps = Props & NativeAttrs

export default function CardFooter(
  props: CardFooterProps & typeof defaultProps
) {
  const { children, className, ...other } = props

  const classes = clsx("flex", className)

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  )
}
