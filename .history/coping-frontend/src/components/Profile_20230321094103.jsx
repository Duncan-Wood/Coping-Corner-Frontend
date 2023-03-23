const Profile = ({ user }) => {
    return (
      <div>
        <h2>{user.name}'s Profile</h2>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
      </div>
    );
  };
  
  export default Profile;