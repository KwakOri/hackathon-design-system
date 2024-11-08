import { colors } from "./colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title1: [
          "28px",
          {
            lineHeight: "135%",
          },
        ],
        title2: [
          "24px",
          {
            lineHeight: "140%",
          },
        ],
        heading1: [
          "20px",
          {
            lineHeight: "140%",
          },
        ],
        heading2: [
          "18px",
          {
            lineHeight: "140%",
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: "160%",
          },
        ],
        body2: [
          "14px",
          {
            lineHeight: "160%",
          },
        ],
        label: [
          "15px",
          {
            lineHeight: "150%",
          },
        ],
        caption1: [
          "12px",
          {
            lineHeight: "130%",
          },
        ],
        caption2: [
          "10px",
          {
            lineHeight: "130%",
          },
        ],
      },
      colors: {
        ...colors,
        primary: {
          normal: colors.green[55],
          strong: colors.green[45],
          heavy: colors.green[35],
          light: "rgba(105, 175, 165, 0.16)",
          pale: "rgba(105, 175, 165, 0.12)",
        },
        label: {
          normal: "#585960",
          strong: "#313235",
          neutral: "#7F818A",
          alternative: "#B5B6BB",
          disable: "#CACBCE",
        },
        fill: {
          normal: "#EFF1F5",
          light: "#F5F6F9",
          strong: "#D9DDE8",
          heavy: "#BFC6D9",
          alternative: "#262D40",
          pale: "rgba(191, 198, 217, 0.08)",
        },
        background: {
          normal: "#FFFFFF",
        },
        line: {
          normal: "rgba(84, 98, 140, 0.16)",
          neutral: "rgba(84, 98, 140, 0.12)",
          strong: "rgba(84, 98, 140, 0.20)",
          heavy: "rgba(84, 98, 140, 0.40)",
          solid: "#E4E6ED",
        },
        static: {
          white: colors.common[100],
          black: colors.primitive.neutral[4],
        },
        accent: {
          red: {
            normal: "#F25A65",
            strong: "#EE2B3A",
            heavy: "#D41120",
            light: "rgba(242, 90, 101, 0.16)",
            pale: "rgba(242, 90, 101, 0.12)",
          },
          orange: {
            normal: "#FFA902",
            strong: "#CC8700",
            heavy: "#996500",
            light: "rgba(255, 169, 2, 0.16)",
            pale: "rgba(255, 169, 2, 0.12)",
          },
          green: {
            normal: "#05CE55",
            strong: "#049A40",
            heavy: "#03692B",
            light: "rgba(5, 206, 85, 0.16)",
            pale: "rgba(5, 206, 85, 0.12)",
          },
          blue: {
            normal: "#3182F6",
            strong: "#0A66EB",
            heavy: "#0851BA",
            light: "rgba(10, 102, 235, 0.16)",
            pale: "rgba(10, 102, 235, 0.12)",
          },
        },
        secondary: {
          normal: colors.red[68],
          strong: colors.red[58],
          heavy: colors.red[48],
          light: "rgba(215, 144, 132, 0.16)",
          pale: "rgba(215, 144, 132, 0.12)",
        },
        tertiary: {
          normal: colors.yellow[65],
          strong: colors.yellow[55],
          heavy: colors.yellow[45],
          light: "rgba(244, 200, 88, 0.16)",
          pale: "rgba(244, 200, 88, 0.12)",
        },
        quaternary: {
          normal: colors.purple[75],
          strong: colors.purple[65],
          heavy: colors.purple[55],
          light: "rgba(92, 92, 240, 0.16)",
          pale: "rgba(92, 92, 240, 0.12)",
        },
        dimmer: {
          normal: "rgba(10, 10, 10, 0.64)",
          strong: "rgba(10, 10, 10, 0.84)",
        },
      },
    },
  },
  plugins: [],
};
