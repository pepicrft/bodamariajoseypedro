import React, { useContext } from "react"
import LanguageContext from "./language-context"

const Other = () => {
  const { language } = useContext(LanguageContext)
  if (language === "spanish") {
    return (
      <div>
        <h2>Datos de contacto ℹ️</h2>
        <p>Para cualquier cosa puedes ponerte en contacto con nosotros.</p>
        <div>María José - +34 650023700</div>
        <div>Pedro - ‭+49 173 4970760‬</div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img
            width="20"
            height="20"
            src="data:image/png;base64,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"
          />
          <img
            style={{ marginLeft: "10px" }}
            width="20"
            height="20"
            src="https://ui-ex.com/images/vector-app-5.png"
          />
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Contact information ℹ️</h2>
        <p>If you need anything you can contact us anytime.</p>
        <div>María José - +34 650023700</div>
        <div>Pedro - ‭+49 173 4970760‬</div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img
            width="20"
            height="20"
            src="data:image/png;base64,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"
          />
          <img
            style={{ marginLeft: "10px" }}
            width="20"
            height="20"
            src="https://ui-ex.com/images/vector-app-5.png"
          />
        </p>
      </div>
    )
  }
}
export default Other
