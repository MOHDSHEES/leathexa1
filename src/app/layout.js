import { DM_Sans } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/materialdesignicons.css";
import "./assets/css/style.css";
import { MyProvider } from "../context";
import SessionProviderWrapper from "./components/functions/sessionProviderWrapper";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

// export const metadata = {
//   title: "Cartzio - Next Js Fashion Store eCommerce Tailwind CSS Landing Template",
//   description: "Next Js Fashion Store eCommerce Tailwind CSS Landing Template",
// };

export const metadata = {
  title: {
    template: "%s | Leathexa",
    default: "Leathexa",
  },
  description: "An E-commerse Website",
  generator: "Next.js",
  applicationName: "Leathexa",
  referrer: "origin-when-cross-origin",
  keywords: ["Leathexa", "leathexa", "LEATHEXA"],
  authors: [{ name: "Mohammad Shees" }],
  creator: "Mohammad Shees",
  publisher: "Mohammad Shees",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Leather",
  metadataBase: new URL("https://www.leathexa.com/"),
  openGraph: {
    title: "Leathexa",
    description: "An E-commerse Website",
    url: "https://www.leathexa.com/",
    siteName: "leathexa.com",
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    // <SessionProvider>

    <html lang="en" className="light scroll-smooth dm_sans" dir="ltr">
      <body className={`${dm_sans.variable} dark:bg-slate-900`}>
        <SessionProviderWrapper>
          <MyProvider>{children}</MyProvider>
        </SessionProviderWrapper>
      </body>
    </html>

    // </SessionProvider>
  );
}
