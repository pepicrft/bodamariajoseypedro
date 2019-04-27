import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Other = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <h2>Otra información ℹ️</h2>
        <p />
      </div>
    )
  } else {
    return (
      <div>
        <h2>Other information ℹ️</h2>
      </div>
    )
  }
}
export default Other
