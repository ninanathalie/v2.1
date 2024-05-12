import Nexa from "next/font/local";

export const fontNexa = Nexa({
  src: [
    {
      path: "../public/global/fonts/Nexa-Light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/global/fonts/Nexa-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/global/fonts/Nexa-Heavy.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/global/fonts/Nexa-Bold.woff",
      weight: "800",
      style: "normal",
    },

    {
      path: "../public/global/fonts/Nexa-LightItalic.woff",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/global/fonts/Nexa-BookItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/global/fonts/Nexa-HeavyItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/global/fonts/Nexa-BoldItalic.woff",
      weight: "800",
      style: "italic",
    },
  ],
});
