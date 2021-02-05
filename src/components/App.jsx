import React, { useState, useEffect } from "react";
import Form from "./Form.jsx";
import Preload from "./Preload";
import Item from "./Items";

const App = () => {
  // items in Local Storage
  let initialItems = JSON.parse(localStorage.getItem("items"));
  if (!initialItems) {
    initialItems = [];
  }

  const [done, setDone] = useState(false);
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    if (initialItems) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }, [initialItems, items]);

  setTimeout(() => {
    setDone(true);
  }, 3500);

  const createItems = (item) => {
    setItems([...items, item]);
  };

  // Funtion to Delete items by ID
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  //Manage conditional for Title
  const title =
    items.length === 0 ? "No Appointments Available" : "Manage Appointments";

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
                <Form createItems={createItems} />
              </div>
              <div className="one-half column">
                <h2>{title}</h2>
                {items.map((item) => (
                  <Item key={item.id} item={item} deleteItem={deleteItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
