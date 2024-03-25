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
      <PageHeader>
        <Announcement />
        {/* <PageHeaderHeading>Build your component library</PageHeaderHeading> */}
        <TypewriterEffectSmooth words={words} />
        <PageHeaderDescription>
          Forge a unique UI identity. Our library of bold, customizable
          components lets you craft interfaces that break the mold. Open source
          and accessible by design.
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
      <ExamplesNav className="[&>a:first-child]:text-primary" />
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
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section>
    </div>
  )
}
