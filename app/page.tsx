import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-80">
      <div className="bg-mainBlue">
        <div className="container mx-auto">
          <div className="flex justify-between items-center pt-5">
            <Link href="/">
              <Image
                src="/img/say-no-campaign-logo_white.svg"
                alt="Qnet Logo"
                width={150}
                height={150}
                className="h-28"
              />
            </Link>
            <Navbar />
          </div>
          <div className="w-full h-full py-10 ">
            <video
              className="border-gradient rounded-xl"
              preload="auto" >
              <source src="/videos/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
