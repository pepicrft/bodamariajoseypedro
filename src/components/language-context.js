import React from "react"

const defaultState = {
  language: "es",
  setLanguage: language => {},
}
const LanguageContext = React.createContext(defaultState)

export default LanguageContext
