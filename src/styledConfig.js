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
  small: '12px',
  medium: '18px',
  big: '24px',
  bigger:  '36px',
  biggest: '48px'
}

const sizes = ['0px', '2px', '4px', '8px', '12px', '16px', '18px', '20px', '24px', '28px', '30px'];

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