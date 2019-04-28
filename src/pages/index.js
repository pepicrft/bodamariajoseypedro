import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import When from "../components/when"
import Place from "../components/place"
import Meta from "../components/meta"
import Confirmation from "../components/confirmation"
import Other from "../components/other"
import Turism from "../components/turism"
import GetThere from "../components/get-there"

import LanguageContext from "../components/language-context"
import GuestsContext from "../components/guests-context"

const IndexPage = () => {
  const [language, setLanguage] = useState("spanish")
  const [guests, setGuests] = useState({ guests: [] })

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage
    if (!browserLang) {
      return
    }
    if (browserLang.includes("en")) {
      setLanguage("english")
    } else {
      setLanguage("spanish")
    }
  }, language)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const guests = { guests: urlParams.getAll("guest") }
    setGuests(guests)
  }, guests)

  return (
    <Layout>
      <GuestsContext.Provider value={guests}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Meta title="Boda María José y Pedro" />
          <Intro />
          <Place />
          <When />
          <GetThere />
          <Confirmation />
          <Turism />
          <Other />
        </LanguageContext.Provider>
      </GuestsContext.Provider>
    </Layout>
  )
}
export default IndexPage
