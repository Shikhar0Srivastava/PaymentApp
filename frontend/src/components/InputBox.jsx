import PropTypes from "prop-types"
import { forwardRef } from "react"

// export function InputBox({label, placeholder, onChange, thisRef}) {
//     return <div className="px-6">
//         <div className="font-medium py-1">
//             {label}
//         </div>
//         <input ref={thisRef} type="text" placeholder={placeholder} onChange={onChange} className="border-2 rounded-md w-full px-2 p-1 text-left"/>
//     </div>
// }

export const InputBox = forwardRef(function InputBox({label, placeholder, onChange}, thisRef) {
    return <div className="px-6">
        <div className="font-medium py-1">
            {label}
        </div>
        <input ref={thisRef} type="text" placeholder={placeholder} onChange={onChange} className="border-2 rounded-md w-full px-2 p-1 text-left"/>
    </div>
})

InputBox.propTypes =  {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}