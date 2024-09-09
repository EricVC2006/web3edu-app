import "../styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { AppSkeleton } from "@/components/ui/AppSkeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3EduBrasil",
  description:
    "Web3EduBrasil é uma plataforma de ensino descentralizada que facilita o aprendizados de tecnologias web3.",
  openGraph: {
    title: "Web3EduBrasil - Aprenda sobre Web3 e conquiste NFTs únicas.",
    description:
      "Web3EduBrasil é uma plataforma de ensino descentralizada que facilita o aprendizados de tecnologias web3.",
    url: process.env.NEXT_PUBLIC_APP_LINK,
    siteName: "Web3EduBrasil",
    // images: [
    //     {
    //         url: "/visuals/starknetquest.webp",
    //         width: 680,
    //         height: 680,
    //     },
    // ],
    locale: "pt_BR",
    alternateLocale: "en_US",
    countryName: "Brazil",
    type: "website",
  },
  twitter: {
    siteId: "@web3edubrasil",
    site: "@web3edubrasil",
    card: "summary_large_image",
  },
  creator: "Web3EduBrasil Developers",
  publisher: "Web3EduBrasil",
  keywords: [
    "web3",
    "blockchain",
    "nft",
    "solidity",
    "bitcoin",
    "educacao",
    "web3educacao",
    "web3edu",
    "web3edubrasil",
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <div className="flex flex-col h-full">
          <NavBar />
          <AppSkeleton>{children}</AppSkeleton>
        </div>
      </body>
    </html>
  );
}