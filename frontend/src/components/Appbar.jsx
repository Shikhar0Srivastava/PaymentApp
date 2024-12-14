import Popup from "reactjs-popup"
import { AvatarOnClick } from "./AvatarOnClick"
import PropTypes from "prop-types"

export function Appbar({name}) {
    return <div className="flex justify-between p-2 font-semibold h-15 items-center border-b-2">
        PayTM App
        <div className="flex items-center">
            Hello, {name}

            {/* AVATAR */}
            <Popup trigger={<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-slate-400 ml-1 cursor-pointer">
                                <div className="text-white text-xl">{name[0]}</div>
                            </div>} position={"bottom right"}>{
                <AvatarOnClick/>
            }</Popup>
        </div>
    </div>
}

Appbar.propTypes = {
    name: PropTypes.string
}