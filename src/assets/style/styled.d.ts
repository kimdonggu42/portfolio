import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainColor: string;
      subColor: string;
    };
  }
}
