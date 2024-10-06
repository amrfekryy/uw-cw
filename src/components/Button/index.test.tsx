import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from ".";

describe("Button Component", () => {
  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: /click me/i,
    });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is not clickable when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Disabled Button
      </Button>
    );
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(button).not.toBeNull();

    expect(button.disabled).toBe(true);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not render text when children are not provided", () => {
    render(<Button />);
    const button: HTMLButtonElement = screen.getByRole("button");
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("");
  });

  it("renders correctly on small screens", () => {
    window.resizeTo(500, 800);
    render(<Button variant="primary">Responsive Button</Button>);
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: /responsive button/i,
    });
    expect(button).not.toBeNull();
  });
});
