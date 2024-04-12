import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [presetWind()],
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
