import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/images/logo.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} width={128} height={38} alt="M Logo"></Image>
        </Link>
        <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
                <MobileNav />
            </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
                <UserButton/>
                <NavItems />
            </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;