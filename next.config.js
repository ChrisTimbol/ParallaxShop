const nextConfig = {
    reactStrictMode: true,
    env: {
      API_KEY: process.env.BASE_URL,
    },
    images: {
        domains: ['restarauntwoo.local'], // Add your WooCommerce domain here
      },
  };
  
  module.exports = nextConfig;
  