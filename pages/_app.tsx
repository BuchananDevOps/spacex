import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Head from "next/head"
import { FC } from "react"

import packageData from "package.json"

import "@/styles/globals.css"
import { SWRConfig } from "swr"

const RootLayout = dynamic(() => import("@/components/Page/RootLayout"))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Head>
        <title>{packageData.displayName}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      </SWRConfig>
    </>
  )
}

export default App
