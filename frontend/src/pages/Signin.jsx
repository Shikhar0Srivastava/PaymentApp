import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signin() {
    return <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="bg-white h-[360px] w-[400px] flex flex-col shadow-md rounded-md">

            {/* HEADING */}
            <Heading label={"Sign In"}/>

            {/* SUBHEADING */}
            <Subheading label={"Enter your credentials to access your account"}></Subheading>
            
            {/* EMAIL */}
            <InputBox label={"Email"} placeholder={"Enter your email"} onChange={() => {}}></InputBox>
            
            {/* PASSWORD */}
            <InputBox label={"Password"} placeholder={"Enter your password"} onChange={() => {}}></InputBox>
            
            {/* BUTTON */}
            <div className="p-6 pb-1">
                <Button label={"Sign In"} onClick={()=>{}}></Button>
            </div>
            
            {/* BOTTOM WARNING */}
            <BottomWarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}></BottomWarning>
        </div>
    </div>
}