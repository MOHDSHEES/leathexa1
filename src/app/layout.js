import { DM_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/scss/tailwind.scss";
import "./assets/css/style.css";
import "./assets/css/materialdesignicons.css";

import { MyProvider } from "../context";
import SessionProviderWrapper from "./components/functions/sessionProviderWrapper";
import { getServerSession } from "next-auth";
import userModel from "@/models/userModels";
import dbConnect from "@/lib/mongoose";

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
    template: "%s - Leathexa",
    default: "Leathexa",
  },
  description: "An E-commerse Website",
  // generator: "Next.js",
  applicationName: "Leathexa",
  referrer: "origin-when-cross-origin",
  keywords: ["Leathexa", "leathexa", "LEATHEXA"],
  authors: [
    { name: "Mohammad Shees" },
    { name: "Deepak Kumar" },
    { name: "Anas Adnan" },
  ],
  creator: "Leathexa",
  publisher: "Leathexa",
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
    locale: "en_US",
    type: "website",
  },
};

async function fetchUserAndCsrfToken() {
  const session = await getServerSession(); // Fetch session details (replace with your auth logic)
  if (!session) return null;
  await dbConnect();
  const resu = await userModel.findOne(
    { email: session.user.email, status: true },
    { password: 0 }
  );
  // const response = await axios.post("/api/user/getDetails", {
  //   email: session.user.email,
  // });
  return resu;
}

export default async function RootLayout({ children }) {
  const data = await fetchUserAndCsrfToken();
  // if (response && response.data && response.data.status === 200) {
  //   setUser(response.data.data);
  // } else {
  //   signOut();
  // }
  return (
    // <SessionProvider>

    <html lang="en" className="light scroll-smooth dm_sans" dir="ltr">
      <body className={`${dm_sans.variable} dark:bg-slate-900`}>
        <SessionProviderWrapper>
          <MyProvider initialUser={JSON.parse(JSON.stringify(data))}>
            {children}
          </MyProvider>
        </SessionProviderWrapper>
      </body>
    </html>

    // </SessionProvider>
  );
}
