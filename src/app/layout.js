import "./globals.css"
import Header from '../components/Header';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "Subodh",
  description: "developed by Subodh",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="StKnFVMdxYtC2pDJPSr7oQjfKmXrAl1UXRLLkokFj8o" />
        <meta name="google-site-verification" content="P2_1zWxkE0R-QmgUGw4dGpmHqVlIO0X-SaoFDdH-ciM" />
      </head>
      <body >
        <Header />
        <SpeedInsights/>
        <Analytics/>
        {children}
      </body>
    </html>
  )
}
