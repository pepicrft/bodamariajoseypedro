import React from "react"
import maincss from "./main.css"
import { space, background } from "styled-system"
import styled from "styled-components"
import { Box } from "rebass"

const StyledDiv = styled.div`
  ${space}
  ${background}
`

const StyledMain = styled.main`
  ${space}
  ${background}
`

const StyledAccount = styled(Box)`
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size:16px"><text y="18">💵</text></svg>'),
    auto;

  &:hover,
  &:focus,
  &:active {
    top: calc(50vh - (2rem + 1px + 1rem - 0.25rem));
    box-shadow: none;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledDiv background={["white", "#ffddb7"]} px={[30, 150]}>
      <StyledMain background={"white"} p={[0, 50]}>
        {children}
      </StyledMain>
      <StyledAccount
        fontSize={3}
        p={4}
        bg={["white", "#ffddb7"]}
        color="#604a30"
      >
        <span>IBAN: DE19100110012622223170</span>
        {"  -  "}
        <span>BIC: NTSBDEB1XXX</span>
      </StyledAccount>
    </StyledDiv>
  )
}

export default Layout
