import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

// GeistSans and GeistMono are imported objects, not functions to be called.
// Their .variable property directly gives the CSS variable name.

export const metadata: Metadata = {
  title: 'Infonuagix AI Assistant',
  description: 'Your partner in vibe coding for chatbot, web and mobile development.',
};

export default function RootLayout({
  children,
}: Readonly<{
 children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        Apply the CSS variables for GeistSans and GeistMono to the html or body tag.
        The globals.css file already uses var(--font-geist-sans).
      */}
      <head>
        <script
          src="https://assets.dappier.com/widget/dappier-loader.min.js"
          widget-id="wd_01jw1saj4gf0dszz8p34tmm20p"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
        <SiteHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <SiteFooter />
        <Toaster />

        {/* Google tag (gtag.js) using next/script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17103161663"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17103161663');
            gtag('event', 'conversion', {'send_to': 'AW-17103161663/5fs0CLP27MsaEL-Stts_'});
          `}
        </Script>
      </body>
    </html>
  );
}