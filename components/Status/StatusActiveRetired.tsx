import { FC } from "react"

interface Props {
  status: string
}

const StatusActiveRetired: FC<Props> = ({ status }) => {
  return (
    <span>
      {status === "active" ? (
        <div className="font-bold text-green-500">Active</div>
      ) : (
        <span className="list-disc font-bold text-red-500">Retired</span>
      )}
    </span>
  )
}

export default StatusActiveRetired
