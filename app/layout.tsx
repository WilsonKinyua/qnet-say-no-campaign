import type { Metadata } from "next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Roboto } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/footer";
import { Languages } from "lucide-react";
import Link from "next/link";
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
        <div className="bg-orange py-2 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <p className="lg:text-base text-xs"><a target="_blank" href="https://wa.me/+233256630005" className="font-black">Report Violations at Whatsapp Hotline: <span className="font-black">+ 233 256630005</span></a></p>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="border-2 border-white rounded-full p-2 main-gradient"
              >
                <Languages className="h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link href="/">
                    English
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/fr">
                    French
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
