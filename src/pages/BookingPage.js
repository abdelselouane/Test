import React, { useState, useReducer, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const updateTimes = (availableTimes, action) => {
  const newTimes = availableTimes.filter(
    (item) => item.key !== action.nextRemoval
  );
  return [...newTimes];
};

function HomePage() {
  const initializeTimes = () => {
    const initTime = [
      {
        key: "17",
        value: "17:00",
      },
      {
        key: "18",
        value: "18:00",
      },
      {
        key: "19",
        value: "19:00",
      },
      {
        key: "20",
        value: "20:00",
      },
      {
        key: "21",
        value: "21:00",
      },
      {
        key: "22",
        value: "22:00",
      },
    ];
    return initTime;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const [fields, setFields] = useState({
    date: "2024-04-19",
    time: "19",
    guests: 0,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    if (e.target.name === "time") {
      dispatch({ type: "time_change", nextRemoval: e.target.value });
    }
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const submitForm = (payload) => {
    // Console log payload for now - Data can be send to API endpoint via fetch OR axios
    console.log("payload: ", payload);
  };

  useEffect(() => {
    // Data can be fetch from API here
    // console.log("- PAGE - availableTimes: ", availableTimes);
  }, [availableTimes]);

  return (
    <>
      <Header></Header>
      <main>
        <div className="grid grid-gap-xs">
          <div className="child col-start-3@lg col-end-11@lg">
            <div className="grid grid-gap-xs">
              <div className="child col-12@xs col-12@sm">
                <section className="booking-form">
                  <h2>Booking</h2>
                  <BookingForm
                    fields={fields}
                    handleChange={handleChange}
                    availableTimes={availableTimes}
                    submitForm={submitForm}
                  ></BookingForm>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
