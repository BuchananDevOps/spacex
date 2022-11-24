import { FC } from "react"

interface Props {
  active: boolean
}

const StatusBoolean: FC<Props> = ({ active }) => {
  return (
    <span>
      {active ? (
        <div className="font-bold text-green-500">Active</div>
      ) : (
        <span className="list-disc font-bold text-red-500">Retired</span>
      )}
    </span>
  )
}

export default StatusBoolean
