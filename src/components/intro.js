import React, { useContext } from "react"
import Language from "./language"
import cartoon from "./cartoon.jpg"
import LanguageContext from "./language-context"

const Intro = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <img width="200" height="200" src={cartoon} />
        <h1>Boda Pedro y María José</h1>
        <Language />
        <p>👋 Hola xxx y zzzz!</p>
        <p>
          Si estás leyendo esto es porque tenemos una muy buena noticia. El día{" "}
          <b>21 de septiembre de 2019</b> organizamos una pequeña boda en un
          lugar idílico. Y como las celebraciones importantes necesitan de
          personas importantes, nos encantaría contar contigo para celebrar el
          amor con nosotros.
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <img width="200" height="200" src={cartoon} />
        <h1>Pedro & María José's Wedding</h1>
        <Language />
        <p>👋 Hi xxx y zzzz!</p>
        <p>
          If you're reading this, it's because we have some very good news! On{" "}
          <b>September 21st, 2019</b> we organize our wedding in an idyllic
          place. And since important celebrations need important people, we
          would be very happy if we could count on you to celebrate love with
          us.
        </p>
      </div>
    )
  }
}
export default Intro
