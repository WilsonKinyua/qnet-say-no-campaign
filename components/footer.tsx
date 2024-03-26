import { Facebook, Instagram, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-footer bg-no-repeat w-full lg:rounded-t-[4rem]">
            <div className="container mx-auto text-white text-center">
                <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                <div className="py-8">
                    <p className="lg:px-80">
                        If you know someone who has fallen victim to fake job scams, human trafficking, or illegal migration, send us a message on our WhatsApp hotline or send an email to:
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
                                <Mail className="w-4 h-4" />
                            </span>
                            <a href="tel:+233256630005" className="hover:text-orange transition duration-300">+ 233 256 630 005</a>
                        </div>
                    </div>
                </div>
                <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                <div className="lg:flex justify-between items-center py-5">
                    <ul className="flex flex-wrap space-x-5 uppercase">
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">About Us</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">FAQs</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">Media Centre</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">Resources</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">NewsRoom</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-3 lg:mt-0 mt-5">
                        <a target="_blank" href="" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a target="_blank" href="" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                            <X className="w-4 h-4" />
                        </a>
                        <a target="_blank" href="" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a target="_blank" href="" className="bg-transparent text-white rounded-full p-3 border border-white hover:bg-white hover:text-orange transition duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <hr className="my-2 border-0 border-t-[0.01rem] border-gray-300" />
                <div className="lg:flex justify-between uppercase py-5">
                    <p>&copy; {new Date().getFullYear()} <a href="" target="_blank" className="hover:text-orange transition duration-300" rel="noopener noreferrer">QNET Ltd</a>. All Rights Reserved</p>
                    <ul className="lg:flex hidden">
                        <li className="lg:border-r border-white mr-5 pr-5">
                            <Link href="" className="hover:text-orange transition duration-300">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:text-orange transition duration-300">Privacy Statement & Disclaimer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}