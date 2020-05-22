const palette = {
  background: {
    default: '#081B23',
  },
  primary: {
    light: '#01f48a',
    main: '#01D277',
    dark: '#01b064',
  },
  grey: {
    100: '#F5F5F5',
  },
  text: {
    primary: '#E3F4FC',
    secondary: '#9FBBC7',
  },
}
const customStyles = {
  input: {
    '&&': {
      border: '1px solid #CCC',
      backgroundColor: '#FFF',
      borderRadius: '22px',
      color: palette.primary.main,
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
    },
  },
}

export default {
  palette,
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
    h5: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '30px',
      color: '#E3F4FC',
    },
    h6: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '21px',
    },
    caption: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
    },
    MuiFilledInput: {
      root: customStyles.input,
      input: {
        padding: '12.5px',
      },
    },
    MuiInput: {
      root: customStyles.input,
    },
  },
}
