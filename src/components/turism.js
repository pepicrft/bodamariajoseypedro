import React, { useContext } from "react"
import LanguageContext from "./language-context"
import GuestsContext from "./guests-context"

const Turism = () => {
  const { language } = useContext(LanguageContext)
  const { guests } = useContext(GuestsContext)

  if (language === "spanish" && guests.length <= 1) {
    return (
      <div>
        <h2>Turismo en Cieza / Murcia 🍋</h2>
        <p>
          Aunque no sea tan conocida, Murcia es una región rural con bellas
          zonas que visitar. En caso de que tengas intenciones de aprovechar el
          viaje para conocer nuestro entorno, échale un vistazo a estas páginas
          donde encontrarás muchas opciones:{" "}
          <div>
            <a href="https://www.murciaturistica.es/" target="__blank">
              https://www.murciaturistica.es/
            </a>
          </div>
          <div>
            <a href="http://www.ciezaturistica.es/" target="__blank">
              http://www.ciezaturistica.es/
            </a>
          </div>
        </p>
      </div>
    )
  } else if (language === "spanish" && guests.length > 1) {
    return (
      <div>
        <h2>Turismo en Cieza / Murcia 🍋</h2>
        <p>
          Aunque no sea tan conocida, Murcia es una región rural con bellas
          zonas que visitar. En caso de que tengáis intenciones de aprovechar el
          viaje para conocer nuestro entorno, echadle un vistazo a estas página
          donde encontraréis muchas opciones:{" "}
          <div>
            <a href="https://www.murciaturistica.es/" target="__blank">
              https://www.murciaturistica.es/
            </a>
          </div>
          <div>
            <a href="http://www.ciezaturistica.es/" target="__blank">
              http://www.ciezaturistica.es/
            </a>
          </div>
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Tourism in Cieza / Murcia 🍋</h2>
        <p>
          Even though is not that well known, Murcia is a rural region with
          beautiful areas to visit. If you intend to take advantage of the trip
          and get to know our environment, take a look at these pages where you
          will find many options:{" "}
          <div>
            <a href="https://www.murciaturistica.es/" target="__blank">
              https://www.murciaturistica.es/
            </a>
          </div>
          <div>
            <a href="http://www.ciezaturistica.es/" target="__blank">
              http://www.ciezaturistica.es/
            </a>
          </div>
        </p>
      </div>
    )
  }
}
export default Turism
