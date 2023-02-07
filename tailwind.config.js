const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.tsx", "./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        peri: {
          0: "rgb(151 222 206)",
          50: "rgb(151 222 206 / 5%)",
          100: "rgb(151 222 206 / 10%)",
          200: "rgb(151 222 206 / 20%)",
          300: "rgb(151 222 206 / 30%)",
          400: "rgb(151 222 206 / 40%)",
          500: "rgb(151 222 206 / 50%)",
          600: "rgb(151 222 206 / 60%)",
          700: "rgb(151 222 206 / 70%)",
          800: "rgb(151 222 206 / 80%)",
          900: "rgb(151 222 206 / 90%)",
          secondary: {
            0: "rgb(98 182 183)",
            50: "rgb(98 182 183 / 5%)",
            100: "rgb(98 182 183 / 10%)",
            200: "rgb(98 182 183 / 20%)",
            300: "rgb(98 182 183 / 30%)",
            400: "rgb(98 182 183 / 40%)",
            500: "rgb(98 182 183 / 50%)",
            600: "rgb(98 182 183 / 60%)",
            700: "rgb(98 182 183 / 70%)",
            800: "rgb(98 182 183 / 80%)",
            900: "rgb(98 182 183 / 90%)",
          },
          tertiary: {
            0: "rgb(203 237 213)",
            50: "rgb(203 237 213 / 5%)",
            100: "rgb(203 237 213 / 10%)",
            200: "rgb(203 237 213 / 20%)",
            300: "rgb(203 237 213 / 30%)",
            400: "rgb(203 237 213 / 40%)",
            500: "rgb(203 237 213 / 50%)",
            600: "rgb(203 237 213 / 60%)",
            700: "rgb(203 237 213 / 70%)",
            800: "rgb(203 237 213 / 80%)",
            900: "rgb(203 237 213 / 90%)",
          },
        },
      },
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
        gray: {
          0: "#fff",
          50: "#F9FAFB",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
        peri: {
          0: "rgb(151 222 206)",
          50: "rgb(151 222 206 / 5%)",
          100: "rgb(151 222 206 / 10%)",
          200: "rgb(151 222 206 / 20%)",
          300: "rgb(151 222 206 / 30%)",
          400: "rgb(151 222 206 / 40%)",
          500: "rgb(151 222 206 / 50%)",
          600: "rgb(151 222 206 / 60%)",
          700: "rgb(151 222 206 / 70%)",
          800: "rgb(151 222 206 / 80%)",
          900: "rgb(151 222 206 / 90%)",
          secondary: {
            0: "rgb(98 182 183)",
            50: "rgb(98 182 183 / 5%)",
            100: "rgb(98 182 183 / 10%)",
            200: "rgb(98 182 183 / 20%)",
            300: "rgb(98 182 183 / 30%)",
            400: "rgb(98 182 183 / 40%)",
            500: "rgb(98 182 183 / 50%)",
            600: "rgb(98 182 183 / 60%)",
            700: "rgb(98 182 183 / 70%)",
            800: "rgb(98 182 183 / 80%)",
            900: "rgb(98 182 183 / 90%)",
          },
          tertiary: {
            0: "rgb(203 237 213)",
            50: "rgb(203 237 213 / 5%)",
            100: "rgb(203 237 213 / 10%)",
            200: "rgb(203 237 213 / 20%)",
            300: "rgb(203 237 213 / 30%)",
            400: "rgb(203 237 213 / 40%)",
            500: "rgb(203 237 213 / 50%)",
            600: "rgb(203 237 213 / 60%)",
            700: "rgb(203 237 213 / 70%)",
            800: "rgb(203 237 213 / 80%)",
            900: "rgb(203 237 213 / 90%)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            thead: {
              borderBottomColor: theme("colors.gray.200"),
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
      keyframes: {
        bottomToTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, .1, 1)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.1, 1)",
          },
        },
      },
      animation: {
        bottomToTop: "bottomToTop 1s ease-in",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
