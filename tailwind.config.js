module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      hero: "url('src/assets/images/mobile/image-header.jpg')",
      "hero-desktop": "url('src/assets/images/desktop/image-header.jpg')",
      cherry: "url('src/assets/images/mobile/image-graphic-design.jpg')",
      "cherry-desktop":
        "url('src/assets/images/desktop/image-graphic-design.jpg')",
      orange: "url('src/assets/images/mobile/image-photography.jpg')",
      "orange-desktop":
        "url('src/assets/images/desktop/image-photography.jpg')",
    },
    colors: {
      "soft-red": "hsl(7, 99%, 70%)",
      yellow: "hsl(51, 100%, 49%)",
      "dark-desaturated-cyan-graphic-design-text": "hsl(167, 40%, 24%)",
      "dark-blue-photography-text": "hsl(198, 62%, 26%)",
      "dark-moderate-cyan-footer-text": "hsl(168, 34%, 41%)",
      "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
      "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
      "dark-grayish-blue": "hsl(232, 10%, 55%)",
      "grayish-blue": "hsl(210, 4%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "footer-bg": "#90D4C5",
    },
    screens: {
      desktop: "60em",
      "big-desktop": "90em",
    },
    fontFamily: {
      barlow: "'Barlow', sans-serif",
      fraunces: "'Fraunces', serif",
    },

    extend: {
      fontSize: {
        bodycopy: "1.125em",
      },
      padding: {
        mainpadding: "5vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
