import React from "react"

import PropTypes from "prop-types"

import "./Input.scss"

const Input = (props) => {
  switch (props.type) {
    case "text":
    case "email":
    case "number":
      return <input type={props.type} {...props} />
    case "check":
      return (
        <label>
          <input type={props.type} {...props} />
        </label>
      )
    case "textarea":
      return <textarea {...props} />
    default:
      return null
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Input
