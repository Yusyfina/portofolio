/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00eaff",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        "card-bg": "var(--card-bg)",
        "card-hover": "var(--card-hover)",
      },
      borderColor: {
        primary: "var(--border-primary)",
      },
      boxShadow: {
        neon: "0 0 20px #00eaff",
      },
    },
  },
  plugins: [],
}
