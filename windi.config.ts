import defaultTheme from 'windicss/defaultTheme'
import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
  colors: {
    green: {
      50: '#f6fbf9',
      100: '#ecf8f3',
      200: '#d0ede0',
      300: '#b3e3cd',
      400: '#7bcda8',
      500: '#42b883',
      600: '#3ba676',
      700: '#328a62',
      800: '#286e4f',
      900: '#205a40',
    },
  },
}

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.warmGray[800],
            a: {
              color: colors.red[900],
              '&:hover': {
                color: colors.red[800],
              },
            },
          },
        },
        DARK: {
          css: {
            color: colors.warmGray[200],
            a: {
              color: colors.yellow[400],
              '&:hover': {
                color: colors.yellow[500],
              },
            },
          },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.green[500],
        green: MyTheme.colors.green,
        slate: colors.slate,
      },
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans].join(','),
        'nunito-sans': ['"Nunito Sans"', ...defaultTheme.fontFamily.sans].join(
          ','
        ),
        lora: ['Lora', ...defaultTheme.fontFamily.serif].join(','),
        teko: ['Teko', ...defaultTheme.fontFamily.sans].join(','),
        kanit: ['Kanit', ...defaultTheme.fontFamily.sans].join(','),
      },
    },
    backgroundImage: {
      'map-dark': "url('/images/map-background-dark.webp')",
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin({ dark: true }) as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
