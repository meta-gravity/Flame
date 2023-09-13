import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function login() {
    return (
        <main className="flex items-center justify-center">
            <div class="p-6 max-w-sm mx-auto bg-grey-200 rounded-xl shadow-lg flex items-center space-x-2 ">
                <div className="w-full max-w-sm items-center space-x-2">
                    <span className="flex text-sm font-medium text-slate-400">
                    Email
                    </span>
                    <Input type="email" placeholder="you@example.com" required className=" focus:ring-1" />
                    <Button type="submit" className="items-center p-2 m-8 text-center">Sign in</Button>
                </div>
            </div>
        </main>
    )
}