import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          🖕
          </p>
        </div>
      </div>
    </Layout>
  )
}

Layout.defaultProps = {
  title: "Ecommerce app",
  description: "Virtual Try On Project",
  keywords: 'Ecommerce, Fashion, Shopping, Winter Collection, Vintage Collection, Virtual Try On',
  author:'Sanchit', 
}

export default About