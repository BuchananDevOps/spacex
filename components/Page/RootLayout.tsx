import dynamic from "next/dynamic"
import React, { FC, PropsWithChildren } from "react"

const BreadcrumbBar = dynamic(
  () =>
    import("@/components/Page/BreadcrumbBar").then(mod => mod.BreadcrumbBar),
  { ssr: false }
)

const CategoryNav = dynamic(
  () => import("@/components/Page/CategoryNav").then(mod => mod.CategoryNav),
  { ssr: false }
)

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="[color-scheme:dark]">
      <div className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]" />
      <CategoryNav />
      <div className="lg:pl-72">
        <div className="mx-auto space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <BreadcrumbBar />
            </div>
          </div>
          {children}
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <Byline />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Byline = () => {
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

export default RootLayout
