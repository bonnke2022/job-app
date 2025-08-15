"use client";

import links from "@/utils/links";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={10}
        height={10}
        className="w-auto h-auto mx-auto"
      />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          const { icon: Icon, href, label } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? "default" : "link"}
            >
              <Link
                href={href}
                className="flex items-center gap-x-2 text-white"
              >
                <Icon /> <span className="capitalize">{label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
