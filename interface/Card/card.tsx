import dynamic from "next/dynamic"
import Image from "next/image"

import clsx from "clsx"

import { hasChild, pickChild } from "../utils/collections"

const CardFooter = dynamic(() => import("@/interface/Card/card-footer"))
const CardContent = dynamic(() => import("@/interface/Card/card-content"))

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  shadow?: boolean
  type?: "default" | "primary" | "success" | "warning" | "danger"
  hoverable?: boolean
}

const defaultProps = {
  className: "",
  shadow: false,
  hoverable: false,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardProps = Props & NativeAttrs

export default function Card(
  props: React.PropsWithChildren<CardProps> & typeof defaultProps,
  type?: "default" | "primary" | "success" | "warning" | "danger"
) {
  const { children, className, ...other } = props

  const classes = clsx(
    "bg-slate-700/25  ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-tr-2xl sm:rounded-br-2xl",
    {
      " bg-slate-700/50 ring-1 ring-slate-700/50": type === "default",
      " bg-primary-500/50 ring-1 ring-primary-500/50": type === "primary",
      " bg-success-500/50 ring-1 ring-success-500/50": type === "success",
      " bg-warning-500/50 ring-1 ring-warning-500/50": type === "warning",
      " bg-danger-500/50 ring-1 ring-danger-500/50": type === "danger",
    },
    {
      "shadow-lg": props.shadow,
      "hover:shadow-lg": props.hoverable,
    },
    className
  )

  const [withoutFooterChildren, footerChildren] = pickChild(
    children,
    CardFooter
  )
  const [withoutImageChildren, imageChildren] = pickChild(
    withoutFooterChildren,
    Image
  )
  const hasContent = hasChild(withoutImageChildren, CardContent)

  return (
    <div className={clsx("card", className)} {...other}>
      {imageChildren}
      {hasContent ? (
        <div className={clsx("card-content", classes)}>
          {withoutImageChildren}
        </div>
      ) : (
        <CardContent className={clsx("card-content", classes)}>
          {withoutImageChildren}
        </CardContent>
      )}
      {footerChildren}
    </div>
  )
}
