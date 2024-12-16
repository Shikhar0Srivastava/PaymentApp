import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PasswordComponent } from "../components/PasswordComponent"

export function Signin() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const emailRef = useRef();
    const passRef = useRef();

    const [hidden, setHidden] = useState(true);

    return <div className="bg-[#8476ba] min-h-screen flex justify-center items-center">
        <div className="bg-white h-auto w-[400px] flex flex-col shadow-md rounded-md">

            {/* HEADING */}
            <Heading label={"Sign In"}/>

            {/* SUBHEADING */}
            <Subheading label={"Enter your credentials to access your account"}></Subheading>

            <div className={`flex justify-center text-sm text-red-500 ${hidden ? "hidden": ""}`}>
                Wrong inputs. Try again
            </div>
            
            {/* EMAIL */}
            <InputBox ref={emailRef} label={"Email"} placeholder={"Enter your email"} onChange={(e) => {
                setEmail(e.target.value);
            }}></InputBox>
            
            {/* PASSWORD */}
            <PasswordComponent ref={passRef} label={"Password"} placeholder={"Enter your password"} onChange={(e) => {
                setPass(e.target.value);
            }}></PasswordComponent>
            
            {/* BUTTON */}
            <div className="p-6 pb-1">
                <Button label={"Sign In"} onClick={async ()=>{
                    try {
                        const response = await axios.post("http://localhost:3000/v1/user/signin", {
                            username: email,
                            password: pass
                        });
                        localStorage.setItem("token", response.data.token);
                        if(localStorage.getItem("token")) {
                            navigate("/dashboard");
                        }
                    } catch {
                        emailRef.current.value = ""
                        passRef.current.value = ""
                        setHidden(false);
                    }
                }}></Button>
            </div>
            
            {/* BOTTOM WARNING */}
            <BottomWarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}></BottomWarning>
        </div>
    </div>
}