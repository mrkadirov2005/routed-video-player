import logo from "./logo.svg"
import "./App.css"
import { Link, Navigate, Route, Routes } from "react-router-dom"

import Home from "./pages/Favourite"
import BookList from "./pages/ReactV"
import Book from "./pages/All"
import NewBook from "./pages/JavaScript"
import NotFound from "./pages/NotFound"
import BookLayout from "./BookLayout"
import Header from "./header/Header"
import About from "./pages/Uzbek"
import Contact from "./pages/HTML"
import Favourite from "./pages/Favourite"
import Uzbek from "./pages/Uzbek"
import ReactV from "./pages/ReactV"
import JavaScript from "./pages/JavaScript"
import HTML from "./pages/HTML"
import Telegraph from "./pages/Telegraph"
import All from "./pages/All"
import UsersPage from "./Users/UsersPage"
import UserPage from "./Users/UserPage"
import { createContext, useContext, useState } from "react"
// import Child1 from "./components/Child"
// import Child2 from "./components/Child2"
export const UserContext = createContext("jack")

// UsersPage

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <UserContext.Provider value={Greet}> */}{" "}
      <Routes>
        <Route element={<BookLayout />}>
          {" "}
          <Route path='/' element={<All />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='uzbek' element={<Uzbek />} />
          <Route path='/all' element={<All />} />
          <Route path='/reactV' element={<ReactV />} />
          <Route path='/JavaScript' element={<JavaScript />} />
          <Route path='/html' element={<HTML />} />
          <Route path='/telegraph' element={<Telegraph />} />
          <Route path='/userspage' element={<UsersPage />} />
          <Route path='user/:id' element={<UserPage />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
