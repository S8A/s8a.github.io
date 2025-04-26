import path from "path";

export default {
    plugins: {
        "@tailwindcss/postcss": {},
        "postcss-url": [
            {
                filter: /lucide\.(woff.?|ttf|svg|eot)$/,
                url: "copy",
                // Now Tailwind moves the font files so that they end up as
                // ../../../node_modules/lucide-static/font/lucide.ext
                basePath: path.resolve("node_modules/lucide-static/font"),
                // Thus, if we set ../fonts it wont't end up as
                // /assets/fonts/lucide.ext like we want, but rather as 
                // /node_modules/lucide-static/font/lucide.ext, because
                // the aforementioned relative path is such that it will
                // go up three levels above /assets/fonts. That's why
                // we set this dummy folder name
                assetsPath: "./path-goes-up-three-levels-ignoring-this",
            },
        ],
    },
};
