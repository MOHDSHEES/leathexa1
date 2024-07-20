import { DM_Sans } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/materialdesignicons.css";
import "./assets/css/style.css";
import { MyProvider } from "../context";
import SessionProviderWrapper from "./components/functions/sessionProviderWrapper";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

// export const metadata = {
//   title: "Cartzio - Next Js Fashion Store eCommerce Tailwind CSS Landing Template",
//   description: "Next Js Fashion Store eCommerce Tailwind CSS Landing Template",
// };

export default function RootLayout({ children }) {
  return (
    // <SessionProvider>

    <html lang="en" className="light scroll-smooth dm_sans" dir="ltr">
      <body className={`${dm_sans.variable} dark:bg-slate-900`}>
        <SessionProviderWrapper>
          <MyProvider>
            <Navbar navClass="defaultscroll is-sticky" />
            {children}
            <Footer />
            <ScrollToTop />
          </MyProvider>
        </SessionProviderWrapper>
      </body>
    </html>

    // </SessionProvider>
  );
}
