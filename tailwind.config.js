function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {                 //(light theme body-bg-#FCFAF9 )
      textColor: {
        skin: {
           /* Text var*/
          body:withOpacity('--color-text-body'),
          nav:withOpacity('--color-text-nav'),
          sidebar:withOpacity('--color-text-sidebar'),
          headline:withOpacity('--color-text-headline'),
          titel:withOpacity('--color-text-titel'),
          'sub-titel':withOpacity('--color-text-sub-titel'),
          paragraph:withOpacity('--color-text-paragraph'),
          btnprimary:withOpacity('--color-text-btnprimary'),
          /* Hover Text var*/
          'sidebarhover-link':withOpacity('--color-text-sidebarhover-link'),
        
       
        },
      },
      backgroundColor: {
        skin: {
          /* Backgruond var*/
          'body-fill': withOpacity('--color-body-fill'),
          'sidebar-fill': withOpacity('--color-sidebar-fill'),
          'navbar-fill': withOpacity('--color-navbar-fill'),
          'contenthead-fill': withOpacity('--color-contenthead-fill'),
          'contentbody-fill': withOpacity('--color-contentbody-fill'),
          'btnprimary-fill': withOpacity('--color-btnprimary-fill'),
          /* Hover Backgruond var*/
          'sidebarhover-fill': withOpacity('--color-sidebarhover-fill'),
         
          
        },
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