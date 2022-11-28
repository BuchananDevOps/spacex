import { FC } from "react"

interface Props {
  success: boolean
}

const StatusSuccess: FC<Props> = ({ success }) => {
  return (
    <span>
      {success ? (
        <div className="font-bold text-green-500">Success</div>
      ) : (
        <span className="list-disc font-bold text-red-500">Failure</span>
      )}
    </span>
  )
}

export default StatusSuccess
