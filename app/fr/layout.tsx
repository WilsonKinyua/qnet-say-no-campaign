import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../styles/globals.scss";
import Footer from "@/components/ft-footer";
import Link from "next/link";
import Image from "next/image";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="bg-orange py-2 text-white sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <p className="lg:text-base text-xs"><a target="_blank" href="https://wa.me/+233256630005" className="font-black">Signalez les violations à la ligne d&apos;assistance WhatsApp <span className="font-black">+ 233 256630005</span></a></p>
            <Link href="/fr">
              <Image
                src="/img/british.jpg"
                alt="Qnet Say No Campaign"
                width={100}
                height={100}
                className="h-10 w-10 border-2 border-white rounded-full"
              />
            </Link>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
