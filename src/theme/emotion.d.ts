import "@emotion/react";

export type ITheme = {
  colors: {
    primary: string;
    secondary: string;
    primaryHover: string;
    secondaryHover: string;
    text: string;
    background: string;
    border: string,
    borderHover: string,
    borderFocus: string,
  };
};

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
