import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Board Game Explorer",
  description: "Board Game Explorer demo website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
