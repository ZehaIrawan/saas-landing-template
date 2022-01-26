import React, { useState } from "react";
import PricingItem from './PricingItem';

const PricingList = ({data}) => {

  const [isYearly,setIsYearly] = useState(true)

  const activePlan = isYearly ? data[0].yearly : data[0].monthly;

  return (
    <div className='flex'>
      {activePlan.map((item,index) => {
       return <PricingItem key={index} item={item} index={index}/>
      })}
    </div>
  )
}

export default PricingList
