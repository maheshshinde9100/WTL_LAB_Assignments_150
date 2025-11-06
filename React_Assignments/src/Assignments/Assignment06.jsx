import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Assignment06 = () => {
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#eef6ff' }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', width: 300 }}>
        <img src={data.avatar} alt="Avatar" width="100" style={{ borderRadius: '50%', marginBottom: 10 }} />
        <h3 style={{ color: '#007bff' }}>Leetcode Profile</h3>
        <p><b>Username:</b> {data.username || 'N/A'}</p>
        <p><b>Ranking:</b> {data.ranking || 'N/A'}</p>
        <p><b>Country:</b> {data.country || 'N/A'}</p>
        <p><b>School:</b> {data.school || 'N/A'}</p>
        <p><b>About:</b> {data.about || 'N/A'}</p>
        <button
          onClick={() => setRefresh(refresh + 1)}
          style={{
            marginTop: 10,
            padding: '8px 16px',
            border: 'none',
            borderRadius: 5,
            background: '#28a745',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Assignment06;
