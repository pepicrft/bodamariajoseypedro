import React, { useContext } from "react"
import LanguageContext from "./language-context"
import GuestsContext from "./guests-context"

const GetThere = () => {
  const { language } = useContext(LanguageContext)
  const { guests } = useContext(GuestsContext)
  const listStyle = { listStylePosition: "inside" }
  const listItemStyle = { textAlign: "left" }
  if (language === "spanish" && guests.length <= 1) {
    return (
      <div>
        <h2>Cómo llegar a Cieza 🛬</h2>
        <p>
          Si vienes a Cieza desde la lejana Alemania o cualquier otra parte de
          España la mejor opción es volar al{" "}
          <a
            href="http://www.aena.es/en/alicante-airport/index.html"
            target="__blank"
          >
            aeropuerto de Alicante
          </a>{" "}
          que se encuentra a aproximadamente 90 Km de Cieza. Desde allí la
          opción más conveniente es alquilar un coche y seguir las instrucciones
          de Google Maps.
        </p>
        <p>Algunas cosas importantes que deberíais tener en cuenta:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Cieza es un pueblo de 35 mil habitantes con escasas opciones de
            alojamiento y donde AirBnB no es todavía muy famoso.
          </li>
          <li style={listItemStyle}>
            El mismo lugar de celebración,{" "}
            <a href="http://www.casadelacampana.com/" target="__blank">
              La Casa de la Campana
            </a>
            , y la{" "}
            <a href="http://www.sansebastianhospederia.com/" target="__blank">
              Hospedería San Sebastián
            </a>{" "}
            tienen habitaciones disponibles. Por favor, no dudes en contactarnos
            si te decides por alguno de estos lugares, pues contamos con
            descuentos para ambos.
          </li>
          <li style={listItemStyle}>
            Existe un servicio de taxis en el pueblo pero sería muy conveniente
            prever si se necesitará algún servicio en concreto para hacer
            reservas previas. Estaremos encantados de ayudarte con esto también.
          </li>
        </ul>
      </div>
    )
  } else if (language === "spanish" && guests.length > 1) {
    return (
      <div>
        <h2>Cómo llegar a Cieza 🛬</h2>
        <p>
          Si venís a Cieza desde la lejana Alemania o cualquier otra parte de
          España la mejor opción es volar al{" "}
          <a
            href="http://www.aena.es/en/alicante-airport/index.html"
            target="__blank"
          >
            aeropuerto de Alicante
          </a>{" "}
          que se encuentra a aproximadamente 90 Km de Cieza. Desde allí la
          opción más conveniente es alquilar un coche y seguir las instrucciones
          de Google Maps.
        </p>
        <p>Algunas cosas importantes que deberíais tener en cuenta:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Cieza es un pueblo de 35 mil habitantes con escasas opciones de
            alojamiento y donde AirBnB no es todavía muy famoso.
          </li>
          <li style={listItemStyle}>
            El mismo lugar de celebración,{" "}
            <a href="http://www.casadelacampana.com/" target="__blank">
              La Casa de la Campana
            </a>
            , y la{" "}
            <a href="http://www.sansebastianhospederia.com/" target="__blank">
              Hospedería San Sebastián
            </a>{" "}
            tienen habitaciones disponibles. Por favor, no dudéis en
            contactarnos si os decidís por alguno de estos lugares, pues
            contamos con descuentos para ambos.
          </li>
          <li style={listItemStyle}>
            Existe un servicio de taxis en el pueblo pero sería muy conveniente
            prever si se necesitará algún servicio en concreto para hacer
            reservas previas. Estaremos encantados de ayudaros con esto también.
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <h2>How to get to Cieza 🛬</h2>
        <p>
          If you are coming to Cieza from faraway Germany, or any other part of
          Spain, the best option is to fly to{" "}
          <a
            href="http://www.aena.es/en/alicante-airport/index.html"
            target="__blank"
          >
            Alicante Airport
          </a>
          , which is approximately 90 km from Cieza. From there the most
          convenient option is to rent a car and follow the instructions on
          Google Maps.
        </p>
        <p>Some important things you should keep in mind:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Cieza is a village of 35,000 inhabitants with few accommodation
            options and where AirBnB is not yet very famous.
          </li>
          <li style={listItemStyle}>
            The same venue,{" "}
            <a href="http://www.casadelacampana.com/" target="__blank">
              La Casa de la Campana
            </a>
            , and{" "}
            <a href="http://www.sansebastianhospederia.com/" target="__blank">
              Hospedería San Sebastián
            </a>{" "}
            have rooms available. Please do not hesitate to contact us if you
            need help with any of the options. If you decide on one of thse
            places mentioned above, let us know because we might get you some
            discount.
          </li>
          <li style={listItemStyle}>
            There is a taxi service in the town but it would be very convenient
            to anticipate if any particular service will be needed to make
            advance reservations. We would also be happy to help you out with
            this.
          </li>
        </ul>
      </div>
    )
  }
}
export default GetThere
