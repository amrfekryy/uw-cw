import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Task1 from ".";
import { useFetch } from "./hooks/useFetch";

vi.mock("./hooks/useFetch", () => ({
  useFetch: vi.fn(),
}));

describe("Task1 Component", () => {
  it("displays loading state", () => {
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<Task1 />);

    expect(screen.getByText(/Loading.../i)).not.toBeNull();
  });

  it("displays error state", () => {
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: false,
      error: true,
    });

    render(<Task1 />);

    expect(screen.getByText(/Something went wrong!/i)).not.toBeNull();
  });

  it("displays users when data is fetched successfully", async () => {
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { login: "user1", avatar_url: "https://avatar1.com" },
        { login: "user2", avatar_url: "https://avatar2.com" },
      ],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    await waitFor(() => expect(screen.getByText("user1")).not.toBeNull());
    expect(screen.getByText("user2")).not.toBeNull();
  });

  it("filters users based on search input", async () => {
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { login: "user1", avatar_url: "https://avatar1.com" },
        { login: "user2", avatar_url: "https://avatar2.com" },
      ],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    const input = screen.getByPlaceholderText("Search by username");
    fireEvent.change(input, { target: { value: "user1" } });

    await new Promise((r) => setTimeout(r, 2000));

    await waitFor(() => {
      expect(screen.queryByText("user1")).not.toBeNull();
      expect(screen.queryByText("user2")).toBeNull();
    });
  });

  it("displays 'No users found' when no results match search input", async () => {
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    await waitFor(() =>
      expect(screen.getByText(/No users found/i)).not.toBeNull()
    );
  });
});
