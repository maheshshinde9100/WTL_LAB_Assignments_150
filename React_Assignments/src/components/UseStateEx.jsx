import { useState } from "react";
function UseStateEx() {
  const [count, setCount] = useState(0);
  const images = ['1st.jpg','2nd.jpg','3rd.jpg','4th.jpg','5th.jpg','6th.png'];
  return (
    <>
      <h1 className="flex justify-center text-3xl">Count : {count}</h1>
      <div className="flex justify-center justify-between gap-10 m-10">
        <button
          className="bg-sky-100 border-1 h-20 w-50"
          onClick={() => {
            (count == 0) ? alert("Count cannot be less than 0") :
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
        <button
          className="bg-sky-100 border-1 h-20 w-50"
          onClick={() => {
            (count == 5) ? alert("Count cannot be more than 5") :
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <h1 className="flex justify-center text-3xl">Image {count+1}</h1>
      <img className="flex justify-center" src={images[count]} alt="image" />
    </>
  );
}
export default UseStateEx;
