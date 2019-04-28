import React from "react"
import maincss from "./main.css"
import { space, background } from "styled-system"
import styled from "styled-components"

const StyledDiv = styled.div`
  ${space}
  ${background}
`

const StyledMain = styled.main`
  ${space}
  ${background}
`

const Layout = ({ children }) => {
  return (
    <StyledDiv background={["white", "#ffddb7"]} px={[30, 150]}>
      <StyledMain background={"white"} p={[0, 50]}>
        {children}
      </StyledMain>
    </StyledDiv>
  )
}

export default Layout
