import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Place = () => {
  const { language } = useContext(LanguageContext)
  const cottageUrl = "http://www.casadelacampana.com/"
  if (language === "spanish") {
    return (
      <div>
        <h2>Dónde</h2>
        <p>
          La boda tendrá lugar en <b>Cieza</b>, el pueblo que nos vio crecer.
          Concretamente, la celebración será en{" "}
          <a href={cottageUrl} target="__blank">
            La Casa de la Campana
          </a>
          , una bella casa rural a apenas unos kilómetros de la ciudad.
        </p>
        <p>
          El día de la boda facilitaremos un autobús tanto para ir como para
          volver de la casa desde el centro de Cieza.
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Where</h2>
        <p>
          The wedding will take place in <b>Cieza</b>, the town that saw us grow
          up. Specifically, the celebration will take place in{" "}
          <a href={cottageUrl} target="__blank">
            La Casa de la Campana
          </a>
          , a beautiful cottage house just a few kilometers from the city.
        </p>
        <p>
          On the wedding day, we will provide a bus to and from the cottage
          house departing from the centre of Cieza.
        </p>
      </div>
    )
  }
}
export default Place
