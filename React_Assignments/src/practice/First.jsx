import {useState} from 'react';
const First = () => {
  const [arr,setArr] = useState([10,20,30])
  let [count,setCount] = useState(30);
  return (
    <>
     {arr.map((x)=><h1>{x}</h1>)}

     <button style={{background:'red',color:'white',padding:'10px',margin:'20px'}} onClick={() => setArr(arr.map((x) => x + 10))}>
      Increment the Counter by 10
     </button>
     <br></br>
     <button style={{background:'green',color:'white',padding:'10px',margin:'20px'}} onClick={()=>{
      setArr([...arr,count+10])
      setCount(count+10);
     }}>ADD</button>
     
    </>
  )
}

export default First