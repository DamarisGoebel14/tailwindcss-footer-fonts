module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ["./pages/**/*.js"]
  },
  theme: {
    fontFamily: {
      'headline': 'degular-display, sans-serif',
      'default': 'roboto, sans-serif',
      'button': 'pt-mono, monospace',
      'subtitle':  'bold roboto, sans-serif',

    }
  },
  variants: {},
  plugins: [],
}
