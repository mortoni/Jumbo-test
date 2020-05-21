export default {
  palette: {
    background: {
      default: '#081B23',
    },
    primary: {
      light: '#01f48a',
      main: '#01D277',
      dark: '#01b064',
    },
    secondary: {
      light: '#ff98b3',
      main: '#FF6584',
      dark: '#c72f58',
    },
    grey: {
      100: '#F5F5F5',
    },
    text: {
      primary: '#E3F4FC',
      secondary: '#9FBBC7',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 10,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: 22,
      },
    },
  },
}
