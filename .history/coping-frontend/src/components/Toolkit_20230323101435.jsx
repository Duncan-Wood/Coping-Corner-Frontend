import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Tookit() {

  const [userFavorites, setUserFavorites] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/favorite", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setUserFavorites(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFavorites()
  }, [])
  return (
    <div>
      <h1>Your Toolkit</h1>
      {userFavorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.resource.title}</h2>
          <p>{favorite.resource.preview_text}</p>
        </div>
      ))}
    </div>
  )
}
