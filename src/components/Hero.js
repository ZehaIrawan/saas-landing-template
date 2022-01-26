import React from "react"

const Hero = () => {
  return (
    <div className="mt-18 pt-16 flex">
      <div className="flex flex-col">
        <h1>Grow your subscription business</h1>
        <p>
          Outcome-centered products that reduce churn, optimize pricing, and
          grow your subscription business end-to-end.
        </p>
        <button>Get Started</button>
      </div>
      <div>
        <img src="/hero-img.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
