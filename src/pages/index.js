import React, { useState } from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import When from "../components/when"
import Place from "../components/place"
import Meta from "../components/meta"
import LanguageContext from "../components/language-context"

const IndexPage = () => {
  const [language, setLanguage] = useState("spanish")
  return (
    <Layout>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Meta title="Boda María José y Pedro" />
        <Intro />
        <Place />
      </LanguageContext.Provider>
    </Layout>
  )
}
export default IndexPage
