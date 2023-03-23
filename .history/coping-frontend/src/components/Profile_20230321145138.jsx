import React, { useState, useEffect } from 'react';
import { CheckSession } from '../Services/api';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const session = await CheckSession();
        setUser(session.user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="profile">
      <img src={user.avatar} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;
  