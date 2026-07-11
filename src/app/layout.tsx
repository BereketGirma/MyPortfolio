import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import { withBasePath } from "@/lib/utils";
import "./globals.css";

// Display / headings
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Body copy
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Mono / meta labels
const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bereket Girma — Software Engineer",
  description:
    "Bereket Girma — full-stack developer & computer-science student. Portfolio of selected work, experience, and skills.",
};

// Applies the saved theme before first paint to avoid a light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem("bg-theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href={withBasePath("/icon.svg")} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable} font-body bg-bg text-ink text-[17px] leading-[1.6] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
