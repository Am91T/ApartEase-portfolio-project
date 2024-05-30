import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../Register";

test("renders registration form", () => {
  render(<Register />);
  expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
});

test("register form submission", () => {
  const { getByPlaceholderText, getByText } = render(<Register />);
  fireEvent.change(getByPlaceholderText(/Username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(getByPlaceholderText(/Email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(getByPlaceholderText(/Password/i), {
    target: { value: "password123" },
  });
  fireEvent.click(getByText(/Register/i));
});
