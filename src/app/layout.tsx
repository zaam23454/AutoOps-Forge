import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Inter, Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import { theme } from "@/theme/theme";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AutoOps Forge | DevOps, Automation & Custom Software Solutions",
  description:
    "AutoOps Forge builds custom software, automates workflows, and deploys production-ready systems using DevOps-backed and agentic engineering.",
  metadataBase: new URL("https://autoopsforge.com"),
  openGraph: {
    title: "AutoOps Forge | DevOps, Automation & Custom Software Solutions",
    description:
      "Custom software, automation-first systems, and DevOps-backed delivery for modern teams.",
    siteName: "AutoOps Forge",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${shareTechMono.variable}`}
    >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
