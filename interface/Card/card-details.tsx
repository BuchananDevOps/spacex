import PlusButton from "@/components/Button/PlusButton"
import { useRouter } from "next/router"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    category?: string
    id?: string
    details?: any
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardDetailsProps = Props & NativeAttrs

export default function CardDetails(props: CardDetailsProps) {
    const { children, category, id, details, className, ...other } = props
    const router  = useRouter()
    const handleView = () => {
      router.push(`/${category}/${id}`)
    }
    function countDetails(details: string) {
        const str = details || ""
        if (str.length > 380) {
          return str.substring(0, 645) + "...Read more"
        }
        return str
      }

    return (
        <div className="relative -mx-5 mt-8 flex flex-col bg-slate-700/25 py-8 px-5 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold leading-7 text-white">
            Details
          </h3>
          <div className="flex items-center">
            <PlusButton onClick={handleView} />
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          {countDetails(details)}
        </p>
        {children ? <div className="mt-4 flex items-center">{children}</div> : null} 
        
      </div>
    )
}
