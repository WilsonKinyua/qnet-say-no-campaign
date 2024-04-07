"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link";
import React from "react"
import { Button } from "./ui/button";
import { Menu, } from "lucide-react";
export default function Navbar() {
    return (
        <>
            <NavigationMenu
                className="lg:block hidden"
            >
                <NavigationMenuList
                    className="bg-white rounded-full p-4"
                >
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <ListItem
                                        title={"About Us"}
                                        href={""}
                                        key={i}
                                    >
                                        {"Learn more about our mission, vision, and values."}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>FAQs</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {Array.from({ length: 2 }).map((_, i) => (
                                    <Link href="/faqs" key={i} passHref>
                                        <ListItem
                                            title={"FAQs"}
                                            href={""}
                                        >
                                            {"Find answers to frequently asked questions."}
                                        </ListItem>
                                    </Link>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/media-center" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Media Centre
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/resources" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Resources
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/insights" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                News Room
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            className="w-full main-gradient rounded-full py-3 px-5"
                            asChild
                        >
                            <Link href="/">Get Involved</Link>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
                <SheetTrigger
                    className="lg:hidden"
                >
                    <Menu
                        size={44}
                        className="text-white border border-white rounded-md p-2"
                    />
                </SheetTrigger>
                <SheetContent side={"left"} className="p-0">
                    <SheetHeader>
                        <SheetDescription className="text-left">
                            <ul className="my-10">
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <a href="/" className="text-mainBlue hover:text-orange pl-5">
                                        Home
                                    </a>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/" className="text-mainBlue hover:text-orange pl-5">
                                        About Us
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/faqs" className="text-mainBlue hover:text-orange pl-5">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/media-center" className="text-mainBlue hover:text-orange pl-5">
                                        Media Centre
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/resources" className="text-mainBlue hover:text-orange pl-5">
                                        Resources
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/insights" className="text-mainBlue hover:text-orange pl-5">
                                        News Room
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/" className="text-mainBlue hover:text-orange pl-5">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <div className="mx-5">
                                <Button
                                    className="w-full main-gradient rounded-full py-3 px-5"
                                    asChild
                                >
                                    <Link href="/">Get Involved</Link>
                                </Button>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"