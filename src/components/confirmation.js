import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Confirmation = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <h2>Confirmación ✅</h2>
        <p>
          Agradeceríamos que nos confirmaras la asistencia{" "}
          <b>lo antes posible</b>. Rellena por favor{" "}
          <a href="https://forms.gle/fzG1e9w4P7C7F7KGA" target="__blank">
            el siguiente formulario
          </a>
          .
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Confirmation ✅</h2>
        <p>
          We'd appreciate your confirmation <b>as soon as possible</b>. Please
          fill out{" "}
          <a href="https://forms.gle/fzG1e9w4P7C7F7KGA" target="__blank">
            the following form
          </a>
          .
        </p>
      </div>
    )
  }
}
export default Confirmation
