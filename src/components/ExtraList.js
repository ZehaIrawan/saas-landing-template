import React from "react"
import Extra from "./Extra"
import { graphql, useStaticQuery } from "gatsby"

const ExtraList = () => {
  const data = useStaticQuery(graphql`
    query ExtraList {
      allDataJson {
        nodes {
          extras {
            title
            description
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

  return (
    <div className="flex justify-between">
      {data.allDataJson.nodes[0].extras.map(item => {
        return <Extra key={item.title} item={item} />
      })}
    </div>
  )
}

export default ExtraList
