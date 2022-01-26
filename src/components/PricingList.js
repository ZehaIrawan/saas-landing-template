import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import PricingItem from './PricingItem';


const PricingList = () => {

const data = useStaticQuery(graphql`
  query PricingList {
    allDataJson {
      nodes {
        pricing {
          yearly {
            plan
            price
            features
          }
          monthly {
            plan
            price
            features
          }
        }
      }
    }
  }
`)

  const shortData = data.allDataJson.nodes[0]

  const [isYearly,setIsYearly] = useState(true)

  const activePlan = isYearly ? shortData.pricing[0].yearly : shortData.pricing[0].monthly;



  return (
    <div className='flex'>
      {activePlan.map((item,index) => {
       return <PricingItem key={index} item={item} index={index}/>
      })}
    </div>
  )
}

export default PricingList
