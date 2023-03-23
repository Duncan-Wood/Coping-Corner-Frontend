import { useState, useEffect } from 'react'
import { CheckSession } from '../Services/Auth'
import axios from 'axios'

export default function Tookit() {

  const [userFavorites, setUserFavorites] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const user = await CheckSession();
            setUser(user);
        } catch (error) {
        }
    };
    fetchUser();
}, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/favorite`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setUserFavorites(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFavorites()
    console.log(fetchFavorites())
  }, [])

  return (
    <div>
      <h1> Your Toolkit </h1>
      {userFavorites.map(( favorite ) => (
        <div key={ favorite.id }>
          <h2> { favorite.Resource.title } </h2>
          <p> { favorite.Resource.preview_text } </p>
          <p> Time Requirement: { favorite.Resource.time_requirement } </p>
        </div>
      ))}
    </div>
  )
}
