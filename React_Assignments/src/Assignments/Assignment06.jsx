import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Assignment06 = () => {
  const [data, setData] = useState({});
  const [refreshValue, setRefreshValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
        const data = response.data;
        console.log(data);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
    console.log('Data fetched => refreshValue: ' + refreshValue);
  }, [refreshValue]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#e6f2ff',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          padding: '30px',
          width: '350px',
          textAlign: 'center',
          transition: '0.3s',
        }}
      >
        <img
          src={data.avatar}
          alt="User Avatar"
          width="120"
          height="120"
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #007bff',
            marginBottom: '15px',
          }}
        />
        <h2 style={{ marginBottom: '10px', color: '#007bff' }}>
          <b>Leetcode Profile</b>
        </h2>
        <hr style={{ border: 'none', borderTop: '2px solid #eee', margin: '15px 0' }} />
        <p><b>Username:</b> {data.username || 'N/A'}</p>
        <p><b>Birthday:</b> {data.birthday || 'N/A'}</p>
        <p><b>Ranking:</b> {data.ranking || 'N/A'}</p>
        <p><b>Country:</b> {data.country || 'N/A'}</p>
        <p><b>School:</b> {data.school || 'N/A'}</p>
        <p><b>About:</b> {data.about || 'N/A'}</p>
        <button
          onClick={() => setRefreshValue(refreshValue + 1)}
          style={{
            marginTop: '20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Assignment06;
