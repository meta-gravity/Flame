import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

export default function chat() {
    return (
        <main>
            <div className="items-center m-3 p-4 mx-auto b-red">
                <div>
                    <fieldset className="m-2 text-center space-x-1 text-slate-200 font-semibold">
                        <legend>Choose a model</legend>
                        

                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one"></RadioGroupItem>
                                <Label htmlFor="option-one">Option One</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one"></RadioGroupItem>
                                <Label htmlFor="option-one">Option One</Label>
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
                <Input type="text" placeholder="Write a message" />
            </div>
        </main>
    )
}