import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async rewrites() {
    return [

      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/modules',
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
