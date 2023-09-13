import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function login() {
    return (
        <main className="flex items-center justify-center">
            <div className="bg-black shadow-lg rounded-xl p-6">
                <div className="text-xl font-medium text-black">
                    <div className="flex items-center justify-center">
                        <Input type="email" placeholder="Email" className="peer"/>
                        <p className="mt-1 invisible peer-invalid:visible text-pink-700 text-sm">
                            Nah, provide a valid email address 🚫
                        </p>
                        <Button type="submit" variant="default">Subscribe</Button>
                    </div>
                </div>
                <div className="m-3 flex items-center justify-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center justify-center p-3">
                    <Button variant="outline">
                        <a href="/">back</a>
                    </Button>
                </div>
            </div>
            
        </main>
    )
}