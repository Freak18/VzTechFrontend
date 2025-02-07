const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    webpack: {
        configure: {
            output: {
                publicPath: 'auto',
            },
        },
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: 'employeeForm',
                    filename: 'remoteEntry.js',
                    exposes: {
                        './App': './src/App',
                    },
                    shared: {
                        react: { singleton: true },
                        'react-dom': { singleton: true },
                        '@reduxjs/toolkit': { singleton: true },
                    },
                }),
            ],
        },
    },
};
