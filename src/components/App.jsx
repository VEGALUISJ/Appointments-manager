import React, { useState } from "react";
import Form from "./Form.jsx";
import Preload from "./Preload";

const App = () => {
  const [done, setDone] = useState(undefined);

  setTimeout(() => {
    setDone(true);
  }, 6000);

  return (
    <div>
      {!done ? (
        <Preload />
      ) : (
        <div>
          <h1>Costumer Scheduler</h1>

          <div className="container">
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column">2</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
