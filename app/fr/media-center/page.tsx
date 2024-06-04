"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Navbar from "@/components/fr-navbar";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Play } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Billboards, Comic, radioJingles } from '@/lib/data';

export default function MediaCenter() {
  return (
    <main className='mb-40'>
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
            <h1 className="lg:text-6xl text-2xl text-center lg:py-32 py-20 font-black text-white">Media Centre</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Tabs defaultValue="image" className="-mt-14">
          <TabsList className="space-x-10">
            <TabsTrigger value="image">Image Downloads</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="image">
            <Tabs defaultValue="billboards" className="my-10">
              <TabsList className="mb-10 lg:space-x-10">
                <TabsTrigger value="billboards">Billboards</TabsTrigger>
                <TabsTrigger value="comic-pamphlet">Comic Pamphlet</TabsTrigger>
                <TabsTrigger value="radio-jingles">Radio Jingles</TabsTrigger>
              </TabsList>
              <TabsContent value="billboards">
                <>
                  <div className="lg:flex gap-5">
                    <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Burkina Faso</p>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      navigation={true}
                      modules={[Navigation, Pagination, Autoplay]}
                      className="mySwiper lg:w-3/4 w-full"
                    >
                      {Billboards.burkinafaso.map((burkinafaso, i) => (
                        <SwiperSlide key={i} className="mb-14">
                          <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                            <a download={burkinafaso} href={burkinafaso}>
                              <Image
                                src={"/" + burkinafaso}
                                alt="picture of saying stop human trafficking"
                                width={150}
                                height={150}
                                className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                                loader={({ src }) => src}
                              />
                              <div className="p-5 flex justify-between items-center">
                                <p>
                                  Telécharger
                                </p>
                                <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                  <Download className="text-white" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <hr className='border-t-2 border-gray-200 mb-5' />
                  <div className="lg:flex gap-5">
                    <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Nigeria</p>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      navigation={true}
                      modules={[Navigation, Pagination, Autoplay]}
                      className="mySwiper lg:w-3/4 w-full"
                    >
                      {Billboards.nigeria.map((nigeria, i) => (
                        <SwiperSlide key={i} className="mb-14">
                          <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                            <a download={nigeria} href={nigeria}>
                              <Image
                                src={"/" + nigeria}
                                alt="picture of saying stop human trafficking"
                                width={150}
                                height={150}
                                className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                                loader={({ src }) => src}
                              />
                              <div className="p-5 flex justify-between items-center">
                                <p>
                                  Telécharger
                                </p>
                                <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                  <Download className="text-white" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <hr className='border-t-2 border-gray-200 mb-5' />
                  <div className="lg:flex gap-5">
                    <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Senegal</p>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      navigation={true}
                      modules={[Navigation, Pagination, Autoplay]}
                      className="mySwiper lg:w-3/4 w-full"
                    >
                      {Billboards.senegal.map((senegal, i) => (
                        <SwiperSlide key={i} className="mb-14">
                          <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                            <a download={senegal} href={senegal}>
                              <Image
                                src={"/" + senegal}
                                alt="picture of saying stop human trafficking"
                                width={150}
                                height={150}
                                className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                                loader={({ src }) => src}
                              />
                              <div className="p-5 flex justify-between items-center">
                                <p>
                                  Telécharger
                                </p>
                                <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                  <Download className="text-white" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <hr className='border-t-2 border-gray-200 mb-5' />
                </>
              </TabsContent>
              <TabsContent value="comic-pamphlet">
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Senegal</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {Comic.Senegal.map((senegal, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                          <a download={senegal} href={senegal}>
                            <Image
                              src={senegal}
                              alt="picture of saying stop human trafficking"
                              width={150}
                              height={150}
                              className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                              loader={({ src }) => src}
                            />
                            <div className="p-5 flex justify-between items-center">
                              <p>
                                Telécharger
                              </p>
                              <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                <Download className="text-white" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Burkinafaso</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {Comic.Burkinafaso.map((burkinafaso, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                          <a download={burkinafaso} href={burkinafaso}>
                            <Image
                              src={burkinafaso}
                              alt="picture of saying stop human trafficking"
                              width={150}
                              height={150}
                              className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                              loader={({ src }) => src}
                            />
                            <div className="p-5 flex justify-between items-center">
                              <p>
                                Telécharger
                              </p>
                              <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                <Download className="text-white" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Nigeria</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {Comic.Nigeria.map((nigeria, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl">
                          <a download={nigeria} href={nigeria}>
                            <Image
                              src={nigeria}
                              alt="picture of saying stop human trafficking"
                              width={150}
                              height={150}
                              className="lg:h-60 h-96 w-full rounded-t-xl object-cover cursor-pointer"
                              loader={({ src }) => src}
                            />
                            <div className="p-5 flex justify-between items-center">
                              <p>
                                Telécharger
                              </p>
                              <div className="bg-mainBlue text-white hover:bg-orange transition duration-300 p-2 rounded-full">
                                <Download className="text-white" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
              </TabsContent>
              <TabsContent value="radio-jingles">
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Senegal</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 50000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {radioJingles.Senegal.map((senegal, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl p-2">
                          <p className="uppercase py-4 lg:h-20 h-full">
                            {senegal.name}
                          </p>
                          <audio controls className='border-2 border-blue-500 rounded-full'>
                            <source src={senegal.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Burkinafaso</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 50000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {radioJingles.Burkinafaso.map((burkinafaso, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl p-2">
                          <p className="uppercase py-4 lg:h-20 h-full">
                            {burkinafaso.name}
                          </p>
                          <audio controls className='border-2 border-blue-500 rounded-full'>
                            <source src={burkinafaso.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
                <div className="lg:flex gap-5">
                  <p className="lg:w-1/4 w-full mb-10 text-xl font-black">Nigeria</p>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper lg:w-3/4 w-full"
                  >
                    {radioJingles.Nigeria.map((nigeria, i) => (
                      <SwiperSlide key={i} className="mb-14">
                        <div className="bg-white hover:shadow-sm transition duration-300 rounded-xl p-2">
                          <p className="uppercase py-4 lg:h-20 h-full">
                            {nigeria.name}
                          </p>
                          <audio controls className='border-2 border-blue-500 rounded-full'>
                            <source src={nigeria.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className='border-t-2 border-gray-200 mb-5' />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/CqrS5HU5kSQ?list=PLkTu8F20JaWWNIVEFdyfGArLR4v_mULO8"
                  title="Be like Kobi | MAMA&#39;S 10 Red Lines to Remember"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/CqrS5HU5kSQ?list=PLkTu8F20JaWWNIVEFdyfGArLR4v_mULO8"
                  title="Be like Kobi | MAMA&#39;S 10 Red Lines to Remember"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/WT9vi1eoIl8"
                  title="Protect Yourself in this Digital Age with eKYC"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/kxINI2orFGA"
                  title="What&#39;s The Truth Behind The QNET Scam?"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/HxFv6tTkiV4"
                  title="QNET Answers | Is QNET Legal or a Scam??"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/5CKW5AwoSJQ"
                  title="Say No to Job Scams | QNET helps a young graduate avoid being scammed"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}