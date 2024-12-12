import PropTypes from "prop-types"
export function Balance({value}) {

    const val = Math.round(value * 100) / 100;

    return <div className="flex text-lg">
        <div className="font-bold">
            Your balance:
        </div>
        
        <div className="px-1 font-semibold">
            ₹{val}
        </div>
    </div>
}

Balance.propTypes = {
    value: PropTypes.number
}