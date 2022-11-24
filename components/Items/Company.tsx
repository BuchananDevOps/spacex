import { FC } from "react"

interface CompanyProps {
  company: SPACEX.ArKs.Company
}

const Company: FC<CompanyProps> = ({ company }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="item">
        <h1 className="text-center text-4xl font-bold text-slate-900 dark:text-slate-100">
          {company.name}
        </h1>
        <p className="text-center text-xl text-slate-500 dark:text-slate-400">
          {company.summary}
        </p>
      </div>
    </div>
  )
}

export default Company
