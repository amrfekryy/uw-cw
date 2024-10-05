export type Theme = {
    colors: {
      primary: string;
      secondary: string;
      primaryHover: string;
      secondaryHover: string;
      text: string;
      background: string;
    };
  };
  
// Create a lightTheme object
export const lightTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    primaryHover: "#0056b3",
    secondaryHover: "#5a6268",
    text: "#000",
    background: "#fff",
  },
};

// Create a darkTheme object
export const darkTheme: Theme = {
  colors: {
    primary: "#1f6feb",
    secondary: "#4e5d6c",
    primaryHover: "#144293",
    secondaryHover: "#394451",
    text: "#fff",
    background: "#222",
  },
};
