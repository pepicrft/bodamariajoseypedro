import React, { useContext } from "react"
import LanguageContext from "./language-context"

const When = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <h2>Cuándo 📆</h2>
        <p>
          La boda la celebraremos el <b>sábado 21 de septiembre de 2019</b> a
          mediodía. <i>¿Por qué septiembre?</i> La Región de Murcia se
          caracteriza por alcanzar unas temperaturas muy altas en verano y, para
          evitar ese sufrimiento, hemos escogido una fecha donde esperemos que
          el clima sea más agradable.
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>When 📆</h2>
        <p>
          The wedding will be celebrated on <b>Saturday September 21st, 2019</b>{" "}
          at noon. <i>Why September?</i> In The Region of Murcia is common to
          reach very high temperatures in summer and, to avoid that suffering,
          we have chosen a date where we hope that the climate will be more
          pleasant.
        </p>
      </div>
    )
  }
}
export default When
