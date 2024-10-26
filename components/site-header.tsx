"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const categories = [
  {
    title: "Technology",
    href: "/discover/technology",
    description: "Innovative tech projects pushing boundaries",
  },
  {
    title: "Creative",
    href: "/discover/creative",
    description: "Art, music, film, and other creative endeavors",
  },
  {
    title: "Community",
    href: "/discover/community",
    description: "Projects that bring people together",
  },
  {
    title: "Health & Wellness",
    href: "/discover/health",
    description: "Health, fitness, and mental wellbeing initiatives",
  },
  {
    title: "Education",
    href: "/discover/education",
    description: "Learning and educational projects",
  },
  {
    title: "Environment",
    href: "/discover/environment",
    description: "Sustainability and environmental projects",
  },
];

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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-bold">AI-FUND</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <ListItem
                        key={category.title}
                        title={category.title}
                        href={category.href}
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    How it Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <nav className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Link href="/create">
            <Button className="hidden sm:inline-flex">
              <Sparkles className="mr-2 h-4 w-4" />
              Start a Project
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}