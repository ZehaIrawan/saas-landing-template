import React from "react";

const PricingItem = ({item,index}) => {

  const {plan,price,features} = item

  return (
    <div className={`${index === 1? 'bg-orange-500' :'bg-gray-300'} w-full`}>
      <h6>{plan}</h6>
      <span>{price}</span>
      <ul>
        {features.map((item,index) => {
         return <li key={index}>{item}</li>
        })}
        </ul>
    </div>
  )
}

export default PricingItem
