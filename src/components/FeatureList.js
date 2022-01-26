import React from "react"
import Feature from "./Feature"
import { graphql, useStaticQuery } from "gatsby"

const FeatureList = () => {
  const data = useStaticQuery(graphql`
    query FeatureList {
      allDataJson {
        nodes {
          features {
            title
            description
            reverse
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
    <div>
      {data.allDataJson.nodes[0].features.map(item => {
        return <Feature key={item.title} item={item} />
      })}
    </div>
  )
}

export default FeatureList
