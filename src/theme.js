import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/green'

// overwrite theme
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1280,
    },
  },
})

export default theme