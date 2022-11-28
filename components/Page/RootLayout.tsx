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

const ByLine = dynamic(() => import("@/components/Page/ByLine"), { ssr: false })

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="[color-scheme:dark]">
      <div className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]" />
      <CategoryNav />
      <div className="lg:pl-72">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <BreadcrumbBar />
            </div>
          </div>
          {children}
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <ByLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RootLayout
