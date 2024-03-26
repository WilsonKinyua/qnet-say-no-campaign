import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/footer";

const inter = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qnet Say No Campaign",
  description: "Empowering Communities, Eradicating Exploitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-orange py-2 text-white">
          <div className="container mx-auto flex justify-center">
            <p>Report Violations at Whatsapp Hotline: <a href="tel:+233256630005" className="font-black text-lg">+ 233 256630005</a></p>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
