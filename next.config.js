/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // export static site for GitHub Pages
  output: 'export',
  // built-in i18n config
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
  // basePath optional (set if you deploy to username.github.io/repo)
  // basePath: '/alessandrogrotti',
}

module.exports = nextConfig
