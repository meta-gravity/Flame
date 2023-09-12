import { ChevronLeft, ChevronRight, ChevronRightCircle, LucideChevronRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function about() {
    return (
        <main>
            <div >
            <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4"/>
            </Button>
            <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4 justify-content center gap"/>
            </Button>
            </div>
            <div className="back">
                <a href="/">Back</a>
            </div>
            <h1>Flame about page</h1>

            <Button disabled>
             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        </main>
    )
} 