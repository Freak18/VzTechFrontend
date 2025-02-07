const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    webpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    remoteMfe1: 'remoteMfe1@http://localhost:3001/remoteEntry.js',
                    remoteMfe2: 'remoteMfe2@http://localhost:3002/remoteEntry.js',
                },
                shared: {
                    react: { singleton: true },
                    'react-dom': { singleton: true },
                    '@reduxjs/toolkit': { singleton: true},
                },
                publicPath: 'auto',
            }),
        ],
    },
};
