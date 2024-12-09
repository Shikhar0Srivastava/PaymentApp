import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"

export function Signup() {
    return <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="bg-white h-[500px] w-[400px] flex flex-col">
            <Heading label={"Sign Up"}/>
            <Subheading label={"Enter your credentials to create an account"}></Subheading>
            <InputBox label={"First Name"} placeholder={"Enter first name"} onChange={() => {}}></InputBox>
            <InputBox label={"Last Name"} placeholder={"Enter last name"} onChange={() => {}}></InputBox>
            <InputBox label={"Email ID"} placeholder={"Enter your email"} onChange={() => {}}></InputBox>
            <InputBox label={"Password"} placeholder={"Create password (Minimum length 8)"} onChange={() => {}}></InputBox>
            <div className="p-6">
                <Button label={"Sign Up"} onClick={()=>{}}></Button>
            </div>
        </div>
    </div>
}