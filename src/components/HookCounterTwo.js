import React, { useState } from "react";

function HookCounterTwo() {
  const [name, setName] = useState({ firstname: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(event) =>
          setName({ ...name, firstname: event.target.value })
        }
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      />
      <h2>Your first Name is - {name.firstname}</h2>
      <h2>Your last name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterTwo;
