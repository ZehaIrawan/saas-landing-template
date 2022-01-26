import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Extra = ({ item }) => {
  const { pic, title, description } = item
  const image = getImage(pic)

  return (
    <div>
      <GatsbyImage
        className="lg:w-full object-contain"
        image={image}
        alt={title}
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Extra
