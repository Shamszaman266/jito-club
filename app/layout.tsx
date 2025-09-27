// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Landing Page",
  description: "A modern landing page built with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="className">
          <Navbar />

      
        {children}
        <Footer/>
        
        </div>
        
         
      </body>
    </html>
  );
}
