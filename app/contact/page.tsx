"use client"
import Navbar from "@/components/navbar";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main>
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
            <h1 className="lg:text-6xl text-2xl text-center lg:py-32 py-20 font-black text-white">Get In Touch</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 my-10 gap-5 items-center">
          <div>
            <h2 className="text-3xl font-bold my-10 text-gradient">CONTACT US</h2>
            <p>
              For general inquiries, feedback, or collaboration proposals, please fill out our contact form. We value your input and are eager to explore opportunities for partnership and engagement.
            </p>
            <p className="my-10">
              If you know someone who has fallen victim to fake job scams, human trafficking, or illegal migration, send us a message on our WhatsApp hotline or send an email to:
            </p>
            <div className="lg:flex bg-mainBlue text-white rounded-xl p-4 items-center lg:space-x-5 lg:space-y-0 space-y-5 mt-5">
              <div className="flex items-center space-x-3">
                <span className="bg-white text-black rounded-full p-2 border-8 border-gray-200 hover:bg-orange hover:text-white transition duration-300">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:network.integrity@qnet.net">network.integrity@qnet.net</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-white text-black rounded-full p-2 border-8 border-gray-200 hover:bg-orange hover:text-white transition duration-300">
                  <PhoneCall className="w-4 h-4" />
                </span>
                <a href="tel:+233256630005">+ 233 256 630 005</a>
              </div>
            </div>
          </div>
          <div className="form-card p-14 rounded-xl">
            <form className="w-full max-w-lg"
              onSubmit={(e) => {
                e.preventDefault()

              }}
            >
              <div className="flex flex-wrap mb-6">
                <div className="w-full mb-10">
                  <label
                    className="block tracking-wide text-gray-500 required"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="block outline-none w-full rounded mb-1 placeholder:text-xs placeholder:text-gray-400 text-fern-green"
                    type="text"
                    name="fullName"
                    id="full-name"
                    autoFocus
                  />
                </div>
                <div className="w-full mb-10">
                  <label
                    className="block tracking-wide text-gray-500 required"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="block outline-none w-full rounded mb-1 placeholder:text-xs placeholder:text-gray-400 text-fern-green"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="w-full mb-10">
                  <label
                    className="block tracking-wide text-gray-500 required"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <input
                    className="block outline-none w-full rounded mb-1 placeholder:text-xs placeholder:text-gray-400 text-fern-green"
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>
                {/* text area */}
                <div className="w-full mb-10">
                  <label
                    className="block tracking-wide text-gray-500 required"
                    htmlFor="grid-first-name"
                  >
                    Message
                  </label>
                  <textarea
                    className="block outline-none w-full rounded mb-1 text-fern-green"
                    name="message"
                    id="message"
                    cols={10}
                    rows={1}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange text-white py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}