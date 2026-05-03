import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Content Freshness Alerter",
  description: "Alert when blog content becomes outdated. Monitor posts for stale info, broken links, and deprecated code examples."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="72d96492-6ca0-48f9-872d-41c79b1b7845"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
