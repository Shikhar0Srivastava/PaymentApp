import PropTypes from "prop-types"
export function Balance({value}) {
    return <div className="flex text-lg">
        <div className="font-bold">
            Your balance:
        </div>
        <div className="px-1 font-semibold">
            ₹{value}
        </div>
    </div>
}

Balance.propTypes = {
    value: PropTypes.string
}