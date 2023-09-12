import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function chat() {
    return (
        <main>
            <div className="items-center m-3 p-4 mx-auto b-red">
                <div>
                    <fieldset className="m-2 text-center space-x-1 text-slate-200 font-semibold">
                        <legend>Choose a model</legend>
                        

                        <RadioGroup defaultValue="option-one" className="m-2 text-center space-x-1 text-slate-200">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one"></RadioGroupItem>
                                <label htmlFor="option-one">flamy</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one"></RadioGroupItem>
                                <label htmlFor="option-one">Hotsy</label>
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
                <Input type="text" placeholder="Write a message" />
            </div>
        </main>
    )
}