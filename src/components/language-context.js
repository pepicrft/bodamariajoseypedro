import React from "react"

const defaultState = {
  language: "spanish",
  setLanguage: language => {},
}
const LanguageContext = React.createContext(defaultState)

export default LanguageContext
