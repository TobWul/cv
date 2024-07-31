/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "no"],
    defaultLocale: "no",
    localeDetection: false,
  },
};

export default nextConfig;
