import React from "react"

import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode
  className?: string
  type?: "default" | "verticle"
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableProps = Props & NativeAttrs

export default function Table(props: TableProps) {
  const { children, className, type, ...other } = props

  const classes = clsx(
    "table ",
    {
      "table--default table table-auto w-full border-collapse text-sm ": type === "default",
      "table--verticle flex": type === "verticle",
    },
    className
  )

  return (
    <table className={classes} {...other}>
      {children}
    </table>
  )
}
