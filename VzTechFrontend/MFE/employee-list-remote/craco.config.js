const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    webpack: {
        configure: {
          output: {
            publicPath: 'auto',
          },
    },
  plugins: [
    new ModuleFederationPlugin({
      name: 'employeeListRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: ['react', 'react-dom'],
      'react-dom': { singleton: true },
      '@reduxjs/toolkit': { singleton: true },}),
  ],
}};
