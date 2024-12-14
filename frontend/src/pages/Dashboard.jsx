import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export function Dashboard() {
    
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.token
            }
        }).then(response => {
            setBalance(response.data.balance);
        })
    }, [balance])

    useEffect(() => {
        axios.get("http://localhost:3000/v1/user/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setName(response.data.name)
        })
    }, [name])
    

    return <div>

        {/* NAVBAR */}
        <Appbar name={name}/>
        
        <div className="m-8">

            {/* USER BALANCE */}
            <Balance value={balance}/>

            {/* FRIENDS */}
            <Users/>
        </div>
    </div>
}