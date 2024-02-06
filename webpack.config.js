const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    
    //バンドルを実行するエントリーファイル
    entry: './src/index.tsx',
    //バンドルされたファイルの出力先(filenameをデフォルトから変更している)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                //ファイル形式（拡張子の設定）
                test: /\.(ts|tsx)$/,
                //指定したファイルの除外
                exclude: /node_modules/,
                //ローダーの指定（babelのトランスパイルを介してバンドルする）
                use: {
                    loader: 'babel-loader',
                    //ローダーに渡すオプション
                    options: {
                        presets: [
                            '@babel/preset-react', 
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: "body",
            scriptLoading: "defer",
            // favicon: "./src/favicon.ico",
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        // open: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      }
};