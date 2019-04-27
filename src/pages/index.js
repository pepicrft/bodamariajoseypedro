import React, { useState } from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import When from "../components/when"
import Place from "../components/place"
import Meta from "../components/meta"
import Confirmation from "../components/confirmation"
import Other from "../components/other"
import LanguageContext from "../components/language-context"
import GuestsContext from "../components/guests-context"

const IndexPage = () => {
  const [language, setLanguage] = useState("spanish")
  const guests = { guests: ["Fulanito", "Fulanita"] }

  return (
    <Layout>
      <GuestsContext.Provider value={guests}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Meta title="Boda María José y Pedro" />
          <Intro />
          <Place />
          <When />
          <Confirmation />
          <Other />
        </LanguageContext.Provider>
      </GuestsContext.Provider>
    </Layout>
  )
}
export default IndexPage
