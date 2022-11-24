import { FC } from "react"

interface Props {
  onClick: any
}

const PlusButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/25 hover:bg-slate-700/50"
      type="button"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  )
}

export default PlusButton
