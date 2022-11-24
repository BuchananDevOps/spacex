import dynamic from "next/dynamic"
import { FC } from "react"

const Card = dynamic(() => import("@/interface/Card"))
const CardContent = dynamic(() => import("@/interface/Card/card-content"))

const CardCore: FC<SPACEX.ArKs.Cores> = ({
  block,
  reuse_count,
  rtls_attempts,
  rtls_landings,
  asds_attempts,
  asds_landings,
  last_update,
  launches,
  serial,
  status,
  id,
}) => {
  return (
    <Card
      className="flex flex-col justify-between"
      hoverable={true}
      shadow={true}
      type="default"
    >
      <CardContent>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Block</span>
            <span className="text-sm font-semibold text-gray-500">
              Reuse Count
            </span>
            <span className="text-sm font-semibold text-gray-500">
              RTLS Attempts
            </span>
            <span className="text-sm font-semibold text-gray-500">
              RTLS Landings
            </span>
            <span className="text-sm font-semibold text-gray-500">
              ASDS Attempts
            </span>
            <span className="text-sm font-semibold text-gray-500">
              ASDS Landings
            </span>
            <span className="text-sm font-semibold text-gray-500">
              Last Update
            </span>
            <span className="text-sm font-semibold text-gray-500">
              Launches
            </span>
            <span className="text-sm font-semibold text-gray-500">Serial</span>
            <span className="text-sm font-semibold text-gray-500">Status</span>
            <span className="text-sm font-semibold text-gray-500">ID</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">{block}</span>
            <span className="text-sm font-semibold text-gray-500">
              {reuse_count}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {rtls_attempts}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {rtls_landings}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {asds_attempts}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {asds_landings}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {last_update}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {launches}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {serial}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {status}
            </span>
            <span className="text-sm font-semibold text-gray-500">{id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardCore
