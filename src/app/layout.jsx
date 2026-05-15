import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "QurbaniMart – Premium Livestock Marketplace",
  description: "Find the finest cows and goats for Qurbani.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
     
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#1a4a2e",
                color: "#fdf6e3",
                fontFamily: "Georgia, serif",
                border: "1px solid #c9972a",
              },
              success: { iconTheme: { primary: "#c9972a", secondary: "#fdf6e3" } },
              error: { iconTheme: { primary: "#e53e3e", secondary: "#fdf6e3" } },
            }}
          />
          <Navbar />
          <main style={{ minHeight: "calc(100vh - 80px)" }}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}