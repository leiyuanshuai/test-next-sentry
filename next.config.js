// next.config.js
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // Your existing module.exports
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
