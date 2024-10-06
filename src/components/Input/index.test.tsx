import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from ".";

describe("Input Component", () => {
  it("renders with a label", () => {
    render(<Input label="Username" id="username" />);
    const label = screen.getByLabelText(/username/i);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    expect(input).toHaveProperty("id", "username");
  });

  it("displays helper text when provided", () => {
    render(<Input label="Email" helperText="Enter your email" id="email" />);
    const helperText = screen.getByText(/enter your email/i);

    expect(helperText).not.toBeNull();
  });

  it("has the correct input type", () => {
    render(<Input type="email" label="Email" id="email" />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(input).toHaveProperty("type", "email");
  });

  it("accepts placeholder text", () => {
    render(
      <Input label="Username" placeholder="Enter username" id="username" />
    );
    const input: HTMLInputElement =
      screen.getByPlaceholderText(/enter username/i);

    expect(input).not.toBeNull();
  });

  it("updates value on user input", () => {
    render(<Input label="Username" id="username" />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "testuser" } });

    expect(input.value).toBe("testuser");
  });

  it("shows error on invalid input", () => {
    render(<Input label="Email" helperText="Invalid email" id="email" />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "invalidemail" } });

    expect(input.value).toBe("invalidemail");
    expect(screen.getByText(/invalid email/i)).not.toBeNull();
  });
});
