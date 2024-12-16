import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { PasswordComponent } from "../components/PasswordComponent"

export function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [hidden, setHidden] = useState(true);

    const emailRef = useRef();
    const passRef = useRef();

    return <div className="bg-[#8476ba] min-h-screen flex justify-center items-center">
        <div className="bg-white w-[400px] flex flex-col shadow-md rounded-md h-auto">

            {/* HEADING */}
            <Heading label={"Sign Up"}/>

            {/* SUBHEADING */}
            <Subheading label={"Enter your credentials to create an account"}></Subheading>

            <div className={`flex justify-center text-sm text-red-500 ${hidden ? "hidden": ""}`}>
                Wrong inputs. Try again
            </div>

            {/* FIRST NAME */}
            <InputBox label={"First Name"} placeholder={"Enter first name"} onChange={(e) => {
                setFirstName(e.target.value);
            }}></InputBox>

            {/* LAST NAME */}
            <InputBox label={"Last Name"} placeholder={"Enter last name"} onChange={(e) => {
                setLastName(e.target.value);
            }}></InputBox>

            {/* EMAIL */}
            <InputBox ref={emailRef} label={"Email ID"} placeholder={"Enter your email"} onChange={(e) => {
                setUsername(e.target.value);
            }}></InputBox>

            {/* PASSWORD */}
            <PasswordComponent ref={passRef} label={"Password"} placeholder={"Create password (Minimum length 8)"} onChange={(e) => {
                setPassword(e.target.value);
            }}></PasswordComponent>

            {/* SIGN UP */}
            <div className="p-6 pb-1">
                <Button label={"Sign Up"} onClick={async ()=>{
                    try {
                        const response = await axios.post("http://localhost:3000/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
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

            {/* WARNING */}
            <BottomWarning label={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></BottomWarning>
        </div>
    </div>
}