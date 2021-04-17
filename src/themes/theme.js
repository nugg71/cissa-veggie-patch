import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#d5f0ff'
    },
    primary: {
      light: '#7ea387',
      main: '#5e8c6a',
      dark: '#41624a'
    },
    secondary: {
      light: '#f4cf7b',
      main: '#f2c45a',
      dark: '#a9893e',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: ['JetBrains Mono'].join(',')
  },
  overrides: {
    MuiContainer: {
      root: {
        flexGrow: 1,
        display: 'flex'
      }
    },
    MuiInputBase: {
      root: {
        marginTop: 10,
        padding: 12,
        fontSize: 14,
        background: '#f4f4f4',
        borderRadius: 8
      },
      input: {
        background: '#f4f4f4'
      }
    },
    MuiPaper: {
      root: {
        padding: 20,
        margin: '20 auto'
      }
    }
  },
  props: {
    // Name of the component ⚛️
    MuiInput: {
      disableUnderline: true,
      inputProps: {
        style: {
          WebkitBoxShadow: '0 0 0 1000px #f4f4f4 inset'
        }
      }
    },
    MuiButtonBase: {
      // The default props to change
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
})

export default responsiveFontSizes(theme)
