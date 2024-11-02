import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const textAreaElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(textAreaElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", {
      name: "Application Form",
    });
    expect(headingElement).toBeInTheDocument();

    const HeadingAreaElement = screen.getByRole("heading", {
      name: "Heading Area",
    });
    expect(HeadingAreaElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
