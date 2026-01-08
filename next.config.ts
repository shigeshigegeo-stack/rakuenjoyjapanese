/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // これを追加！
  images: {
    unoptimized: true, // これも追加しておくと画像トラブルが減ります
  },
};

module.exports = nextConfig;