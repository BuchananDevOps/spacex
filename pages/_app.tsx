import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Head from "next/head"
import { FC } from "react"

import packageData from "package.json"

import "@/styles/globals.css"

const RootLayout = dynamic(() => import("@/components/Page/RootLayout"))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Head>
        <title>{packageData.displayName}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default dynamic(() => Promise.resolve(App))
