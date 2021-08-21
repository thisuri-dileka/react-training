import React, { useState } from "react";

export default function Profile() {
  const [userName, setUserName] = useState("Thisuri");
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  const changeName = () => {
    setUserName("Hasith");
  };

  return (
    <div>
      <h2>This is the profile.</h2>
      <h3>My name is {userName}.</h3>
      <button type="button" onClick={changeName}>
        Change Name
      </button>
      <div>
        <h3>Numbers</h3>
        <button type="button" onClick={increaseNumber}>
          +
        </button>
        {` Number is: ${number} `}
        <button type="button" onClick={decreaseNumber}>
          -
        </button>
      </div>
    </div>
  );
}
