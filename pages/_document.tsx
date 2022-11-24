import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { Fragment } from "react"

import packageData from "package.json"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [<Fragment key="initial">{initialProps.styles}</Fragment>],
    }
  }

  render() {
    return (
      <Html itemScope itemType="http://schema.org/WebPage" lang="en">
        <Head>
          <meta content={packageData.displayName} name="application-name" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta
            content="default"
            name="apple-mobile-web-app-status-bar-style"
          />
          <meta
            content={packageData.displayName}
            name="apple-mobile-web-app-title"
          />
          <meta content={packageData.description} name="description" />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta
            content="/icons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="#FFFFFF" name="msapplication-TileColor" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="#000000" name="theme-color" />
          <link
            href="/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/manifest.json" rel="manifest" />
          <link
            color="#FFFFFF"
            href="/icons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta content="summary" name="twitter:card" />
          <meta content={packageData.url} name="twitter:url" />
          <meta content={packageData.displayName} name="twitter:title" />
          <meta content={packageData.description} name="twitter:description" />
          <meta
            content="/icons/android-chrome-192x192.png"
            name="twitter:image"
          />
          <meta content="@buchanandevops" name="twitter:creator" />
          <meta content="website" property="og:type" />
          <meta content={packageData.displayName} property="og:title" />
          <meta content={packageData.description} property="og:description" />
          <meta content={packageData.displayName} property="og:site_name" />
          <meta content={packageData.url} property="og:url" />
          <meta content="/icons/apple-touch-icon.png" property="og:image" />
        </Head>
        <body className="overflow-y-scroll  bg-gray-1100 bg-[url('/grid.svg')]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
