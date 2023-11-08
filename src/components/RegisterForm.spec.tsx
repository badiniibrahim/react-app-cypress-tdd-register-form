import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("<RegisterForm />", () => {
  it("Should render input and btn", () => {
    render(<RegisterForm />);
    const name = screen.getByTestId("name-input");
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const btn = screen.getByRole("button");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it("Should display the message on the screen", () => {
    render(<RegisterForm />);
    const name = screen.getByTestId("name-input");
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const result = screen.getByTestId("paragraph");
    const form = screen.getByTestId("form");

    fireEvent.change(name, { target: { value: "Badini" } });
    fireEvent.change(email, { target: { value: "badini@test.com" } });
    fireEvent.change(password, { target: { value: "123456" } });
    fireEvent.submit(form);
    expect(result).toBeInTheDocument();
  });
});
