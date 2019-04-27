import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Confirmation = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <h2>Confirmación ✅</h2>
        <p>
          Agradeceríamos que nos confirmaras la asistencia lo antes posible.
          Para ello necesitaremos la siguiente información de tu parte:
        </p>
        <p>
          <div>
            Acompañantes y sus nombres <i>(pareja, hijos)</i>
          </div>
          <div>Alergias y requerimientos dietarios</div>
          <div>¿Piensas alojarte en Cieza?</div>
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Confirmation ✅</h2>
      </div>
    )
  }
}
export default Confirmation
