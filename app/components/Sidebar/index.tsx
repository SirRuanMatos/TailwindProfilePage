import { Logo } from "./components/Logo/Logo";
import { Cog, LifeBuoy, Search } from "lucide-react";
import { MainNavigation } from "./components/MainNavigation";
import { NavItem } from "./components/MainNavigation/NavItem";
import { UsedSpaceWidget } from "./components/UsedSpaceWidget";
import { Profile } from "./components/Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";

export function Sidebar() {
    return (
        <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
            <Logo />

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

                <div className="h-px bg-zinc-200"></div>

                <Profile />
            </div>
        </aside>
    );
}
