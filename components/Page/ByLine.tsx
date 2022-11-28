import { FC } from "react"

const Byline: FC = () => {
  return (
    <div className="flex items-center justify-between space-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center space-x-1.5">
        <div className="text-sm text-gray-600">By</div>
        <a href="https://vercel.com" title="Vercel">
          <div className="w-16 text-gray-300 hover:text-gray-50">Buchanan</div>
        </a>
      </div>
      <div className="text-sm text-gray-600">
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://github.com/vercel/app-playground"
        >
          View code
        </a>
        {" or "}
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://vercel.com/templates/next.js/app-directory"
        >
          deploy your own
        </a>
      </div>
    </div>
  )
}

export default Byline
