import PropTypes from "prop-types";
import { Button } from "./Button"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(
            response => {
                setUsers(response.data.user);
            }
        )
    }, [filter])

    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>

        {/* SEARCH BAR */}
        <div className="my-2">
            <input type="text" placeholder="Search users" className="border-2 w-full rounded-md py-1 px-2" onChange={(e) => {
                setFilter(e.target.value);
            }}/>
        </div>

        {/* FRIENDS */}
        <div id="mappingUsers">
            {users.map(user => <User key={user.firstName} user={user}/>)}
        </div>
    </div>
}

// MAPPING FUNCTION
function User({user}) {

    const navigate = useNavigate()

    return <div>
        <div className="flex justify-between border-b-2 py-2 items-center">
            <div className="flex justify-start items-center">

                {/* AVATAR */}
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-slate-400 ml-1 mr-1">
                    <div className="text-lg">{user.firstName[0]}</div>
                </div>

                <div className="font-semibold">
                    {user.firstName + " " + user.lastName}
                </div>
            </div>
            
            <div className="flex h-full">
                <Button label={"Send Money"} onClick={() => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName + "_" + user.lastName);
                }}/>
            </div>
        </div>
    </div>
}

User.propTypes = {
    user: PropTypes.object
}