import React from "react"

const defaultState = {
  guests: [],
}
const GuestsContext = React.createContext(defaultState)

export default GuestsContext
