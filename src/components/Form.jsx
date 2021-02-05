import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ createItems }) => {
  const [item, setItem] = useState({
    name: "",
    date: "",
    time: "",
    service: "No Service Selected",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const { name, date, time, service } = item;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate

    if (
      name.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      service.trim() === "" ||
      service === "No Service Selected"
    ) {
      setError(true);
      return;
    }

    //Remove Error Message

    setError(false);

    //Assign ID

    item.id = nanoid();

    //Create Item

    createItems(item);

    //Restart form

    setItem({
      name: "",
      date: "",
      time: "",
      service: "No Service Selected",
    });
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      {error ? <p className="alert-error">All fields are required</p> : null}

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Please Insert Costumer Full Name"
          onChange={handleChange}
          value={name}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          value={date}
          onChange={handleChange}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          value={time}
          onChange={handleChange}
        />

        <label>Service Requested</label>
        <select
          type="text"
          name="service"
          className="u-full-width"
          value={service}
          onChange={handleChange}
        >
          <option value="No Service Selected">{service}</option>
          <option value="Lashes">Lashes $100</option>
          <option value="Nails">Nails $60</option>
          <option value="Pedicure">Pedicure $80</option>
          <option value="Full Services">
            Full Services (Nails, Pedicure & Lashes) $200
          </option>
        </select>

        <button type="submit" className="u-full-width button-primary">
          + Add Appoinment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
