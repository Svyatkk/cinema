import Nav from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Components/Main/Main"
import FilmPage from "./Pages/FilmPage"
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePag"
import ShowFavourite from "./Pages/ShowFavourite"
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

          <Route path="/films/favourites" element={<ShowFavourite />} />



        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App