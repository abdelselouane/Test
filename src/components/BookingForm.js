import React, { useEffect } from "react";

function BookingForm({ fields, handleChange, availableTimes, submitForm }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let validated = true;

    if (fields.guests < 1) {
      validated = false;
    }

    if (validated) {
      submitForm(fields);
    } else {
      alert("Please enter how many Guests?");
    }
  };

  useEffect(() => {
    // console.log("useEffect", fields);
  }, [fields]);

  return (
    <>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={fields.date}
          onChange={handleChange}
          aria-label="reservation date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={fields.time}
          onChange={handleChange}
          aria-label="reservation time"
        >
          {availableTimes.map((time) => {
            return (
              <option key={time.key} value={time.key}>
                {time.value}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={fields.guests}
          onChange={handleChange}
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={fields.occasion}
          onChange={handleChange}
          aria-label="Occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmitForm}
          value="Make Your reservation"
        />
      </form>
    </>
  );
}

export default BookingForm;
