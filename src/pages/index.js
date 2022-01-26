import * as React from "react"
import Client from "../components/Client"
import FeatureList from "../components/FeatureList"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import PricingList from "../components/PricingList"
import Seo from "../components/seo"
import ExtraList from '../components/ExtraList'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navbar />
    <Hero />
    <Client />

    <FeatureList />

    <ExtraList />

    <PricingList />
  </Layout>
)

export default IndexPage
