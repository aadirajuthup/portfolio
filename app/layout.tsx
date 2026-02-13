import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Define the SVG here for the client-side script
const clipboardIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Define SVG globally for the script below */}
      <Script id="copy-icon-svg" strategy="beforeInteractive">
        {`const clipboardIconSVG = \`${clipboardIconSVG}\`;`}
      </Script>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <SpeedInsights />
            <Analytics />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        {/* Updated script for copy functionality with wrapper div */}
        <Script id="copy-code-script" strategy="afterInteractive">
          {`
            window.copyCode = (button) => {
              const wrapper = button.closest('.code-block-wrapper'); // Find the wrapper div
              if (!wrapper) return;
              const preElement = wrapper.querySelector('pre'); // Find the pre inside the wrapper
              if (!preElement) return;
              // Get text content, handling potential line breaks/formatting within code spans
              const codeContent = preElement.innerText || preElement.textContent || '';
              if (codeContent) {
                navigator.clipboard.writeText(codeContent.trim()).then(() => {
                  // Use innerHTML to set button content (simpler than targeting specific span)
                  button.innerHTML = "Copied!";
                  button.disabled = true;
                  setTimeout(() => {
                    // Restore SVG icon using innerHTML
                    button.innerHTML = clipboardIconSVG;
                    button.disabled = false;
                  }, 2000);
                }).catch(err => {
                  console.error('Failed to copy text: ', err);
                  button.innerHTML = "Error"; // Show error in button
                   setTimeout(() => {
                    button.innerHTML = clipboardIconSVG; // Restore icon
                  }, 2000);
                });
              }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
