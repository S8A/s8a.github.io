export default {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
        ...(
            process.env.JEKYLL_ENV === "production" 
            ? { cssnano: { preset: "default" } }
            : {}
        ),
    },
};
