const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: "./bootstrap",
    target: "web",
    mode: "production",
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devtool: "source-map",
    plugins: [
        new ModuleFederationPlugin({
            name: "user",
            filename: "remoteEntry.js",
            // remotes: {
            //     host: "host@/remoteEntry.js",
            // },
            library: { type: "var", name: "user" },
            exposes: {
                "./lib": "./bootstrap",
            },
        }),
    ],
};
