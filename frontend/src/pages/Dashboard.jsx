import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { RecoilRoot } from "recoil"
import axios from "axios"

export function Dashboard() {
    
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.token
            }
        }).then(response => {
            setBalance(response.data.balance);
        })
    }, [balance])
    

    return <div>

        {/* NAVBAR */}
        <RecoilRoot>
            <Appbar/>
        </RecoilRoot>
        
        <div className="m-8">

            {/* USER BALANCE */}
            <Balance value={balance}/>

            {/* FRIENDS */}
            <Users/>
        </div>
    </div>
}