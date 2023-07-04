import Script from "next/script";
import "./globals.css";

const title = "Steve McKeogh | Full Stack Software Engineer | TypeScript, Node.js, React, GraphQL, PostgreSQL | London, UK";
const colors = {
  primary: "#66bb6a",
};
const descriptions = {
  short: "Passionate and experienced Full Stack Software Engineer based in London. Specialising in TypeScript, Node.js, React, GraphQL, and PostgreSQL.",
  long: "Seasoned Full Stack Staff Software Engineer with over two decades of expertise. Specialising in TypeScript, Node.js, React, GraphQL, and PostgreSQL, with a well-rounded skill set for innovative web solutions.",
};

export const metadata = {
  title,
  description: descriptions.short,
  keywords: ["full stack software engineer", "TypeScript", "Node.js", "React", "GraphQL", "PostgreSQL"],
  authors: { name: "Steve McKeogh" },
  metadataBase: new URL("https://stevemckeogh.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: title,
  colorScheme: "dark",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: colors.primary,
  openGraph: {
    siteName: "Steve McKeogh",
    type: "website",
    locale: "en_GB",
    alternateLocale: "en_US",
    url: "https://stevemckeogh.com",
    title,
    description: descriptions.long,
    images: [
      {
        url: "https://stevemckeogh.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: descriptions.short,
        secureUrl: "https://stevemckeogh.com/opengraph-image.png",
      },
    ],
  },
  appleWebApp: {
    title: "Steve McKeogh",
  },
  manifest: "/manifest.json",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <html lang="en-GB">
      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JM5DSV4CTX');
        `}
      </Script>
      <body>
        {props.children}
      </body>
    </html>
  );
}


/* 
Short:
Passionate and experienced Full Stack Software Engineer based in London. Specialising in TypeScript, Node.js, React,
GraphQL, and PostgreSQL.

Long:
Seasoned Full Stack Staff Software Engineer with over two decades of expertise. Specialising in TypeScript, Node.js,
React, GraphQL, and PostgreSQL, with a well-rounded skill set for innovative web solutions.
*/