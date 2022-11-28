import { FC } from "react"

interface Props {
  children: React.ReactNode
}

const KiloGrams: FC<Props> = ({ children }) => {
  return (
    <span className="text-sm text-gray-500" id="kg">
      {children} kg
    </span>
  )
}

export default KiloGrams
