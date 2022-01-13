module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {                 //(light theme body-bg-#FCFAF9 )
      colors: {
        'body': '#0F0B35', 
        'sidebar': '#0E031E', 
        'sbtext': '#FCFAF9',
        'navbar': '#0F0B35',
        'navtext': '#F3245A',
        'contenthed': '#0E031E',
        'contenttext': '#F3245A',
        'contentbody': '#252147',
        'contentbodytext': '#FCFAF9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// colors 

// theme for Light
// body bg = #FCFAF9
// sudebar bg = #F3245A
// content headerd bg = #EB9FA4
// content body bg = #FFE4E6
// text = #0f0b35

// theme for Dark
// body bg = #0F0B35
// sudebar bg = #0E031E
// content headerd bg = #0E031E
// content body bg = #252147
// text = #F3245A