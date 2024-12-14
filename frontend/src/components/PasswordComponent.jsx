import PropTypes from "prop-types"
import { forwardRef } from "react"

export const PasswordComponent = forwardRef(function InputBox({label, placeholder, onChange}, thisRef) {
    return <div className="px-6">
        <div className="font-medium py-1">
            {label}
        </div>
        <input ref={thisRef} type="password" placeholder={placeholder} onChange={onChange} className="border-2 rounded-md w-full px-2 p-1 text-left"/>
    </div>
})

PasswordComponent.propTypes =  {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}