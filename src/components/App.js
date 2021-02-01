import React, { useState } from "react";
import Preload from "../components/Preload";

const App = () => {
  const [done, setDone] = useState(undefined);

  setTimeout(() => {
    setDone(true);
  }, 5000);

  return (
    <div>
      {!done ? (
        <Preload />
      ) : (
        <div classname="preload">
          <h1>Patient Manager</h1>
        </div>
      )}
    </div>
  );
};

export default App;
