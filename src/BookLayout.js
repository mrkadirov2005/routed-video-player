import { React } from "react"
import { Outlet } from "react-router-dom"
import Header from "./header/Header"

// import React from "react"

const BookLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default BookLayout
