"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"
import { buttonVariants } from "@/registry/new-york/ui/button"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="">
        <Icons.logo className="h-6 w-6" />

        {/* <Image className="" src="/logo.svg" alt={""} width={100} height={24} /> */}

        {/* <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span> */}
      </Link>
      {/* <nav className="flex items-center gap-6 text-sm">
        <div className="flex">
          <Link
            href="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60",
              buttonVariants({
                variant: "ghost",
              })
            )}
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs/components")
                ? "text-foreground"
                : "text-foreground/60",
              buttonVariants({
                variant: "ghost",
              })
            )}
          >
            Components
          </Link>
          <Link
            href="/themes"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/themes")
                ? "text-foreground"
                : "text-foreground/60",
              buttonVariants({
                variant: "ghost",
              })
            )}
          >
            Themes
          </Link>
          <Link
            href="/examples"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/examples")
                ? "text-foreground"
                : "text-foreground/60",
              buttonVariants({
                variant: "ghost",
              })
            )}
          >
            Examples
          </Link>
          <Link
            href={siteConfig.links.github}
            className={cn(
              "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
              buttonVariants({
                variant: "ghost",
              })
            )}
          >
            GitHub
          </Link>
        </div>
      </nav> */}
    </div>
  )
}
