import clsx from "clsx"
import Image from "next/image"
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  image?: string
  name?: string
}

const defaultProps = {
  className: "",
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardContentProps = Props & NativeAttrs

export default function CardContent(props: CardContentProps) {
  const { children, className, image, name, ...other } = props

  const classes = clsx("flex", className)

  return (
    <div className={classes} {...other}>
      <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-6">
            {image ? (
              <div className="relative w-full h-48 sm:h-64">
                <Image
                      className=" ring-1 ring-slate-700/50 contrast-125 sm:rounded-tl-3xl sm:rounded-bl-3xl"
                        src={`${image ? image : "/icons/spacex-twitter-card.jpg"}`}
                         alt={`${name}`}
                         width={1000}
                         height={1000}
                         quality={100}
                         />    
              </div>
            ) : null}
            </div>
            <div className="col-span-12 sm:col-span-6">
            {children}
            </div>
          </div>
    </div>
  )
}
