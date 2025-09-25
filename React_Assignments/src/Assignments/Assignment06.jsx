import React, { useState,useEffect } from 'react'

const Assignment06 = () => {
    const [data,setData] = useState({});
    const [refreshValue,setRefreshValue] = useState(0);
    useEffect(()=>{
        async function fetchData(){
            try{
            const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
            const data = await response.json();
            console.log(data);

            setData(data);
            }catch(err){
                console.error(err);
            }
        }
        fetchData();
        console.log("Data fetched => refreshvalue: "+ refreshValue);
    },[refreshValue])
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'lightblue'}}>
        <hr/>
        <br/>
        <button style={{background:'green'}} onClick={()=>setRefreshValue(refreshValue+1)}>Refresh</button>
        <h1><b>Leetcode Profile</b></h1>
        <h1>Username: {data.username}</h1>
        <h1>Birthday: {data.birthday}</h1>
        <h1>Ranking: {data.ranking}</h1>
        <h1>Country: {data.country}</h1>
        <h1>School: {data.school}</h1>
        <h1>About: {data.about}</h1>
        <img src={data.avatar} alt="User Avatar" width="100" />
    </div>
    </>
  )
}

export default Assignment06