import { Analytics } from '@vercel/analytics/next'
import { DM_Mono, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { profile } from '@/lib/profile'

const siteUrl = profile.portfolioUrl
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | React.js Developer | Next.js Developer | Frontend Engineer`,
  description: 'Professional React.js and Next.js Developer specializing in responsive web applications, dashboards, API integration and frontend development.',
  keywords: [profile.name, 'React.js Developer', 'Next.js Developer', 'Frontend Engineer', 'freelance web developer'],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${profile.name} | React.js Developer | Next.js Developer`,
    description: 'Responsive web applications, dashboards, API integration and frontend development for businesses worldwide.',
    url: siteUrl,
    siteName: profile.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | React.js Developer | Next.js Developer`,
    description: 'Frontend engineering for businesses that need clear, reliable web experiences.',
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
  '@graph': [
    {
      '@type': 'Person',
      name: profile.name,
      url: siteUrl,
      jobTitle: 'React.js and Next.js Developer',
      description: 'Frontend engineer specializing in responsive web applications, dashboards, API integration and frontend development.',
      knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'REST APIs', '.NET', 'MySQL'],
    },
    {
      '@type': 'WebSite',
      name: profile.name,
      url: siteUrl,
      description: `Professional portfolio of ${profile.name}, React.js and Next.js Developer.`,
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable} bg-background`}><head>{profile.linkedin && <link rel="me" href={profile.linkedin} />}{profile.github && <link rel="me" href={profile.github} />}</head>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
