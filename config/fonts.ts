import localFont from "next/font/local";

// Load the regular font
export const fontSans = localFont({
  src: [
    {
      path: "/../public/fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/../public/fonts/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../public/fonts/Dubiel.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../public/fonts/ginebrafont.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../public/fonts/HaarlemmerMTStdRegular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../public/fonts/nourdregular.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../public/fonts/VogaMedium.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});
