import type { GlobalThemeOverrides } from 'naive-ui'
import colors from './colors'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    ...colors,
  },
  Button: {
    textColor: '#FF0000',
  },
}

export default themeOverrides
