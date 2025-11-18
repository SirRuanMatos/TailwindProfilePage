"use client";
import { Sun, Moon } from "lucide-react";

import { useTheme } from "next-themes";

import * as Switcher from "@radix-ui/react-switch";

export function ThemeSwitcher() {
    const { setTheme } = useTheme();

    const changeTheme = (val: boolean) => {
        setTheme(val ? "dark" : "light");
    };

    return (
        <div className="flex justify-center align-middle gap-6">
            <Sun className="h-6 w-6  transition-all" />
            <Switcher.Root
                onCheckedChange={(value) => {
                    changeTheme(value);
                }}
                className="data-[state=checked]:bg-violet-500 active:data-[state=checked]:bg-violet-400 w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 active:bg-gray-600"
            >
                <Switcher.Thumb className="data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition" />
            </Switcher.Root>
            <Moon className="h-6 w-6 transition-all" />
        </div>
    );
}
