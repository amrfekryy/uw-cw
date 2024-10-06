import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Task1 from ".";
import { useFetch } from "./hooks/useFetch";

// Mocking the useFetch hook using vi.fn()
vi.mock("./hooks/useFetch", () => ({
  useFetch: vi.fn(),
}));

describe("Task1 Component", () => {
  it("displays loading state", () => {
    // Mock loading state
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<Task1 />);

    // Check if loading message is shown
    expect(screen.getByText(/Loading.../i)).not.toBeNull(); // Checks if loading element exists
  });

  it("displays error state", () => {
    // Mock error state
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: false,
      error: true,
    });

    render(<Task1 />);

    // Check if error message is shown
    expect(screen.getByText(/Something went wrong!/i)).not.toBeNull(); // Checks if error element exists
  });

  it("displays users when data is fetched successfully", async () => {
    // Mock successful data fetch
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { login: "user1", avatar_url: "https://avatar1.com" },
        { login: "user2", avatar_url: "https://avatar2.com" },
      ],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    // Wait for the user list to be rendered
    await waitFor(() => expect(screen.getByText("user1")).not.toBeNull()); // Checks if user1 element exists
    expect(screen.getByText("user2")).not.toBeNull(); // Checks if user2 element exists
  });

  it("filters users based on search input", async () => {
    // Mock successful data fetch
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { login: "user1", avatar_url: "https://avatar1.com" },
        { login: "user2", avatar_url: "https://avatar2.com" },
      ],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    // Enter a search term
    const input = screen.getByPlaceholderText("Search by username");
    fireEvent.change(input, { target: { value: "user1" } });

    await new Promise((r) => setTimeout(r, 2000));

    // Wait for filtered result
    await waitFor(() => {
      expect(screen.queryByText("user1")).not.toBeNull() // Checks if user1 is found
      expect(screen.queryByText("user2")).toBeNull(); // User2 should be filtered out
    });
  });

  it("displays 'No users found' when no results match search input", async () => {
    // Mock no users found
    (useFetch as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });

    render(<Task1 />);

    // Wait for the message to be rendered
    await waitFor(() =>
      expect(screen.getByText(/No users found/i)).not.toBeNull()
    ); // Checks if no users found message is shown
  });
});
