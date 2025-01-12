/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
      {
        source: '/pokemons/:id/:slug',
        destination: '/pokemons',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
