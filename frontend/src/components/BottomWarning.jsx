import PropTypes from "prop-types"
import { Link } from "react-router-dom"
export function BottomWarning({label, buttontext, to}) {
    return <div className="flex justify-center pt-0 pb-10">
        {label}
        <Link to={to} className="px-0.5 underline">{buttontext}</Link>
    </div>
}

BottomWarning.propTypes = {
    label: PropTypes.string,
    buttontext: PropTypes.string,
    to: PropTypes.string
}