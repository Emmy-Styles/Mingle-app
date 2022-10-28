import React from 'react'

const UserProf = (({userProfile, loading}) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
    <ul className="list-group mb-4">
      {userProfile.map(userprof => (
        <li key={userprof.id} className="list-group-item">
          {userprof.name}
        </li>
      ))}
    </ul>
    );
  });
export default UserProf

