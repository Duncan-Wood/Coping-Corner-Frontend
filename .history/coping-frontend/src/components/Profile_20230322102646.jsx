import React, { useState, useEffect, useContext } from 'react'
import { GetResources } from "../Services/ResourceServices"
import { CheckSession } from '../Services/Auth'
import { UserProvider } from '../UserProvider'



function Profile() {
    const [ loading, setLoading ] = useState(true)
    const [ user, setUser ] = useState(null)
    const [ error, setError ] = useState(null)

    // const { user } = useContext(UserProvider)
    const { resources } = useContext(UserProvider)
    const { setResources } = useContext(UserProvider)

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTypes, setSelectedTypes] = useState([])
    const [selectedFeelings, setSelectedFeelings] = useState([])
    console.log(user)
    // const [showEditProfile, setShowEditProfile] = useState(false)
    useEffect(() => {
        const handleGetResources = async () => {
          const results = await GetResources()
          setResources(results)
        }
        handleGetResources()
      }, [])
        useEffect(() => {
        const fetchResources = async () => {
          const results = await GetResources(searchQuery, selectedTypes, selectedFeelings)
          setResources(results)
        }
        fetchResources()
      }, [searchQuery, selectedTypes, selectedFeelings])

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

//   const handleEditProfile = () => {
//     window.location.href = '/EditProfile'
//   }


  if (loading) {
    return <p> Loading... </p>
  }

  if (error) {
    return <p> Error: { error.message } </p>
  }

  return (
    <div>
      <h2> Welcome back, { user.email }! </h2>
      {/* <button onClick={ handleEditProfile }> Edit Profile </button> */}
    </div>
  )
}


export default Profile;
  