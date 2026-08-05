import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amar Shah — Frontend Developer',
  description: 'Amar Shah builds modern, responsive web applications with React.js and Next.js for businesses that care about the details.',
  generator: 'v0.app',
  keywords: ['Amar Shah', 'frontend developer', 'React developer', 'Next.js developer', 'freelance frontend developer'],
  openGraph: {
    title: 'Amar Shah — Frontend Developer',
    description: 'Modern web applications that help businesses grow.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfcff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amar Shah',
  jobTitle: 'Frontend Developer',
  knowsAbout: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'REST APIs', '.NET', 'MySQL'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
