import Nexa from "next/font/local";

export const fontNexa = Nexa({
  src: [
    {
      path: "../public/shared/fonts/Nexa-Light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/shared/fonts/Nexa-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/shared/fonts/Nexa-Heavy.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/shared/fonts/Nexa-Bold.woff",
      weight: "800",
      style: "normal",
    },

    {
      path: "../public/shared/fonts/Nexa-LightItalic.woff",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/shared/fonts/Nexa-BookItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/shared/fonts/Nexa-HeavyItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/shared/fonts/Nexa-BoldItalic.woff",
      weight: "800",
      style: "italic",
    },
  ],
});
