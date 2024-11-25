import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        cookie: ["Cookie", ...fontFamily.serif],
        economica: ["Economica", ...fontFamily.serif],
      },
      backgroundColor: {
        specialGreen: "#078589",
      },
      textColor: {
        specialGreen: "#078589",
      },
    },
  },
  plugins: [],
} satisfies Config;
