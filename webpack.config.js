const path = require("path");
const BUILD_DIR = path.resolve(__dirname, 'dist');
module.exports = env => {
    return {
        entry: './src/index.js',
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpe|jpg|svg|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            inline: true,
            contentBase: BUILD_DIR,
            port: 3000
        },
        devtool: "source-map"
    }
};