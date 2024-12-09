import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signin() {
    return <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="bg-white h-[360px] w-[400px] flex flex-col shadow-md">
            <Heading label={"Sign In"}/>
            <Subheading label={"Enter your credentials to access your account"}></Subheading>
            <InputBox label={"Email"} placeholder={"Enter your email"} onChange={() => {}}></InputBox>
            <InputBox label={"Password"} placeholder={"Enter your password"} onChange={() => {}}></InputBox>
            <div className="p-6 pb-1">
                <Button label={"Sign In"} onClick={()=>{}}></Button>
            </div>
            <BottomWarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}></BottomWarning>
        </div>
    </div>
}