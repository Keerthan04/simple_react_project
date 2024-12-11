

import PropTypes from 'prop-types';

const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bg}`}>
      {children}{/* children is a special prop that gets passed to components automatically */}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string//along with the children taking another prop
};

export default Card
