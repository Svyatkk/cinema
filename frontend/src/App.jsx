import Nav from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Components/Main/Main"
import FilmPage from "./Components/FilmPage/FilmPage"
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePag"
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/:id" element={<ProfilePage />} />




        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App