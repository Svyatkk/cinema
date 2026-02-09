import Nav from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Components/Main/Main"
import FilmPage from "./Components/FilmPage/FilmPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/film/:id" element={<FilmPage />} />



        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App