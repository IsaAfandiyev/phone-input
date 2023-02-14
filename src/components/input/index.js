import React, { useState } from 'react'

const PhoneInput = () => {
  const [number, setNumber] = useState("");
  console.log(number)
  const inputChange = (e) => {

    let str = e.target.value.replace(/\D/g, "");

    if (str.length === 0) {
      setNumber(" ")
    }
    else if (str.length <= 3 ) {
      setNumber("(" + str)
    } else if (str.length <= 6) {
      setNumber("(" + str.slice(0, 3) + ") " + str.slice(3, 6))
    } else if (str.length <= 10) {
      setNumber("(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6, 10))
    }

  };


  return (
    <>
      <input onChange={inputChange} type="text" value={number} placeholder="(***) ***-****" />
      <button disabled={number.length!==14} type="submit">Submit</button>
    </>
  );
};

export default PhoneInput;