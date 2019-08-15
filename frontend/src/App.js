import React, {Fragment} from "react";

import GlobalStyle from './styles/globals'

import Inscriptions from './pages/Inscriptions'

export default function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Inscriptions></Inscriptions>
    </Fragment>
  )
}
