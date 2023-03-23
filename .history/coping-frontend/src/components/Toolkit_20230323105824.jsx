import { useState, useEffect } from 'react'
import { CheckSession } from '../Services/Auth'
import axios from 'axios'
import { useParams } from 'react-router-dom';


export default function Tookit() {

  const [userFavorites, setUserFavorites] = useState([])
  const [user, setUser] = useState(null)
  let {id} = useParams();

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
        const res = await axios.get('http://localhost:3001/api/resource/' + id, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setUserFavorites(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFavorites()
  }, [id])

  return (
    <div>
      <h1> Your Toolkit </h1>
      {userFavorites ? (
      userFavorites.map(( favorite ) => (
        <div key={ favorite.id }>
          <h2> { favorite.Resource.title } </h2>
          <p> { favorite.Resource.preview_text } </p>
          <p> Time Requirement: { favorite.Resource.time_requirement } </p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
)
}
