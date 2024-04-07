"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Masonry from 'react-masonry-css'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, CirclePlay, SquarePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Cards from '@/components/cards';
import { Insights } from '@/lib/fake-backend';

export default function Home() {
  return (
    <main className="mb-52">
      <div className="bg-mainBlue lg:rounded-b-[4rem] lg:pb-10">
        <div className="container mx-auto">
          <div className="flex lg:gap-40 lg:justify-normal justify-between items-center pt-5">
            <Link href="/">
              <Image
                src="/img/say-no-campaign-logo_white.svg"
                alt="Qnet Logo"
                width={150}
                height={150}
                className="lg:h-28 h-10 object-contain cursor-pointer"
              />
            </Link>
            <Navbar />
          </div>
          <div className="flex justify-center my-10">
            <div className="bg-[url('/img/bg-video.svg')] h-full w-full bg-no-repeat bg-contain bg-center flex justify-center items-center">
              <Dialog>
                <DialogTrigger><CirclePlay className="h-20 w-20 text-white hover:text-orange transition duration-500 cursor-pointer lg:my-64 my-20" /></DialogTrigger>
                <DialogContent
                  className='lg:w-[90%] lg:h-[90%] h-full w-full flex justify-center items-center m-0 p-0'
                >
                  <DialogHeader>
                    <DialogDescription>
                      <video
                        preload="auto"
                        controls
                        autoPlay
                      >
                        <source src="/videos/1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold text-center my-10 text-gradient"
        >
          Mobilizing Against Human Trafficking
        </h2>
        <div className="bg-[url('/img/bg-shape.svg')] bg-no-repeat bg-contain h-full w-full lg:block hidden">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-6">
            <p className="p-5">
              Our campaign has a singular goal: To mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.
            </p>
            <Image
              src="/img/stop.svg"
              alt="picture of saying stop human trafficking"
              width={150}
              height={150}
              className="h-[90%] w-[80%] rounded-r-xl object-contain cursor-pointer"
              loader={({ src }) => src}
            />
          </div>
        </div>
        <div className="bg-white lg:hidden block mb-5 rounded-xl">
          <Image
            src="/img/stop-human-trafficking-2.svg"
            alt="picture of saying stop human trafficking"
            width={150}
            height={150}
            className="h-full w-full rounded-t-xl object-cover cursor-pointer"
            loader={({ src }) => src}
          />
          <p className="p-5">
            Our campaign has a singular goal: To mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.
          </p>
        </div>
        <div className="flex">
          <div className='lg:block hidden'>
            <Masonry
              className="flex mt-5 h-full"
              columnClassName="my-masonry-grid_column"
              breakpointCols={{
                default: 3,
                1100: 2,
                700: 1,
              }}
            >
              <Image
                src="/img/1.jpg"
                alt="Fostering Collaboration"
                width={150}
                height={150}
                className="h-72 w-full mb-5 rounded-xl object-cover"
                loader={({ src }) => src}
              />
              <div className="bg-white mb-5 mx-5 py-16 rounded-xl space-y-6 transition duration-300 p-5">
                <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300">
                  <svg className="h-8 w-8" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.30783 12.9088C8.19286 12.8426 8.06254 12.8076 7.93142 12.8076C7.66019 12.8076 7.4182 12.9486 7.284 13.1847C7.18086 13.3617 7.15357 13.5626 7.20497 13.7541C7.25637 13.9461 7.38089 14.107 7.55568 14.2067C7.67009 14.2727 7.79905 14.3071 7.92892 14.3071C8.19662 14.3071 8.4476 14.1641 8.58395 13.9337C8.68209 13.7634 8.7087 13.5603 8.65662 13.3653C8.60476 13.1706 8.4808 13.0084 8.30783 12.9088Z" fill="#F06D2E" />
                    <path d="M10.745 20.5583C10.73 20.5435 10.7185 20.5256 10.7062 20.5085C10.6999 20.4997 10.692 20.4923 10.6865 20.483L10.6862 20.4828L10.6648 20.4466L9.58359 18.6201C9.58256 18.621 9.58131 18.6214 9.5804 18.6223C9.55959 18.6389 9.53707 18.6531 9.51365 18.6647C9.5099 18.6666 9.50626 18.6684 9.50239 18.6702C9.47839 18.6812 9.45338 18.6896 9.42768 18.6954C9.42381 18.6962 9.42006 18.6969 9.41619 18.6976C9.39345 18.7019 9.37025 18.7048 9.34682 18.7048C9.34341 18.7048 9.34 18.7043 9.33647 18.704C9.33317 18.704 9.32965 18.7037 9.32624 18.7035C9.29906 18.702 9.27188 18.6978 9.24515 18.6902C9.2439 18.6898 9.24265 18.6899 9.24151 18.6895L6.76968 20.1118C6.11476 20.4951 5.88697 21.3448 6.2643 22.0045C6.50948 22.4244 6.97392 22.6871 7.47452 22.6871C7.7139 22.6871 7.94851 22.6254 8.15286 22.5086L10.2105 21.3212C10.3871 21.2193 10.6129 21.2781 10.7173 21.4531C10.8218 21.6281 10.7662 21.8547 10.5927 21.9617C9.95955 22.3521 9.74473 23.1924 10.1142 23.8349C10.361 24.2582 10.8236 24.5222 11.3208 24.5222C11.5598 24.5222 11.7952 24.4593 12.0016 24.3407L13.7259 23.34C13.9025 23.2378 14.1284 23.296 14.2332 23.4712C14.338 23.6462 14.2825 23.8731 14.1088 23.9801C13.475 24.3709 13.2615 25.2106 13.6332 25.8523C13.8793 26.278 14.3399 26.5424 14.8352 26.5424C15.0756 26.5424 15.3128 26.4788 15.5212 26.3591L17.7306 25.0815C17.7893 25.0475 17.8536 25.0314 17.9169 25.0314C18.0441 25.0314 18.1678 25.0964 18.2375 25.2133C18.342 25.3883 18.2866 25.615 18.113 25.7221C17.4791 26.1128 17.2658 26.9526 17.6375 27.5942C17.8817 28.0204 18.341 28.2842 18.8372 28.2842C19.0785 28.2842 19.317 28.2206 19.5268 28.1005L21.6497 26.8708L10.821 20.6164C10.793 20.6 10.7676 20.5804 10.745 20.5583Z" fill="#F06D2E" />
                    <path d="M23.5494 9.50813C21.1664 9.5153 18.7164 9.31276 16.9902 7.68018C16.9308 7.62446 16.8754 7.5676 16.8219 7.51017C16.8084 7.49561 16.7952 7.48106 16.782 7.4665C16.7402 7.41987 16.7003 7.37291 16.6624 7.32526C16.652 7.3123 16.6408 7.29933 16.6305 7.28614C16.5898 7.23314 16.5521 7.1797 16.5164 7.12591C16.4985 7.09918 16.4823 7.07223 16.4657 7.04528C16.448 7.01628 16.431 6.98717 16.4148 6.95794C16.4031 6.93713 16.3892 6.91643 16.3784 6.89551L15.2944 8.77543L13.304 12.2223L10.0273 17.9004L11.2795 20.0189L22.3973 26.4403C22.3976 26.4404 22.3979 26.4406 22.3981 26.4408C22.4294 26.4589 22.4612 26.476 22.4934 26.4918C22.5073 26.4979 22.5212 26.5044 22.5349 26.5093C22.5559 26.5167 22.5754 26.5264 22.5943 26.5372C22.7876 26.6165 22.9947 26.658 23.2042 26.658C23.7869 26.6579 24.3289 26.346 24.6188 25.8441C25.056 25.0879 24.805 24.1023 24.0593 23.6471C23.8849 23.5406 23.8286 23.3136 23.933 23.138C24.0374 22.9623 24.2637 22.9034 24.4404 23.006L26.9552 24.4627C27.1992 24.6023 27.4787 24.6766 27.7619 24.6766C28.3459 24.6766 28.8877 24.3662 29.1764 23.8665C29.6151 23.1127 29.363 22.1234 28.615 21.66C28.4417 21.5527 28.3867 21.3261 28.4913 21.1512C28.596 20.9763 28.8215 20.918 28.9982 21.02L30.968 22.1596C31.2111 22.2994 31.489 22.3734 31.7712 22.3734C32.3546 22.3734 32.8962 22.063 33.1841 21.5636C33.6208 20.8084 33.3692 19.8185 32.6235 19.3567C32.4503 19.2494 32.3951 19.0226 32.5002 18.8477C32.605 18.6727 32.831 18.6146 33.0073 18.717L35.347 20.0764C35.5874 20.2131 35.8658 20.2865 36.149 20.2865C36.7371 20.2865 37.2823 19.9769 37.5719 19.4791C37.8405 19.0082 37.8574 18.444 37.6201 17.9542L23.5494 9.50813Z" fill="#F06D2E" />
                    <path d="M40.2803 13.2393C40.0806 13.2393 39.8923 13.3176 39.7499 13.4598C39.4583 13.7518 39.4583 14.2274 39.7502 14.5195C39.8923 14.6615 40.0806 14.7399 40.2803 14.7399C40.4807 14.7399 40.6706 14.6612 40.8147 14.5183C41.1023 14.2278 41.1023 13.7513 40.8123 13.4585C40.6705 13.318 40.4807 13.2393 40.2803 13.2393Z" fill="#F06D2E" />
                    <path d="M9.24501 17.7645C9.25183 17.7471 9.25956 17.73 9.269 17.7136L10.5879 15.4349L12.6689 11.8313L16.1762 5.75371C16.177 5.74882 16.1786 5.74415 16.1794 5.73926C16.1818 5.72664 16.1853 5.71413 16.1879 5.70173C16.1945 5.67126 16.2012 5.64112 16.2096 5.61144C16.2155 5.59017 16.2229 5.56925 16.2299 5.54821C16.2366 5.52808 16.2429 5.50773 16.2504 5.48771C16.2533 5.48032 16.2552 5.4727 16.2582 5.46519C16.3313 5.27994 16.4662 5.04989 16.7127 4.83063L16.9288 4.4541L11.4908 1.31836L11.0234 2.12828C11.017 2.17525 11.002 2.22165 10.977 2.2652L4.29519 13.8385C4.27097 13.8803 4.23901 13.9165 4.20148 13.9456L3.77344 14.6872L9.21123 17.8225L9.24501 17.7645ZM7.9321 15.0535C7.67168 15.0535 7.41421 14.9847 7.18768 14.8543C6.83992 14.6556 6.59087 14.3333 6.4875 13.9476C6.38424 13.5622 6.43872 13.1593 6.64068 12.8129C6.90292 12.351 7.39954 12.0619 7.93449 12.0619C8.19604 12.0619 8.45499 12.1313 8.68311 12.2626C9.02939 12.4621 9.27696 12.7855 9.38045 13.1733C9.48359 13.5604 9.4306 13.9642 9.23113 14.3104C8.95923 14.77 8.46227 15.0535 7.9321 15.0535Z" fill="#F06D2E" />
                    <path d="M41.6932 0.609375L37.8594 2.81704L43.4455 12.4987L44.1688 13.7521L48.0031 11.5372L41.6932 0.609375Z" fill="#F06D2E" />
                    <path d="M16.906 5.88888C16.9055 5.89229 16.9047 5.8957 16.9042 5.89911C16.8878 6.00339 16.8925 6.11325 16.9168 6.2264C16.9191 6.23721 16.922 6.24801 16.9248 6.25881C16.9284 6.27394 16.9323 6.28906 16.9368 6.30419C16.9415 6.31988 16.9465 6.33569 16.9518 6.35161C16.955 6.36105 16.9585 6.3706 16.9619 6.38015C16.9691 6.39971 16.9765 6.41939 16.9848 6.43906C16.9865 6.44327 16.9883 6.44736 16.9901 6.45146C17.0442 6.57678 17.12 6.70392 17.2164 6.82969C17.2172 6.83083 17.2183 6.83196 17.2191 6.8331C17.2369 6.8563 17.2558 6.8795 17.2751 6.9027C17.2793 6.9077 17.2835 6.91271 17.2879 6.91771C17.3054 6.93829 17.3233 6.95899 17.3421 6.97946C17.3502 6.98833 17.3586 6.9972 17.3669 7.00596C17.3831 7.02324 17.3992 7.04053 17.416 7.0577C17.4421 7.08408 17.4688 7.11047 17.4968 7.13662C19.0071 8.56496 21.2899 8.7617 23.5321 8.7617L23.6443 8.76158C23.6444 8.76158 23.6448 8.76158 23.6451 8.76158H23.6463C23.6467 8.76158 23.647 8.76158 23.6475 8.76158C23.6551 8.76158 23.6626 8.76261 23.6702 8.76317C23.6786 8.76363 23.6871 8.76363 23.6955 8.76488C23.7059 8.76624 23.7163 8.76875 23.7265 8.77091C23.7323 8.77216 23.7382 8.77307 23.7439 8.77455C23.7536 8.77705 23.7629 8.78069 23.7722 8.78398C23.7787 8.78626 23.7851 8.78819 23.7915 8.79069C23.7993 8.79399 23.8068 8.7982 23.8145 8.80207C23.821 8.80525 23.8276 8.80798 23.8339 8.81151L23.8621 8.82788L36.8554 16.6274L36.5205 16.047L30.4063 5.46618L29.7838 5.65052C29.6589 5.68748 29.5239 5.65677 29.4275 5.56932C28.3997 4.63795 27.5009 4.2041 26.5989 4.2041C25.9088 4.2041 25.3053 4.4527 24.6663 4.71573C24.0465 4.97092 23.4057 5.23475 22.6997 5.23475C22.4967 5.23475 22.2939 5.21258 22.0969 5.16868C21.0807 4.9426 20.1719 4.82809 19.3959 4.82809C18.4255 4.82809 17.672 5.01573 17.2555 5.34495C17.2473 5.35314 17.2398 5.36201 17.2307 5.3694C17.1199 5.46049 17.037 5.56102 16.9806 5.66951C16.9724 5.68566 16.9641 5.70181 16.9571 5.71818C16.9513 5.7316 16.9456 5.74513 16.9406 5.75878C16.9362 5.77084 16.9321 5.78312 16.9284 5.79551C16.9251 5.80598 16.9219 5.81655 16.9191 5.82724C16.9141 5.84782 16.9095 5.86829 16.906 5.88888Z" fill="#F06D2E" />
                    <path d="M43.7103 14.4487L42.9301 13.0963L36.4417 1.85547L31.0078 4.99565L31.0476 5.06285L32.8525 8.19132L36.4771 14.4701L38.7245 18.3593L44.1584 15.2242L43.7119 14.4507C43.7116 14.4502 43.7108 14.4495 43.7103 14.4487ZM41.3475 15.0457C41.0604 15.3305 40.6841 15.4858 40.2856 15.4858C39.8867 15.4858 39.5111 15.33 39.228 15.0471C38.6453 14.4637 38.6453 13.5153 39.2277 12.9323C39.5111 12.6491 39.8867 12.4933 40.2856 12.4933C40.6841 12.4933 41.0604 12.6487 41.345 12.931C41.9245 13.5157 41.9245 14.4634 41.3475 15.0457Z" fill="#F06D2E" />
                    <path d="M10.1188 2.20084L6.30867 0L0 10.9272L3.81056 13.1284L10.1188 2.20084Z" fill="#F06D2E" />
                  </svg>
                </div>
                <p className="font-bold text-xl text-mainBlue">
                  Fostering <br className='lg:block hidden' /> Collaboration
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
                className="h-72 w-full mb-5 rounded-xl object-cover"
                loader={({ src }) => src}
              />
              <div className="bg-white mb-5 py-16 rounded-xl space-y-6 transition duration-300 p-5">
                <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300">
                  <svg className="h-8 w-8" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.56665 6.55371C2.93985 6.55371 0 9.49357 0 13.1204C0 16.7472 2.93985 19.687 6.56665 19.687C7.16306 19.687 7.65311 19.2488 7.74277 18.6779H7.76167V7.74917C7.76167 7.08947 7.22635 6.55371 6.56665 6.55371Z" fill="#F06D2E" />
                    <path d="M33.0623 1.19502C33.0623 0.535317 32.5275 0 31.8673 0C31.5935 0 31.3443 0.0958121 31.143 0.250518L20.6274 6.32185H11.1481C10.488 6.32185 9.95312 6.85673 9.95312 7.51687V18.8601H9.96807C10.0415 19.4494 10.5385 19.9074 11.1481 19.9074H19.5594L31.0569 26.5453C31.27 26.743 31.5535 26.8665 31.8673 26.8665C32.527 26.8665 33.0623 26.3312 33.0623 25.6715C33.0623 25.6263 33.054 25.5832 33.0491 25.5392H33.0623V23.5157V3.28706V1.26446H33.0553C33.0566 1.24116 33.0623 1.21919 33.0623 1.19502Z" fill="#F06D2E" />
                    <path d="M19.2629 28.9972L19.2462 28.9682C19.2405 28.9577 19.2379 28.9467 19.2317 28.9361C19.2255 28.9256 19.2176 28.9177 19.2115 28.908L15.5614 22.5866L15.5478 22.5945C15.3482 22.3202 15.0511 22.1524 14.7316 22.1128V22.0996H11.5575V22.1075C11.387 22.1216 11.2169 22.1686 11.0587 22.26C10.4869 22.5897 10.2913 23.321 10.6213 23.8924C10.6495 23.9407 10.6838 23.9829 10.7176 24.0255L10.7035 24.0339L14.9571 31.4017C14.9575 31.4026 14.9575 31.4031 14.9579 31.4039C14.9584 31.4048 14.9593 31.4057 14.9593 31.4057L15.0019 31.4795L15.0094 31.4751C15.3583 31.9872 16.0448 32.1559 16.5898 31.8408C16.6536 31.8039 16.7111 31.7604 16.7652 31.7147L16.7762 31.7336L18.9662 30.4696L18.9561 30.452C19.3803 30.1017 19.5117 29.5004 19.2598 28.999L19.2629 28.9972Z" fill="#F06D2E" />
                  </svg>
                </div>
                <p className="font-bold text-xl text-mainBlue">
                  Raising <br className='lg:block hidden' /> Awareness
                </p>
                <p>
                  We strive to educate individuals about the risks associated with fraudulent job offers, emphasizing the deceptive tactics employed by scammers.
                </p>
              </div>
              <div className="mx-5">
                <Image
                  src="/img/2.svg"
                  alt="Preventing Exploitation"
                  width={150}
                  height={150}
                  className="h-72 w-full  mb-5 rounded-xl object-cover cursor-pointer"
                  loader={({ src }) => src}
                />
              </div>
              <div className="bg-white mb-5 py-16 rounded-xl space-y-6 transition duration-300 p-5">
                <div className="bg-gray-200 text-orange rounded-full flex items-center justify-center h-12 w-12 my-5 border border-orange hover:bg-transparent transition duration-300">
                  <svg className="h-8 w-8" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0501 13.215C22.0801 12.6637 20.8682 13.0725 20.3432 14.07L17.7569 19.3456C17.7085 19.4455 17.6238 19.5232 17.5202 19.563C17.4166 19.6028 17.3017 19.6017 17.1988 19.56C17.1173 19.5275 17.0474 19.4713 16.9983 19.3987C16.9491 19.326 16.923 19.2402 16.9232 19.1525V4.5C16.9232 3.63063 16.1201 3 15.2501 3C14.3801 3 13.6251 3.63063 13.6251 4.5V14.29C13.6272 14.4728 13.5579 14.6493 13.432 14.7819C13.306 14.9144 13.1334 14.9927 12.9507 15C12.8593 15.0017 12.7685 14.9853 12.6836 14.9515C12.5986 14.9177 12.5213 14.8674 12.456 14.8033C12.3908 14.7393 12.339 14.6629 12.3036 14.5787C12.2683 14.4944 12.25 14.4039 12.2501 14.3125V1.5C12.2501 0.630625 11.5663 0 10.6963 0C9.82631 0 9.12506 0.630625 9.12506 1.5V14.29C9.12716 14.4728 9.05789 14.6493 8.93196 14.7819C8.80604 14.9144 8.63339 14.9927 8.45069 15C8.3593 15.0017 8.26849 14.9853 8.18356 14.9515C8.09863 14.9177 8.02128 14.8674 7.95604 14.8033C7.8908 14.7393 7.83899 14.6629 7.80362 14.5787C7.76825 14.4944 7.75004 14.4039 7.75006 14.3125V3.5C7.75006 2.63063 6.99506 2 6.12506 2C5.25506 2 4.50006 2.69313 4.50006 3.5625V15.29C4.50216 15.4728 4.43289 15.6493 4.30696 15.7819C4.18104 15.9144 4.00839 15.9927 3.82568 16C3.7343 16.0017 3.64349 15.9853 3.55856 15.9515C3.47363 15.9177 3.39628 15.8674 3.33104 15.8033C3.2658 15.7393 3.21399 15.6629 3.17862 15.5787C3.14325 15.4944 3.12504 15.4039 3.12506 15.3125V7.5C3.12506 6.63062 2.43256 6 1.56256 6C0.69256 6 -0.00744029 6.63875 5.97093e-05 7.5V21C5.97093e-05 28.3381 4.50006 32 10.0001 32H11.0001C16.5001 32 18.2319 29.525 19.5001 26.5L23.7944 15.9375C24.2082 14.8125 24.0194 13.7656 23.0501 13.215Z" fill="#F06D2E" />
                  </svg>
                </div>
                <p className="font-bold text-xl text-mainBlue">
                  Preventing <br className='lg:block hidden' /> Exploitation
                </p>
                <p>
                  We aim to reduce victims of illegal migration scams, creating a safer environment through vigilance and education for all individuals.
                </p>
              </div>
            </Masonry>
          </div>
          <div className='lg:hidden grid'>
            <Cards />
          </div>
        </div>
        <div className="bg-white rounded-xl my-5">
          <div className="main-gradient rounded-xl" id='empowering'>
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
                <div className="space-y-10 text-white bg-gradient lg:p-16 lg:mr-20 p-5">
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
          <h2 className="text-3xl font-bold text-center my-10 text-gradient">
            Campaign Partners
          </h2>
          <div className="lg:flex justify-center pb-10">
            <div className="lg:border-t lg:border-r border-orange p-10 lg:w-1/3">
              <h4 className="text-gray-400 mb-5 text-sm">Public service campaign by:</h4>
              <div className="flex gap-2 items-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/1.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-24 object-contain cursor-pointer"
                    loader={({ src }) => src}
                  />
                </a>
              </div>
            </div>
            <div className="border-t border-orange p-10 lg:w-1/3">
              <h4 className="text-gray-400 mb-5 text-sm">Supported by:</h4>
              <div className="flex gap-2 items-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/2.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-16 object-contain cursor-pointer"
                    loader={({ src }) => src}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/3.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-16 object-contain cursor-pointer"
                    loader={({ src }) => src}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/logos/4.svg"
                    alt="qnet logo"
                    width={150}
                    height={150}
                    className="h-24 w-full object-contain cursor-pointer"
                    loader={({ src }) => src}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-between mb-10">
            <h2 className="lg:text-2xl font-bold text-gradient">
              Insights & Updates
            </h2>
            <Link href="/insights" className="underline hover:text-orange">
              More Updates <ArrowRight className="h-4 w-4 inline-block" />
            </Link>
          </div>
          <div className="border border-gray-300 p-5 rounded-xl">
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              navigation={true}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {Insights.slice(0, 10).map((insight, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-xl mb-16">
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
                        <p className="text-xs capitalize">
                          {insight.newsMedia}
                        </p>
                        <hr className="border-b border-orange mt-3" />
                        <Badge className="bg-orange hover:bg-orange text-white gap-2 rounded-none rounded-b-sm mb-3 uppercase">
                          <SquarePlay
                            className="h-4 w-4"
                          />
                          {insight.language}
                        </Badge>
                        <h4 className="text-base font-semibold py-3 hover:text-orange transition duration-300 h-32">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
}
