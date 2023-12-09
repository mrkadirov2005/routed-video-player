import React, { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
// import pie from "./pie.png

import "./header.css"
import styled, { ThemeProvider } from "styled-components"

// import Home from "../Home"
const routes = [
  { name: "All", path: "/all" },
  { name: "Favourite", path: "/Favourite" },
  { name: "uzbek", path: "/uzbek" },
  { name: "reactv", path: "/reactv" },
  { name: "JavaScript", path: "/JavaScript" },
  { name: "Telegraph", path: "/telegraph" },
  { name: "html", path: "/html" },
  { name: "Users Page", path: "/userspage" },
  // { name: "Child 1", path: "/child1" },
  // { name: "Child 2", path: "/child2" },
]
// const headerH = document.getElementById("header").clientHeight

const Header = () => {
  // const { isDark, toggleTheme }

  console.log(ThemeProvider)

  const { pathname } = useLocation()
  console.log(pathname)
  // console.log(headerH)

  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <header id='header'>
      {/* <img src={pie} alt='svg' /> */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "15px",
          color: "brown",
        }}>
        YOU TUBE
      </h1>
      <button onClick={toggleTheme}>menu</button>

      <ul className={isDark ? "black" : "light"}>
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link
                to={route.path}
                className={pathname === route.path ? "active" : ""}>
                {route.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
