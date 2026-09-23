import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import "./hero-fix.css";
import "./bosch.css";
import "./about/about.css";
import "./products/conference-system/conference-system.css";
import "./components/header.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });

const assetRecoveryScript = `
(() => {
  const retryParam = '_asset_retry';
  const retryKey = 'synoveta:asset-retry:' + location.pathname;

  const isBuildAsset = (element) => {
    if (!element || !element.tagName) return false;
    const tag = element.tagName.toLowerCase();
    if (tag === 'link') {
      return element.rel === 'stylesheet' && element.href.includes('/_next/static/');
    }
    return tag === 'script' && element.src.includes('/_next/static/');
  };

  const retryWithFreshDocument = () => {
    if (sessionStorage.getItem(retryKey)) return;
    sessionStorage.setItem(retryKey, String(Date.now()));
    const url = new URL(location.href);
    url.searchParams.set(retryParam, String(Date.now()));
    location.replace(url.toString());
  };

  window.addEventListener('error', (event) => {
    if (isBuildAsset(event.target)) retryWithFreshDocument();
  }, true);

  window.addEventListener('load', () => {
    const stylesheets = Array.from(
      document.querySelectorAll('link[rel=stylesheet]')
    ).filter((stylesheet) => stylesheet.href.includes('/_next/static/'));
    const missingStylesheet = stylesheets.some((stylesheet) => !stylesheet.sheet);

    if (missingStylesheet) {
      retryWithFreshDocument();
      return;
    }

    sessionStorage.removeItem(retryKey);
    const url = new URL(location.href);
    if (url.searchParams.has(retryParam)) {
      url.searchParams.delete(retryParam);
      history.replaceState(history.state, '', url.toString());
    }
  });
})();
`;

export const metadata = {
  metadataBase: new URL("https://synoveta.com"),
  applicationName: "Synoveta Technology Co., Ltd.",
  title: "Synoveta Technology Co., Ltd.",
  description: "European-standard technology solutions, assembled in Italy and China and supplied worldwide.",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: assetRecoveryScript }} />
      </head>
      <body
        className={`${inter.variable} ${rajdhani.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
