import PropTypes from "prop-types";
import { Button } from "./Button"

export function Users() {
    const users = ["Harkirat Singh", "Shikhar Srivastava"]

    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>

        {/* SEARCH BAR */}
        <div className="my-2">
            <input type="text" placeholder="Search users" className="border-2 w-full rounded-md py-1 px-2"/>
        </div>

        {/* FRIENDS */}
        <div id="mappingUsers">
            {users.map(user => <User key={user} user={user}/>)}
        </div>
    </div>
}

// MAPPING FUNCTION
function User({user}) {
    return <div>
        <div className="flex justify-between border-b-2 py-2 items-center">
            <div className="flex justify-start items-center">

                {/* AVATAR */}
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-slate-400 ml-1 mr-1">
                    <div className="text-lg">{user[0]}</div>
                </div>

                <div className="font-semibold">
                    {user}
                </div>
            </div>
            
            <div className="flex h-full">
                <Button label={"Send Money"} onClick={() => {}}/>
            </div>
        </div>
    </div>
}

User.propTypes = {
    user: PropTypes.string
}