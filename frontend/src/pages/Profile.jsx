import PropTypes from "prop-types"
import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { PasswordComponent } from "../components/PasswordComponent"
import { useState, useRef } from "react"
import axios from "axios"
import { useRecoilValue, RecoilRoot } from "recoil"
import { meAtom } from "../store/atoms"

export function Profile() {

  return (
    <div className='min-h-screen flex items-center justify-center font-parkinsans bg-[#8476ba]'>
      <Card>
        <RecoilRoot>
          <CardContents/>
        </RecoilRoot>
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div className='shadow-md h-min w-max min-w-[450px] rounded-lg bg-white justify-center'>
    {children}
  </div>
}

function CardContents() {

  const me = useRecoilValue(meAtom);

  const [error, setError] = useState(true);
  const [hidden, setHidden] = useState(true);

  const [count, setCount] = useState(true);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [pass, setPass] = useState("");

  const firstRef = useRef();
  const lastRef = useRef();
  const passRef = useRef();

  return <>
      <div className='h-[125px] bg-[#f6e4ff] flex items-center justify-center rounded-t-lg'>
        <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-[#4d4281]">
            <div className="text-white text-xl">{me.fName[0]}</div>
        </div>
      </div>
      <div className='h-auto px-6'>
        <div className="flex pl-2 justify-center">
          <Heading label={me.fName + " " + me.lName}></Heading>
          <button className="flex items-center pl-2" onClick={() => {
            if (count) {
              setHidden(false);
            } else {
              setHidden(true);
            }
            setCount(val => !val);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>
        </div>
        <Subheading label={me.email}></Subheading>
        <div className="flex-col">
          <div className={`flex justify-center text-sm text-red-500 ${error ? "hidden": ""}`}>
            Some error occurred. Check your inputs and try again
          </div>
          <div className={`flex-col text-left ${hidden ? "hidden" : ""} pb-6`}>
            <InputBox ref={firstRef} label={"First name"} placeholder={"Enter new first name"} onChange={(e) => {
              setFirst(e.target.value);
            }}></InputBox>

            <InputBox ref={lastRef} label={"Last name"} placeholder={"Enter new last name"} onChange={(e) => {
              setLast(e.target.value);
            }}></InputBox>

            <PasswordComponent ref={passRef} label={"Password"} placeholder={"Enter new password"} onChange={(e) => {
              setPass(e.target.value);
            }}></PasswordComponent>

            <button onClick={async () => {
              try {
                await axios.put("http://localhost:3000/", {
                  firstName: first,
                  lastName: last,
                  password: pass
                }, {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                })
                setError(true)
              } catch (error) {
                console.error(error);
                setError(false);
                firstRef.current.value = "";
                lastRef.current.value = "";
                passRef.current.value = "";
              }
          }} className="justify-center mt-4 rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-[#4d4281] text-white hover:bg-[#ae99ff]">Click to update</button>
          </div>
        </div>
      </div>
    </>
}

Card.propTypes= {
  children: PropTypes.any
}