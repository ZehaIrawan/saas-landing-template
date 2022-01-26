import * as React from "react"
import Client from "../components/Client"
import Extra from "../components/Extra"
import Feature from "../components/Feature"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import PricingList from '../components/PricingList'
import Seo from "../components/seo"

const features = [
  {
    title: "Subscription Index",
    description:
      "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.",
    image: "/feature1.png",
    reverse: false,
  },
  {
    title: "In-depth metrics",
    description:
      "Accurate, real-time reporting at your fingertips. Getting data has never been easier.",
    image: "/feature2.png",
    reverse: true,
  },
]

const extras = [
  {
    image: "/extra1.png",
    title: "Benchmark",
    description:
      "See how you stack up against comparable companies in similar stages.",
  },
  {
    image: "/extra2.png",
    title: "Pricing Audit",
    description:
      "Benchmark the health of your monetization and pricing strategy.",
  },
  {
    image: "/extra3.png",
    title: "Retention Audit",
    description:
      "Audit where revenue leakage exists and where you can increase retention.",
  },
]

const pricing = [
  {
    yearly: [
      {
        plan: "Starter",
        price: "Free",
        features: ["1 Website", "5GB Hosting", "Limited Support"],
      },
      {
        plan: "Premium",
        price: "$29/month",
        features: ["10 Website", "15GB Hosting", "Premium Support"],
      },
      {
        plan: "Enterprise",
        price: "$49/month",
        features: ["Unlimited Website", "50GB Hosting", "Premium Support"],
      },
    ],
    monthly: [
      {
        plan: "Starter",
        price: "Free",
        features: ["1 Website", "5GB Hosting", "Limited Support"],
      },
      {
        plan: "Premium",
        price: "$49/month",
        features: ["10 Website", "15GB Hosting", "Premium Support"],
      },
      {
        plan: "Enterprise",
        price: "$69/month",
        features: ["Unlimited Website", "50GB Hosting", "Premium Support"],
      },
    ],
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navbar />
    <Hero />
    <Client />
    {features.map(item => {
      return <Feature key={item.title} item={item} />
    })}

    <div className='flex justify-between'>
    {extras.map(item => {
      return <Extra key={item.title} item={item} />
    })}
    </div>

    <PricingList data={pricing}/>

  </Layout>
)

export default IndexPage
