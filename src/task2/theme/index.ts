import { ITheme } from "./theme";

// Create a lightTheme object
export const lightTheme: ITheme = {
  colors: {
    primary: "#007bff",
    primaryHover: "#0056b3",
    secondary: "#f5f5f5",
    secondaryHover: "#e0e0e0",
    text: "#333333",
    border: "#cccccc",
    borderHover: "#999999",
    borderFocus: "#007bff",
    background: "#fff",
  },
};

// Create a darkTheme object
export const darkTheme: ITheme = {
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
  },
};
