import React from "react"
import PropTypes from "prop-types"

const SectionHeader = ({ name, style }) => (
  <h1 style={style}>
    {name}
    <hr
      style={{
        width: "100%",
        maxWidth: 600,
        border: "3px solid #c83f01",
      }}
    />
  </h1>
)

SectionHeader.defaultProps = {
  style: {
    fontFamily: "ubuntu",
    textAlign: "center",
  },
}

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default SectionHeader
