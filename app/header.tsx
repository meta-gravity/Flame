import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Sun, Moon } from "lucide-react";

export default function header() {
    function setTheme(arg0: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <main>
            <div className="flex font-bold items-center justify-center p-3 text-center bg-grey-100 fw-50">
                <div className="font-bold">
                    <Button type="submit" variant="link" className="hover:text-sky-500 font-semibold">
                        <a href="/">Home</a>
                    </Button>
                </div>
                <div className="font-bold">
                    <Button type="submit" variant="link" className="hover:text-sky-500 font-semibold">
                        <a href="/about">About</a>
                    </Button>
                </div>
                <div className="font-bold">
                    <Button type="submit" variant="link" className="hover:text-sky-500 font-semibold">
                        <a href="/chat">Chat</a>
                    </Button>
                </div>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </main>
    )
}