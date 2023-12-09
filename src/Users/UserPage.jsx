import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
  }

  useEffect(() => {
    fetchUser()
  }, [])
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #573d3d;
    flex-direction: column;
  `

  const PP = styled.p`
    text-align: center;
    border: 5px ridge orange;
    padding: 5px 10px;
  `

  return (
    <Wrapper>
      <PP>{user.username}</PP>
      <PP>{user?.address?.city}</PP>
      <PP>{user?.email}</PP>
      <PP>{user?.company?.catchPhrase}</PP>
      <PP>{user?.phone}</PP>
      <PP>
        <Link to={`https://${user?.website}`}>webpage</Link>
      </PP>
      <PP>{user?.address?.street}</PP>
      <PP>{user?.address?.zipcode}</PP>
    </Wrapper>
  )
}

export default UserPage
