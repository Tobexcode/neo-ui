"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex  w-full flex-auto flex-flow justify-between">
          <MainNav />
          <nav className="flex items-center gap-6 text-sm">
            <div className="flex">
              <Link
                href="/docs"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/docs"
                    ? "text-foreground"
                    : "text-foreground/60",
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
          </nav>
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
