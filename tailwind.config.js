/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      maxWidth: {
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
      lineHeight: {
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
    },
    inset: {
      0: 0,
      1: '1em',
      2: '2em',
      3: '3em',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      auto: 'auto',
      '1/2': '50%',
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      100: 100,
      top: 10000,
      auto: 'auto',
    },
    colors: {
      success: '#4CAF50',
      info: '#00BCD4',
      warning: '#FF7043',
      danger: '#F44336',
      notify: '#F44336',
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      neutral: colors.gray,
      light: {
        100: '#f0f0f0',
        200: '#ebebeb',
        300: '#dbdbdb',
        400: '#c4c4c4',
        500: '#b3b3b3',
        600: '#969696',
        700: '#858585',
        800: '#6b6b6b',
        900: '#575757',
      },
      dark: {
        100: '#4d4d4d',
        200: '#474747',
        300: '#404040',
        400: '#3b3b3b',
        500: '#333333',
        600: '#2e2e2e',
        700: '#262626',
        800: '#1a1a1a',
        900: '#0d0d0d',
      },
      primary: {
        100: '#faf5ff',
        200: '#ecd8fd',
        300: '#debdfa',
        400: '#c995f4',
        500: '#b87bea',
        600: '#9d59d4',
        700: '#8b47c2',
        800: '#703c9a',
        900: '#5a337a',
      },
      'primary-muted': {
        100: '#dcd2e4',
        200: '#c6b6d3',
        300: '#b49fc6',
        400: '#997cb1',
        500: '#8866a3',
        600: '#6e5086',
        700: '#59416c',
        800: '#493659',
        900: '#2f2239',
      },
      secondary: {
        100: '#f9f9f9',
        500: '#eaeaea',
        900: '#b8b8b8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(function ({ addUtilities, theme, config }) {
      const themeColors = theme('colors')
      const colors = {}
      for (const color of Object.keys(themeColors)) {
        if (typeof themeColors[color] === 'object') {
          for (const sub of Object.keys(themeColors[color])) {
            colors[`${color}-${sub}`] = themeColors[color][sub]
          }
        } else {
          colors[color] = themeColors[color]
        }
      }

      addUtilities(
        Object.keys(colors).map((name) => ({
          [`.fill-${name}`]: {
            fill: colors[name],
          },
          [`.border-b-${name}`]: {
            borderBottomColor: colors[name],
          },
          [`.border-t-${name}`]: {
            borderTopColor: colors[name],
          },
          [`.border-l-${name}`]: {
            borderLeftColor: colors[name],
          },
          [`.border-r-${name}`]: {
            borderRightColor: colors[name],
          },
        })),
      )
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
      'src/plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
