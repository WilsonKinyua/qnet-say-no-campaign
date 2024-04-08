"use client"
import Navbar from "@/components/navbar";
import { FAQs } from "@/lib/data";
import { CirclePlus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Insights() {
  const [openQuestions, setOpenQuestions] = useState(1);
  return (
    <main className="mb-52">
      <div className="bg-[url('/img/insights.svg')] h-full w-full bg-no-repeat bg-cover bg-center lg:rounded-b-[4rem]">
        <div className="main-gradient-opacity-70 lg:rounded-b-[4rem] lg:pb-10">
          <div className="container mx-auto">
            <div className="flex lg:gap-40 lg:justify-normal justify-between items-center pt-5">
              <Link href="/">
                <Image
                  src="/img/say-no-campaign-logo_white.svg"
                  alt="Qnet Logo"
                  width={150}
                  height={150}
                  className="lg:h-28 h-20 object-contain cursor-pointer"
                />
              </Link>
              <Navbar />
            </div>
            <h1 className="lg:text-6xl text-2xl text-center lg:py-32 py-20 font-black text-white">Tips & FAQs</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center my-16">
          <h2 className="text-3xl font-bold text-center my-10 text-orange">Tips & FAQs</h2>
          <p className="text-gray-600 text-lg">
            Get to discover more about the “Say NO” Campaign
          </p>
        </div>
        <div className="grid grid-cols-1">
          {FAQs.map((faq, i) => (
            <div key={i} className="p-4 bg-white mb-5 rounded-xl hover:cursor-pointer">
              <div className="flex">
                <div className="mr-5">
                  {openQuestions === i + 1 ? (
                    <Minus className="text-gray-300 cursor-pointer" />
                  ) : (
                    <CirclePlus className="text-gray-300 cursor-pointer justify-end" />
                  )}
                </div>
                <div className="flex-auto">
                  <h2
                    className="font-black"
                    onMouseEnter={() => setOpenQuestions(i + 1)}
                    onClick={() => setOpenQuestions(openQuestions === i + 1 ? 0 : i + 1)}
                  >
                    {faq.question}
                  </h2>
                  <CSSTransition
                    in={(openQuestions === null && i + 1 === i + 1) || openQuestions === i + 1}
                    timeout={500}
                    classNames="slide-down"
                    unmountOnExit
                  >
                    <div
                      className="py-5 text-gray-500"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </CSSTransition>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}