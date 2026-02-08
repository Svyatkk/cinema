import Nav from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Components/Main/Main"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App