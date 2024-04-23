import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bookingConfirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
