import React from 'react'

const MyLabel = props => (
  <foreignObject>
    <div
      xmlns="http://www.w3.org/1999/xhtml"
      style={{
        width: props.containerWidth / props.tickCount,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      {123}
    </div>
  </foreignObject>
)

export default MyLabel
