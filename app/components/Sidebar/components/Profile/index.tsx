import { Button } from "@/app/components/Button";
import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-(--profile-cols)">
            <img
                src="https://github.com/SirRuanMatos.png"
                alt=""
                className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
                    Ruan Matos
                </span>
                <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                    ruanmatos96@gmail.com
                </span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className="w-5 h-5" />
            </Button>
        </div>
    );
}
