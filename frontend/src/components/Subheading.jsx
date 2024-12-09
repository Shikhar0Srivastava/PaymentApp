import PropTypes from "prop-types"

export function Subheading({label}) {
    return <div className="text-slate-400 text-md pt-1 px-4 pb-4 text-center">
        {label}
    </div>
}

Subheading.propTypes = {
    label: PropTypes.string
}