import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor License Expiration Tracker',
  description: 'Track contractor license renewals to avoid violations. Monitor licenses, certifications, and insurance expiration dates with automated renewal reminders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4473f5e1-fd91-4db5-8e13-ff5474779226"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
