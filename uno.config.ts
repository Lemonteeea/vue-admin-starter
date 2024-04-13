// import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'

// export default defineConfig({
//   presets: [presetWind()],
//   theme: {
//     colors: {
//       'primary': '#1E88E5',
//       'primary-light': '#6AB7FF',
//       'primary-dark': '#005CB2',
//       'success': '#4CAF50',
//       'success-light': '#81C784',
//       'success-dark': '#388E3C',
//       'error': '#F44336',
//       'error-light': '#E57373',
//       'error-dark': '#D32F2F',
//       'warning': '#FFC107',
//       'warning-light': '#FFE082',
//       'warning-dark': '#FFA000',
//     },
//   },
//   content: {
//     pipeline: {
//       include: [
//         // the default
//         /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
//         // include js/ts files
//         'src/**/*.{js,ts}',
//       ],
//       // exclude files
//       // exclude: []
//     },
//   },
// })
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import colors from './theme/colors'

export default defineConfig({
  presets: [presetWind()],
  theme: {
    colors: {
      'primary': colors.primaryColor,
      'primary-light': colors.primaryColorHover,
      'primary-dark': colors.primaryColorPressed,
      'info': colors.infoColor,
      'info-light': colors.infoColorHover,
      'info-dark': colors.infoColorPressed,
      'success': colors.successColor,
      'success-light': colors.successColorHover,
      'success-dark': colors.successColorPressed,
      'warning': colors.warningColor,
      'warning-light': colors.warningColorHover,
      'warning-dark': colors.warningColorPressed,
      'error': colors.errorColor,
      'error-light': colors.errorColorHover,
      'error-dark': colors.errorColorPressed,
    },
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
      // exclude files
      // exclude: []
    },
  },
})
