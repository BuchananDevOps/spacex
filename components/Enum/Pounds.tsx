import { FC } from "react"

interface Props {
  children: React.ReactNode
}

const Pounds: FC<Props> = ({ children }) => {
  return (
    <span className="text-sm text-gray-500" id="lbs">
      {children} lbs
    </span>
  )
}

export default Pounds
