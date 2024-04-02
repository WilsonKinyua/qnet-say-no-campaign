"use client"

import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hand, Handshake, Ribbon, SquarePlay } from "lucide-react";
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
        <div className="bg-white rounded-xl">
          <div className="main-gradient rounded-xl">
            <div className="bg-gradient-black rounded-xl">
              <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <Image
                  src="/img/man.svg"
                  alt="picture of saying stop human trafficking"
                  width={150}
                  height={150}
                  className="h-full w-full lg:rounded-r-xl object-cover"
                  loader={({ src }) => src}
                />
                <div className="space-y-10 text-white bg-gradient lg:p-16 p-5 rounded-r-xl">
                  <h2 className="lg:text-3xl text-xl font-bold my-10">
                    Empowering Communities, Eradicating Exploitation
                  </h2>
                  <p className="font-medium">
                    This initiative emerges from a profound understanding of the urgent need to combat the growing trend of fake job scams that exploit the good name of reputable businesses to perpetrate human trafficking and other forms of illegal cross-border activities.
                  </p>
                  <p className="font-medium">
                    We believe that no one actor can tackle this challenge on their own. This is why the Say NO! campaign is galvanizing the efforts of private, public and multilateral stakeholders to sensitize and support the communities that are most vulnerable to these vices in Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center my-10 text-orange">
            Campaign Partners
          </h2>
          <div className="lg:flex justify-center pb-10">
            <div className="lg:border-t lg:border-r border-orange p-10 lg:w-1/3">
              <h4 className="text-gray-400 mb-5 text-sm uppercase">Public service campaign by:</h4>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/logos/1.svg"
                  alt="qnet logo"
                  width={150}
                  height={150}
                  className="h-16 object-contain cursor-pointer hover:border-orange border transition duration-300 border-gray-100 rounded-sm"
                  loader={({ src }) => src}
                />
              </a>
            </div>
            <div className="border-t border-orange p-10 lg:w-1/3">
              <h4 className="text-gray-400 mb-5 text-sm uppercase">Supported by:</h4>
              <div className="flex gap-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/4.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-16 object-contain cursor-pointer hover:border-orange border transition duration-300 rounded-sm"
                    loader={({ src }) => src}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/2.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-16 object-contain cursor-pointer hover:border-orange border transition duration-300 rounded-sm"
                    loader={({ src }) => src}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/3.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-16 object-contain cursor-pointer hover:border-orange border transition duration-300 rounded-sm"
                    loader={({ src }) => src}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-between mb-10">
            <h2 className="text-2xl font-bold text-orange">
              Insights & Updates
            </h2>
            <Link href="/" className="underline hover:text-orange">
              More Updates <ArrowRight className="h-4 w-4 inline-block" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="bg-white rounded-xl">
                <Link key={i} href="/">
                  <Image
                    src="/img/say-no-campaign-2023-1.svg"
                    alt="picture of saying stop human trafficking"
                    width={150}
                    height={150}
                    className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                    loader={({ src }) => src}
                  />
                  <div className="p-5">
                    <p className="text-xs">
                      The Independent Nigeria
                    </p>
                    <hr className="border-b border-orange mt-3" />
                    <Badge className="bg-orange hover:bg-orange text-white gap-2 rounded-none rounded-b-sm mb-3">
                      <SquarePlay
                        className="h-4 w-4"
                      />
                      English
                    </Badge>
                    <h4 className="text-base font-semibold py-3 hover:text-orange transition duration-300">
                      QNET Launches ‘Say No’ Campaign to Strengthen Fight Against Human Trafficking
                    </h4>
                    <hr className="border-b border-orange mb-3" />
                    <Button
                      className="rounded-full bg-mainBlue text-white hover:bg-orange transition duration-300"
                    >
                      Read More <ArrowRight className="h-4 w-4 inline-block" />
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
