/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "no"],
    defaultLocale: "no",
    localeDetection: false,
  },
};

module.exports = nextConfig;
