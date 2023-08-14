import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // Add this alias for resolving '@' to the 'src' directory
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Use url-loader for images smaller than 8KB
              name: 'images/[name].[ext]', // Output images to the 'images' folder in the output directory
            },
          },
          // If the image is larger than 8KB, use file-loader to copy it to the output folder
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]', // Output images to the 'images' folder in the output directory
            },
          },
        ],
      },
      // Add other rules for non-module CSS/SCSS files if needed
    ],
  },
};
