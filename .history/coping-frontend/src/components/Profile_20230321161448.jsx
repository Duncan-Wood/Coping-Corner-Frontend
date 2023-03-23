import React, { useState, useEffect } from 'react'
import { CheckSession } from '../Services/Auth'


function Profile() {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await CheckSession()
        setUser(user)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
      console.log(user)
    }
    fetchUser()
  }, [])

  if (loading) {
    return <p> Loading... </p>
  }

  if (error) {
    return <p> Error: { error.message } </p>
  }

  return (
    <div>
      <h2> Welcome back, { user.username }! </h2>
      <button> Edit Profile </button>
    </div>
  )
}


export default Profile;
  