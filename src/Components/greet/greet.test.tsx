import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with name", () => {
  render(<Greet name="Harish" />);
  const textElement = screen.getByText("Hello Harish");
  expect(textElement).toBeInTheDocument();
});
