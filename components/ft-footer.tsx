import { Facebook, Instagram, Mail, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="container mx-auto lg:block hidden">
                <Image
                    src="/img/top-footer-fr.png"
                    alt="Top Footer"
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="h-56 w-full -mb-10 object-cover object-center"
                />
            </div>
            <footer className="bg-footer bg-no-repeat w-full lg:rounded-t-[4rem]">
                <div className="container mx-auto text-white lg:pt-32">
                    <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                    <div className="text-center py-8">
                        <p className="lg:px-80">
                            Si vous connaissez quelqu&apos;un qui a été victime d&apos;arnaques à l&apos;emploi, de traite des êtres humains ou de migration illégale, contactez-nous :
                        </p>
                        <div className="lg:flex justify-center items-center lg:space-x-5 lg:space-y-0 space-y-5 mt-5">
                            <div className="flex items-center space-x-3">
                                <span className="bg-white text-black rounded-full p-2 border-8 border-gray-200 hover:bg-orange hover:text-white transition duration-300">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <a href="mailto:network.integrity@qnet.net" className="hover:text-orange transition duration-300">network.integrity@qnet.net</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="bg-white text-black rounded-full p-2 border-8 border-gray-200 hover:bg-orange hover:text-white transition duration-300">
                                    <PhoneCall className="w-4 h-4" />
                                </span>
                                <a href="https://wa.me/+233256630005" className="hover:text-orange transition duration-300">+ 233 256 630 005</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                    <div className="lg:flex justify-between items-center py-5">
                        <ul className="lg:flex grid grid-cols-2 lg:flex-wrap lg:space-x-5">
                            <li>
                                <Link href="/fr/#empowering" className="hover:text-orange transition duration-300">À propos de nous</Link>
                            </li>
                            <li>
                                <Link href="/fr/faqs" className="hover:text-orange transition duration-300">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/fr/media-center" className="hover:text-orange transition duration-300">Galerie</Link>
                            </li>
                            <li>
                                <Link href="/fr/resources" className="hover:text-orange transition duration-300">Ressources</Link>
                            </li>
                            <li>
                                <Link href="/fr/insights" className="hover:text-orange transition duration-300">Publications</Link>
                            </li>
                            <li>
                                <Link href="/fr/contact" className="hover:text-orange transition duration-300">Contactez-nous</Link>
                            </li>
                        </ul>
                        <div className="flex items-center space-x-3 lg:mt-0 mt-5">
                            <a target="_blank" href="https://www.facebook.com/QNETOfficial/" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a target="_blank" href="https://twitter.com/qnetofficial" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                                <X className="w-4 h-4" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/qnetofficial/" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                    <div className="text-center uppercase py-5">
                        <p>&copy; {new Date().getFullYear()} <Link href="/" className="hover:text-orange transition duration-300" rel="noopener noreferrer">QNET&apos;s Say NO! Campaign</Link>. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}