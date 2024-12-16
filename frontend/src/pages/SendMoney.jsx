import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios";
import { useState, useRef } from "react";

export function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    const [amount, setAmount] = useState(0);
    const [hidden, setHidden] = useState(true);
    const [error, setError] = useState(true);

    const navigate = useNavigate();

    const amtRef = useRef();

    return <div className="bg-slate-300 h-screen flex justify-center items-center">

        {/* MAIN CARD */}
        <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col justify-center">

                {/* TITLE */}
                <div className="text-4xl font-bold p-6 text-center">
                    Send Money            
                </div>

                <div className="p-6">
                    <div className="flex space-x-4 mb-4">

                        {/* AVATAR */}
                        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-[#4d4281]">
                            <div className="text-white text-xl">{name[0]}</div>
                        </div>

                        {/* NAME */}
                        <div className="flex items-center font-semibold text-2xl">{name.replace("_", " ")}</div>
                    </div>

                    {/* INPUT */}
                    <label className="font-semibold">Enter amount (in ₹)</label>
                    <input ref={amtRef} onChange={(e) => {

                        const amt = e.target.value.trim();

                        setAmount(amt)
                    }} type="text" placeholder="Enter amount..." className="border-2 rounded-md px-2 py-1 mt-2 mb-6 w-full"/>

                    <div className={`flex pb-4 justify-center text-sm text-red-500 ${hidden ? "hidden": ""}`}>
                        Enter valid number
                    </div>

                    <div className={`flex pb-4 justify-center text-sm text-red-500 ${error ? "hidden": ""}`}>
                        Some error occurred. Please try again.
                    </div>

                    {/* BUTTON */}
                    <button onClick={async () => {
                        if (!amount || isNaN(amount) || amount[0] === '-') {
                            amtRef.current.value = ""
                            setError(true);
                            setHidden(false);
                        } else {
                            try {
                                await axios.post("http://localhost:3000/v1/account/transfer", {
                                    amount,
                                    to: id
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.token
                                    }
                                })
                                navigate("/fin");
                            } catch (error) {
                                console.error(error);
                                setError(false);
                                amtRef.current.value = ""
                            }
                        }
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-[#4d4281] text-white hover:bg-[#ae99ff]">Click to send</button>
                </div>
            </div>
        </div>
    </div>
}