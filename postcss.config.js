import path from "path";

export default {
    plugins: {
        "@tailwindcss/postcss": {},
        "postcss-url": [
            {
                filter: /bootstrap-icons\.woff.?$/,
                url: "copy",
                basePath: path.resolve("node_modules/bootstrap-icons/font"),
                assetsPath: "..",
            },
        ],
    },
};
