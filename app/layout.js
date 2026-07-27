import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { personal, siteMeta } from "@/lib/data";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://raveenesshan.dev"),
  title: {
    default: siteMeta.title,
    template: `%s · ${personal.name}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a12" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Cloud Engineer",
  description: siteMeta.description,
  email: personal.email,
  sameAs: [personal.linkedin, personal.github],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sathyabama Institute of Science and Technology",
  },
  knowsAbout: [
    "Cloud Computing",
    "Amazon Web Services",
    "Python",
    "Flask",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-[#0b0e17] focus:font-mono focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
