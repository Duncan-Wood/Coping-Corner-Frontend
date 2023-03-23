import { useContext } from 'react'
import { UserProvider } from '../UserProvider'

const Profile = ({ user }) => {

    const {user} = useContext(UserProvider)
    const {authenticated} = useContext(UserProvider)
    
    return (
      <div>
        <h2>{user.name}'s Profile</h2>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
      </div>
    );
  };
  
  export default Profile;