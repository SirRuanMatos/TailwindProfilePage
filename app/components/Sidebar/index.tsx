"use client";
import { Cog, LifeBuoy, Menu, Moon, Search, Sun } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Logo } from "./components/Logo/Logo";
import { MainNavigation } from "./components/MainNavigation";
import { NavItem } from "./components/MainNavigation/NavItem";
import { UsedSpaceWidget } from "./components/UsedSpaceWidget";
import { Profile } from "./components/Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Button } from "../Button";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Sidebar() {
    return (
        <Collapsible.Root className="border-r border-zinc-200 p-4 flex flex-col gap-6 fixed data-[state=open]:bottom-0  left-0 right-0 top-0 z-20 r-0  bg-white dark:bg-zinc-900 dark:border-zinc-800 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:h-screen lg:data-[state=closed]:bottom-0">
            <div className="flex items-center justify-between">
                <Logo />
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button variant="ghost">
                        <Menu className="h-6 w-6" />
                    </Button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content
                forceMount
                className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
                <InputRoot>
                    <InputPrefix>
                        <Search className="h-5 w-5 text-zinc-500" />
                    </InputPrefix>
                    <InputControl placeholder="Search" />
                </InputRoot>

                <MainNavigation />

                <div className="mt-auto flex flex-col gap-6">
                    <nav className="space-y-0.5">
                        <NavItem title="Support" icon={LifeBuoy} />
                        <NavItem title="Setting" icon={Cog} />
                    </nav>

                    <UsedSpaceWidget />

                    <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>

                    <ThemeSwitcher />

                    <Profile />
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
