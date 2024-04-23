import App from "./App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Tests for App Router", () => {
  test("It should render the HomePage and find Header", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Little Lemon/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("It should render the BookingPage and find Header", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Booking/i);
    expect(linkElement).toBeInTheDocument();
  });
});
