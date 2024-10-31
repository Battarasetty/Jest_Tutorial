import { render, screen } from "@testing-library/react";
import Greet from "../Components/greet/greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  // describe('Nested', () => {
  //     test("Greet renders a name", () => {
  //         render(<Greet name="Harish" />);
  //         const textElement = screen.getByText("Hello Harish");
  //         expect(textElement).toBeInTheDocument();
  //     });
  // })
});

describe("Nested", () => {
  test("Greet renders a name", () => {
    render(<Greet name="Harish" />);
    const textElement = screen.getByText("Hello Harish");
    expect(textElement).toBeInTheDocument();
  });
});
