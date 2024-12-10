import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export function Dashboard() {
    return <div>

        {/* NAVBAR */}
        <Appbar />
        
        <div className="m-8">

            {/* USER BALANCE */}
            <Balance value={"10,000"}/>

            {/* FRIENDS */}
            <Users/>
        </div>
    </div>
}