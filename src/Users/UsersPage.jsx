import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(true)

  setTimeout(() => setRefresh(!refresh), 5000)

  const fetchUsersFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resUser) => setUsers(resUser))
  }

  useEffect(() => {
    fetchUsersFromApi()
  }, [refresh])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map((user) => (
        <Link to={`/user/${user.id}`}>{user.username}</Link>
      ))}
    </div>
  )
}

export default UsersPage
