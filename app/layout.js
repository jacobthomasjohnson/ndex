import "./globals.css";

import Header from "@/components/Header";

export const metadata = {
  title: "Nature Deck Exchange",
  description: "Online Interactive Trading Card Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
