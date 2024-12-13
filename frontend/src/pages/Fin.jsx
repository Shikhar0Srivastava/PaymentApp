import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"

export function Fin() {
    return <div className="h-screen w-max-md bg-[#8476ba] flex justify-center items-center">
        <div className="border h-min p-16 space-y-8 w-120 bg-white shadow-lg rounded-lg">
            <Heading label={"This page was made with ❤️"}></Heading>
            <Subheading label={"(Not with madam Mehimi, although she's my love too)"}></Subheading>
        </div>
    </div>
}