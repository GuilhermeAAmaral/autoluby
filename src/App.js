import React from "react"
import Routers from "./routers/Routers"
import GlobalStyle from "./styles/GlobalStyle"
import GlobalState from "./global/GlobalState"

const App = () => {

  return (

    <>
      <GlobalState>
        <GlobalStyle />
        <Routers />
      </GlobalState>
    </>
  )
}

export default App;
