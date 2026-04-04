import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'カメラLab',
  description: 'カメラ・写真の情報メディア',
  keywords: 'カメラLab,カメラ・写真の情報メディア',
  openGraph: {
    title: 'カメラLab',
    description: 'カメラ・写真の情報メディア',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'カメラLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'カメラLab',
    description: 'カメラ・写真の情報メディア',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "カメラLab", "description": "カメラ・写真の情報メディア", "url": "https://camera-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://camera-lab-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
