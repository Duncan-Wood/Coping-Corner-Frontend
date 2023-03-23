import { useContext } from 'react'
import { UserProvider } from '../UserProvider'

const Profile = () => {
    return (
      <div className="profile">
        <h2 className="profile__name">{user.name}'s Profile</h2>
        <div className="profile__info">
        <p className="profile__email">Email: {user.email}</p>
        <p className="profile__username">Username: {user.username}</p>
      </div>
      </div>
    );
  };
  
  export default Profile;
  