import React, { useContext } from "react"
import Language from "./language"
import cartoon from "./cartoon.jpg"
import LanguageContext from "./language-context"
import GuestsContext from "./guests-context"

const Intro = () => {
  const { language } = useContext(LanguageContext)
  const { guests } = useContext(GuestsContext)

  const guestString = guests.join(" y ")
  if (language === "spanish" && guests.length <= 1) {
    return (
      <div>
        <img width="200" height="200" src={cartoon} />
        <h1>Boda Pedro y María José</h1>
        <Language />
        <p>👋 ¡Hola, {guestString}!</p>
        <p>
          Si estás leyendo esto es porque tenemos una muy buena noticia:{" "}
          <b>¡nos casamos!</b> Y como las celebraciones importantes necesitan de
          personas importantes, nos encantaría contar contigo para celebrar el
          amor con nosotros.
        </p>
      </div>
    )
  } else if (language === "spanish" && guests.length > 1) {
    return (
      <div>
        <img width="200" height="200" src={cartoon} />
        <h1>Boda Pedro y María José</h1>
        <Language />
        <p>👋 ¡Hola, {guestString}!</p>
        <p>
          {" "}
          Si estáis leyendo esto es porque tenemos una muy buena noticia:{" "}
          <b>¡nos casamos!</b> Y como las celebraciones importantes necesitan de
          personas importantes, nos encantaría contar con vosotros para celebrar
          el amor con nosotros.
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
          If you're reading this, it's because we have some very good news!{" "}
          <b>We are getting married!</b> And since important celebrations need
          important people, we would be very happy if we could count on you to
          celebrate love with us.
        </p>
      </div>
    )
  }
}
export default Intro
