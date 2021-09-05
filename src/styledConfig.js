import { createGlobalStyle} from "styled-components"

const colors = {
  primary: '#69688C',
  secondary: '#F2BC8D',
  tertiary: '#99AABF',
  contrast: '#383D59',
  text: {
    main: '#0D0D0D',
    light: '#F2EFEB',
    lighter: '#727273',
    dark: '#555'
  },
}

const fonts = {
  small: 12,
  medium: 18,
  big: 24,
  bigger:  36,
  biggest: 48
}

const sizes = [0, 2, 4, 8, 12, 16, 18, 20, 24, 28, 30];

export const CustomTheme = {
  colors,
  sizes,
  fonts,
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`