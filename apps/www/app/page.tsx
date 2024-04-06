import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { TypewriterEffectSmooth } from "@/components/typewriter-effect"
import CheckboxDemo from "@/registry/default/example/checkbox-demo"
import CollapsibleDemo from "@/registry/new-york/example/collapsible-demo"
import MenubarDemo from "@/registry/new-york/example/menubar-demo"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/examples/mail/page"

export default function IndexPage() {
  const words = [
    {
      text: "Stand Out.",
    },
    {
      text: "Stand Firm.",
    },
  ]
  return (
    <div className="container relative">
      <div className="mx-auto flex items-center justify-center">
        {/* <div className="absolute left-2 top-24 mr-auto">
          <div className="animate-[levitate_17s_ease_infinite_1s]">
            <MenubarDemo />
          </div>
        </div>
        <div className="absolute left-4 top-56 mr-auto">
          <div className="animate-[levitate_14s_ease_infinite_1s]">
            <CheckboxDemo />
          </div>
        </div> */}

        <div className="mx-auto flex justify-center">
          <div className="">
            <PageHeader>
              <Announcement />
              {/* <PageHeaderHeading>Build your component library</PageHeaderHeading> */}
              <TypewriterEffectSmooth words={words} />
              <PageHeaderDescription>
                Forge a unique UI identity. Our library of bold, customizable
                components lets you craft interfaces that break the mold. Open
                source and accessible by design.
              </PageHeaderDescription>
              <PageActions>
                <Link href="/docs" className={cn(buttonVariants())}>
                  Get Started
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.github}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </PageActions>
            </PageHeader>
          </div>
        </div>

        {/* <div className="absolute right-4 top-12 ml-auto">
          <div className="animate-[levitate_1s_ease_infinite_1s]">
            <CollapsibleDemo />
          </div>
        </div> */}
      </div>

      <ExamplesNav className="[&>a:first-child]:border [&>a:first-child]:border-accent-foreground [&>a:first-child]:text-accent-foreground" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border border-accent-foreground bg-background shadow-neoshadow">
          <MailPage />
        </div>
      </section>
    </div>
  )
}
