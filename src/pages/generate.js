import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Meta from "../components/meta"

const GeneratePage = () => {
  const [firstGuest, setFirstGuest] = useState("")
  const [secondGuest, setSecondGuest] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    const params = new URLSearchParams("")
    if (firstGuest !== "") {
      params.append("guest", firstGuest)
    }
    if (secondGuest !== "") {
      params.append("guest", secondGuest)
    }
    let url = "https://bodamariajoseypedro.com"
    if (params != "") {
      url = `https://bodamariajoseypedro.com?${params.toString()}`
    }
    navigator.clipboard.writeText(url).then(
      function() {
        alert("URL copiada al portapapeles")
      },
      function(err) {
        alert("Error generando la url")
      }
    )
  }

  return (
    <Layout>
      <Meta title="Generate" />

      <h1>Generate link</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        <label>
          Primer invitado:{"  "}
          <input
            type="text"
            name="name"
            onChange={event => setFirstGuest(event.target.value)}
          />
        </label>
        <label>
          Segundo invitado:{"  "}{" "}
          <input
            type="text"
            name="name"
            onChange={event => setSecondGuest(event.target.value)}
          />
        </label>

        <input type="submit" value="Generar" />
      </form>
    </Layout>
  )
}
export default GeneratePage
