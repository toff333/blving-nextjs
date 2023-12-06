"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

import { cn } from "@/lib/utils";
import { UserNav } from "@/components/user-nav";

import { Metadata } from "next";
import { SetStateAction, useState } from "react";

export const metadata: Metadata = {
  title: "BLVING",
  description: "BLVING Web Application",
};

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (linkName: SetStateAction<string>) => {
    setActiveLink(linkName);
  }

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div> */}
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
          <Image
          src={logo}
          width={50}
          height={50}
          alt="Logo"
        />
            <nav
              className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
              )}
              {...props}
            >
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === "dashboard" ? "" : "text-muted-foreground"
                }`}
                onClick={() => handleLinkClick("dashboard")}
              >
                Dashboard
              </Link>
              <Link
                href="/customers"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === "customers" ? "" : "text-muted-foreground"
                }`}
                onClick={() => handleLinkClick("customers")}
              >
                Customers
              </Link>
              <Link
                href="/transactions"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === "transactions" ? "" : "text-muted-foreground"
                }`}
                onClick={() => handleLinkClick("transactions")}
              >
                Transactions
              </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
