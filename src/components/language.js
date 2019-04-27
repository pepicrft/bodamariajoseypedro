import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Language = () => {
  const { setLanguage } = useContext(LanguageContext)

  return (
    <p>
      <span>
        <a
          href="#"
          onClick={() => {
            setLanguage("spanish")
          }}
        >
          Español
        </a>
      </span>{" "}
      -{" "}
      <span>
        <a
          href="#"
          onClick={() => {
            setLanguage("english")
          }}
        >
          English
        </a>
      </span>
    </p>
  )
}
export default Language
