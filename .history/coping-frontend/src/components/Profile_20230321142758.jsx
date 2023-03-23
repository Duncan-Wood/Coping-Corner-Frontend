import { useContext } from 'react'
import { UserProvider } from '../UserProvider'

const Profile = () => {
    return (
        <div className="profile">
        <img src={user.avatar} alt="User Avatar" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button>Edit Profile</button>
      </div>
    );
  };
  
  export default Profile;
  