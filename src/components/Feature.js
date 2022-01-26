import React from 'react';

const Features = ({item,className}) => {

 const {title,description,image,reverse} = item

  return (
    <div className={`${reverse ?'flex flex-row-reverse' :'flex' }`}>
      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <h1>{title}</h1>
        <p>
         {description}
        </p>
        <a href="">Learn more</a>
      </div>
    </div>
  )
};

export default Features;
