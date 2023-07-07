/** @type {import('next').NextConfig} */
const nextConfig = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
      ],
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY
    }
}

module.exports = nextConfig
