import React from "react"
import {withPrefix} from 'gatsby'

const Extra = ({item}) => {

  const {image,title,description} = item

  return (
    <div>
      <img src={withPrefix(image)} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Extra
