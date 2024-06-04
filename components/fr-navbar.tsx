"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
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
                        <Link href="/fr" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Accueil
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/#empowering" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                À propos de nous
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/faqs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                FAQs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/media-center" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Galerie
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/resources" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Ressources
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/insights" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Publications
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/fr/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contactez-nous
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <Button
                            className="w-full main-gradient rounded-full py-3 px-5"
                            asChild
                        >
                            <Link href="/">Get Involved</Link>
                        </Button>
                    </NavigationMenuItem> */}
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
                                    <a href="/fr" className="text-mainBlue hover:text-orange pl-5">
                                        Accueil
                                    </a>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/#empowering" className="text-mainBlue hover:text-orange pl-5">
                                        À propos de nous
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/faqs" className="text-mainBlue hover:text-orange pl-5">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/media-center" className="text-mainBlue hover:text-orange pl-5">
                                        Galerie
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/resources" className="text-mainBlue hover:text-orange pl-5">
                                        Ressources
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/insights" className="text-mainBlue hover:text-orange pl-5">
                                        Publications
                                    </Link>
                                </li>
                                <li className="border-b border-gray-200 bg-[#F8F9FA] p-3">
                                    <Link href="/fr/contact" className="text-mainBlue hover:text-orange pl-5">
                                        Contactez-nous
                                    </Link>
                                </li>
                            </ul>
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