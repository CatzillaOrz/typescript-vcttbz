# TypeScript

## npm install

```bash
npm i -D typescript ts-loader
npm i -D babel-loader @babel/core @babel/runtime @babel/preset-env @babel/plugin-transform-runtime￼
```

## TS config

```json
// tsconfig.json
{
    "complilerOptions": {
        "target": "es5",
            "strict": true,
            "module": "es2015",
            "moduleResolution": "node"
    },
        "include": [
            "*.js", "*.ts"
        ],
        "exclude": ["node_modules"]
}
```
## .babelrc

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-transform-runtime"
    ]
}
```

## webpack.config.js

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

module.exports = (env) => {
    const isProduction = env["production"] === "production";
    return {
        entry: "./app.ts",
        output: {
            path: path.join(__dirname, "public", "dist"),
            publicPath: "auto",
            filename: "[name].[hash:8].js",
        },
        mode: isProduction ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.ts', '.json']
        },
        context: path.join(__dirname, 'src'),
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['main'],
                template: 'index.html',
                filename: 'index.html'

            }),
            new MiniCssExtractPlugin({ filename: "styles.css" }),
            //   new webpack.DefinePlugin({
            //        "process.env.FIREBASE_API_KEY": JSON.stringify(
            //         process.env.FIREBASE_API_KEY
            //),
            //      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
            //     "process.env.AUTH_DOMAIN": JSON.stringify(process.env.AUTH_DOMAIN),
            //  }),
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            static: path.join(__dirname, "public"),
            historyApiFallback: true,
        },
    };
};

```
