import {useState} from 'react';
const Assignment05 = ({intialCount}) => {
  const [count, setCount] = useState(intialCount);
  return (
    <>
        <h1 style={{marginLeft:'125px'}}>Count :{count}</h1>

        <button style={{background:'green',color:'white',padding:'10px',margin:'20px'}} onClick={()=>setCount(count+1)}>Increment</button>
        
        <button style={{background:'red',color:'white',padding:'10px',margin:'20px'}} onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}
export default Assignment05;