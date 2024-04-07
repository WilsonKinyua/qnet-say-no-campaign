"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { ArrowRight, SquarePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Resources as ResourcesList } from '@/lib/fake-backend';

export default function Resources() {
  return (
    <main className="mb-52">
      <div className="bg-[url('/img/insights.svg')] h-full w-full bg-no-repeat bg-cover bg-center lg:rounded-b-[4rem]">
        <div className="main-gradient-opacity-70 lg:rounded-b-[4rem] lg:pb-10">
          <div className="container mx-auto">
            <div className="flex lg:gap-20 lg:justify-normal justify-between items-center pt-5">
              <Link href="/">
                <Image
                  src="/img/say-no-campaign-logo_white.svg"
                  alt="Qnet Logo"
                  width={150}
                  height={150}
                  className="h-28 object-contain cursor-pointer"
                />
              </Link>
              <Navbar />
            </div>
            <h1 className="lg:text-6xl text-2xl text-center lg:py-32 py-20 font-black text-white">Resources</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="my-10">
          Welcome to the Resources section, a vital hub with educational materials dedicated to empowering individuals to safeguard against human trafficking. Explore an array of informative resources curated to raise awareness, educate, and equip you with the knowledge needed to recognize and prevent human trafficking.
        </p>
        <div className="grid grid-cols-4 gap-5 my-10">
          {ResourcesList.map((insight, i) => (
            <div key={i} className="bg-white rounded-xl mb-16">
              <a target='_blank' href={insight.url}>
                <Image
                  src={insight.img}
                  alt={insight.title}
                  width={150}
                  height={150}
                  className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                  loader={({ src }) => src}
                />
                <div className="p-5">
                  <h4 className="text-base font-semibold py-3 hover:text-orange transition duration-300 h-20">
                    {insight.title}
                  </h4>
                  <hr className="border-b border-orange mb-3" />
                  <Button
                    className="rounded-full bg-mainBlue text-white hover:bg-orange transition duration-300"
                  >
                    Read More <ArrowRight className="h-4 w-4 inline-block" />
                  </Button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}