import React from "react";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="item">
      <p>
        Costumer Name: <span>{item.name}</span>
      </p>
      <p>
        Date: <span>{item.date}</span>
      </p>
      <p>
        Time: <span>{item.time}</span>
      </p>
      <p>
        Service Required: <span>{item.service}</span>
      </p>
      <button
        className="button delete u-full-width"
        onClick={() => deleteItem(item.id)}
      >
        Delete &times;
      </button>
    </div>
  );
};

export default Item;
