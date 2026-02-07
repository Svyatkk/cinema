import Nav from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <BrowserRouter>

        <Nav />

        <Routes>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App