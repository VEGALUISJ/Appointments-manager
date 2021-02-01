import React, { Fragment, useState } from "react";

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    date: "",
    time: "",
    service: "No Service Requested",
  });

  let handleChange = () => {
    console.log("Writing");
  };

  return (
    <Fragment>
      <h2>Create appoinment</h2>

      <form>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Please Insert Costumer Full Name"
          onChange={handleChange}
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          required
          onChange={handleChange}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          required
          onChange={handleChange}
        />

        <label>Service Requested</label>
        <select
          type="text"
          name="service"
          className="u-full-width"
          onChange={handleChange}
          required
        >
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
