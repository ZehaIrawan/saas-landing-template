import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Features = ({ item, className }) => {
  const { title, description, pic, reverse } = item

  const image = getImage(pic)

  return (
    <div className={`${reverse ? "flex flex-row-reverse" : "flex"}`}>
      <div>
        <img src={image} alt="" />
        <GatsbyImage className="lg:w-full object-contain" image={image} alt={title}/>
      </div>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="">Learn more</a>
      </div>
    </div>
  )
}

export default Features
