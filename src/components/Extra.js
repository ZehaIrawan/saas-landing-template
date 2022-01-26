import React from "react"

const Extra = ({item}) => {

  const {image,title,description} = item

  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Extra
