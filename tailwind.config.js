module.exports = {
  content: [
    './src/components/**/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    '.src/plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        springwood: '#E9E2DA',
        sorrellbrown: '#967D65',
        orangepeel: '#FF9600',
        orange: '#FF951B',
        lightorange: '#FFF0D9',
        millbrook: '#5a4632',
        sandal: '#a08c6e',
        eggwhite: '#fdf0c1',
        error: '#E8451F',
        textform: '#FDFAF6',
        swirl: '#D1C8C0',
        domino: '#967D65',
        kabul:  '#534741',
        'required-textform': '#fce7d0',
        'textform-border': '#d3c8bd',
        "sl-gray": "#f0f0f0",
      },
      screens: {
        sm: '320px',
        md: '960px'
      },
      height: {
        '50vh': '50vh'
      },
      width: {
        '400px': '400px',
        '55per': '55%',
        '45per': '45%'
      },
      minWidth: {
        timetable: '1022px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
