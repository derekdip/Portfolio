/** @type {import('next').NextConfig} */
const nextConfig = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
      ],
}

module.exports = nextConfig
