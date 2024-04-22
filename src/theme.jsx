import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Outfit, sans-serif",
    heading: "Outfit, sans-serif",
  },
  colors: {
    brand: {
      darkOlive: "#100b00",
      paleYellow: "#ebebd3",
      paleYellowLight: "#D9D9AC",
      black: "#000000",
      white: "#ffffff",
    },
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  },
  components: {
    Button: {
      variants: {
        primary: {
          border: "2px solid #000",
          color: "brand.darkOlive",
          bg: "transparent",
          _hover: {
            bg: "brand.darkOlive",
            color: "brand.white",
          },
        },
      },
    },
  },
});

export default theme;
