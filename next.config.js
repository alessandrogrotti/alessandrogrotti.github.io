/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // export static site for GitHub Pages
  output: 'export',
  // Note: removed Next.js built-in i18n because it conflicts with `next export`.
  // Language handling is done client-side with react-i18next.
  // basePath optional (set if you deploy to username.github.io/repo)
  // basePath: '/alessandrogrotti',
}

module.exports = nextConfig
