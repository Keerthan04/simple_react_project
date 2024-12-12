import ClipLoader from "react-spinners/ClipLoader"
import PropTypes from 'prop-types';
//using the react-spinners library for showing the spinner
const Spinner = ({loading}) => {
    return (
        <ClipLoader
            color="#36d7b7"
            loading={loading}
            cssOverride = {{display: 'block', margin: '100px auto'}}
            size = {150}
        />
    )
}
Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
}
export default Spinner
