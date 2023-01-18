import React from 'react'
import PropTypes from 'prop-types'
const User = (props) => {
  return (
    <div>
        {
            `Hi mr ${props.user} you have ${props.child} childes`
        }
    </div>
  )
}

User.propTypes = {
    user: PropTypes.string,
    child: PropTypes.number.isRequired
}

User.defaultProps = {
    user: 'user'
}

export default User