import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"

export function Fin() {
    return <div className="min-h-screen w-max-md bg-[#8476ba] flex justify-center items-center">
        <div className="border h-min p-16 space-y-8 w-120 bg-white shadow-lg rounded-lg">
            <Heading label={"You've reached the end."}></Heading>
            <Subheading label={"Transaction is done."}></Subheading>
        </div>
    </div>
}
