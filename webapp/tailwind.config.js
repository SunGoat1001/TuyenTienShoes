/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,ejs}'],
    safelist: [
        "bg-black",
        "bg-blue-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-slate-500",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
