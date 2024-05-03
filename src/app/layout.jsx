import "./globals.css";
import ReduxProvider from "@/Contexts/ReduxProvider/ReduxProvider";
import Navbar from "@/app/components/Navbar/Navbar";

import { League_Spartan } from "next/font/google";
import MUIContextProvider from "@/Contexts/MUIContext/MUIContext";
import AuthProvider from "@/Contexts/Auth/AuthProvider";
import ToastProvider from "@/Contexts/ToastLoading/ToastLoadingProvider";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Course Craft Academy",
  description:
    "Course Craft Academy is a platform for learning and teaching online courses. We offer a wide range of courses in various categories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ToastProvider>
            <AuthProvider>
              <MUIContextProvider>
                <Navbar />
                {children}
              </MUIContextProvider>
            </AuthProvider>
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
