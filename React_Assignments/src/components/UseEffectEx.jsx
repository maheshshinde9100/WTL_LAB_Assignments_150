import { useState, useEffect } from 'react';
import './UseEffectEx.css';

function UseEffectEx() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUserData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No user data found</div>;

  return (
    <div className='container'>
      <h1>Leetcode Profile</h1>
      <img src={userData.avatar} alt="User Avatar" width="100" />
      <p>Username: {userData.username}</p>
      <p>Birthday: {userData.birthday}</p>
      <p>Ranking: {userData.ranking}</p>
      <p>Country: {userData.country}</p>
      <p>School: {userData.school}</p>
      <p>About: {userData.about}</p>
    </div>
  );
}

export default UseEffectEx;