"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { ArrowRight, SquarePlay } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Insights() {
  return (
    <main className="mb-52">
      <div className="bg-[url('/img/insights.svg')] h-full w-full bg-no-repeat bg-cover bg-center lg:rounded-b-[4rem]">
        <div className="main-gradient-opacity-70 lg:rounded-b-[4rem] lg:pb-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center pt-5">
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
            <h1 className="lg:text-6xl text-2xl text-center lg:py-32 py-20 font-black text-white">Insight & Updates</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="my-10">
          <TabsList className="mb-10 space-x-10 flex justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="french">French</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="border border-gray-300 p-5 rounded-xl">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl">
                  <Link href="/">
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
          </TabsContent>
          <TabsContent value="english" className="border border-gray-300 p-5 rounded-xl">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl">
                  <Link href="/">
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
          </TabsContent>
          <TabsContent value="french" className="border border-gray-300 p-5 rounded-xl">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl">
                  <Link href="/">
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
                        French
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
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}