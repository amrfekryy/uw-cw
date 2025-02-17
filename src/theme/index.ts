import { ITheme } from "./emotion";

// Create a lightTheme object
export const lightTheme: ITheme = {
  mode: "light",
  colors: {
    primary: "#007bff",
    primaryHover: "#0056b3",
    secondary: "#f9f9f9",
    secondaryHover: "#e0e0e0",
    text: "#333333",
    border: "#cccccc",
    borderHover: "#999999",
    borderFocus: "#007bff",
    background: "#fff",
    error: "#D9534F",
  },
};

// Create a darkTheme object
export const darkTheme: ITheme = {
  mode: "dark",
  colors: {
    primary: "#007bff",
    primaryHover: "#0056b3",
    secondary: "#444444",
    secondaryHover: "#666666",
    text: "#f5f5f5",
    border: "#555555",
    borderHover: "#888888",
    borderFocus: "#007bff",
    background: "#222",
    error: "#FFB2B2",
  },
};
