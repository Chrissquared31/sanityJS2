/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
  },
  output: 'export',
};

module.exports = nextConfig;

