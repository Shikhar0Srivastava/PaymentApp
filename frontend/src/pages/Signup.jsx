import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios";

export function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="bg-white h-[500px] w-[400px] flex flex-col shadow-md rounded-md">

            {/* HEADING */}
            <Heading label={"Sign Up"}/>

            {/* SUBHEADING */}
            <Subheading label={"Enter your credentials to create an account"}></Subheading>

            {/* FIRST NAME */}
            <InputBox label={"First Name"} placeholder={"Enter first name"} onChange={(e) => {
                setFirstName(e.target.value);
            }}></InputBox>

            {/* LAST NAME */}
            <InputBox label={"Last Name"} placeholder={"Enter last name"} onChange={(e) => {
                setLastName(e.target.value);
            }}></InputBox>

            {/* EMAIL */}
            <InputBox label={"Email ID"} placeholder={"Enter your email"} onChange={(e) => {
                setUsername(e.target.value);
            }}></InputBox>

            {/* PASSWORD */}
            <InputBox label={"Password"} placeholder={"Create password (Minimum length 8)"} onChange={(e) => {
                setPassword(e.target.value);
            }}></InputBox>

            {/* SIGN UP */}
            <div className="p-6 pb-1">
                <Button label={"Sign Up"} onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/v1/user/signup", {
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token", response.data.token);
                }}></Button>
            </div>

            {/* WARNING */}
            <BottomWarning label={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></BottomWarning>
        </div>
    </div>
}