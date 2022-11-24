import { FC } from "react"

import { RocketLaunch } from "../Icons/Rocket"

interface Props {
  status: string
  className?: string
}

const StatusIndicator: FC<Props> = ({ status }) => {
  const type = status === "active" ? "active" : "retired"

  switch (type) {
    case "active":
      return (
        <>
          <RocketLaunch className="h-5 w-5 text-green-500" />
          <span className="w-14; h-14; border-teal-50; rounded-full bg-green-500 fill-green-500" />
        </>
      )
    case "retired":
      return (
        <>
          <RocketLaunch className="h-5 w-5 text-red-500" />
          <span className="w-14; h-14; border-red-120; rounded-full bg-red-700" />
        </>
      )
    default:
      return (
        <span className="w-14; h-14; border-gray-120; rounded-full bg-gray-500" />
      )
  }
}

export default StatusIndicator
