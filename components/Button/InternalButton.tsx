import { FC } from "react"

interface Props {
  onClick: any
  title: string
  className?: string
}

const InternalButton: FC<Props> = ({ onClick, title, className }) => {
  return (
    <button
      className="bg-gray-800/25 hover:bg-gray-800/50 text-white hover:text-gray-500 px-4 py-2 text-sm font-medium flex w-full justify-center"
      onClick={onClick}
    >
      {title}
      <svg
        className="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          fillRule="evenodd"
        />
      </svg>
    </button>
  )
}

export default InternalButton
