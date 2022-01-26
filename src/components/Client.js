import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Client = () => {
  const data = useStaticQuery(graphql`
    query ClientList {
      allDataJson {
        nodes {
          clients {
            pic {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)




  const clientData = data.allDataJson.nodes[0].clients

  return (
    <div className="flex justify-between">
      {clientData.map((item, index) => {
        const image = getImage(item.pic)
        return (
          <GatsbyImage
            key={index}
            className=""
            image={image}
            alt={''}
          />
        )
      })}
    </div>
  )
}

export default Client
