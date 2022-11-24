import React from "react"

import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableProps = Props & NativeAttrs

export default function Table(props: TableProps) {
  const { children, className, ...other } = props

  const classes = clsx("table", className)

  return (
    <table className={classes} {...other}>
      {children}
    </table>
  )
}
