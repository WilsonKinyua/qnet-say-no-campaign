"use client"

import Navbar from "@/components/navbar";
import { Hand, Handshake, Ribbon } from "lucide-react";
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
                className="h-28 object-cover cursor-pointer"
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
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold text-center my-10 text-orange"
        >
          Mobilizing Against Human Trafficking
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center bg-white rounded-xl">
          <p className="p-10">
            Our campaign has a singular goal: To mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.
          </p>
          <Image
            src="https://images.pexels.com/photos/3907763/pexels-photo-3907763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="picture of saying stop human trafficking"
            width={150}
            height={150}
            className="h-full w-full lg:rounded-r-xl object-cover cursor-pointer"
            loader={({ src }) => src}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10">
          <Image
            src="/img/1.jpg"
            alt="Fostering Collaboration"
            width={150}
            height={150}
            className="h-full w-full rounded-xl object-cover cursor-pointer"
            loader={({ src }) => src}
          />
          <div className="bg-white rounded-xl text-center space-y-6 border border-mainBlue transition duration-300 p-5">
            <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300 mx-auto">
              <Handshake className="h-8 w-8" />
            </div>
            <p className="font-bold text-xl text-mainBlue">
              Fostering Collaboration
            </p>
            <p>
              Uniting stakeholders, communities, and authorities fosters shared responsibility. Our collective front is crucial for combating pervasive issues effectively.
            </p>
          </div>
          <Image
            src="/img/say-no-campaign-2023-1.svg"
            alt="Raising Awareness"
            width={150}
            height={150}
            className="h-full w-full rounded-xl object-cover cursor-pointer"
            loader={({ src }) => src}
          />
          <div className="bg-white rounded-xl text-center space-y-6 border border-mainBlue transition duration-300 p-5">
            <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300 mx-auto">
              <Ribbon className="h-8 w-8" />
            </div>
            <p className="font-bold text-xl text-mainBlue">
              Raising Awareness
            </p>
            <p>
              We strive to educate individuals about the risks associated with fraudulent job offers, emphasizing the deceptive tactics employed by scammers.            </p>
          </div>
          <Image
            src="/img/2.svg"
            alt="Preventing Exploitation"
            width={150}
            height={150}
            className="h-full w-full rounded-xl object-cover cursor-pointer"
            loader={({ src }) => src}
          />
          <div className="bg-white rounded-xl text-center space-y-6 border border-mainBlue transition duration-300 p-5">
            <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300 mx-auto">
              <Hand className="h-8 w-8" />
            </div>
            <p className="font-bold text-xl text-mainBlue">
              Preventing Exploitation
            </p>
            <p>
              We aim to reduce victims of illegal migration scams, creating a safer environment through vigilance and education for all individuals.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
