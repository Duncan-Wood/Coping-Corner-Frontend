import { useContext } from 'react'
import { UserProvider } from '../UserProvider'

const Profile = ({ user }) => {
    return (
      <div className="profile">
        <h2 className="profile__name">{user.name}'s Profile</h2>
        <div className="profile__info">
          <p className="profile__email">Email: {user.email}</p>
          <p className="profile__username">Username: {user.username}</p>
          {/* Add any other user information you want to display */}
        </div>
      </div>
    );
  };
  
  export default Profile;
  