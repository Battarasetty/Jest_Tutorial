import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet Component", () => {
  test("renders with a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText(/Hello John/i);
    expect(textElement).toBeInTheDocument();
  });

});
