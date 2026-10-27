import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Pages of the previous site layout, kept working for links published before it was reorganized.
const movedPages = {
  '/docs/getting-started': '/docs/quickstart',
  '/docs/self-hosting': '/docs/run/self-hosting',
  '/docs/modules': '/docs/guides',
  '/docs/modules/trajectories': '/docs/guides/trajectories',
  '/docs/modules/canvas': '/docs/guides/canvas',
  '/docs/modules/analysis': '/docs/guides/pipelines',
  '/docs/modules/simulation-cells': '/docs/guides/simulation-cells',
  '/docs/modules/clusters': '/docs/guides/clusters',
  '/docs/modules/containers': '/docs/guides',
  '/docs/modules/scripting': '/docs/guides/notebooks',
  '/docs/modules/volt-ai': '/docs/guides/volt-ai',
  '/docs/modules/teams': '/docs/guides/teams',
  '/docs/modules/whiteboards': '/docs/guides/whiteboards',
  '/docs/modules/notifications': '/docs/guides/notifications',
  '/docs/open-source': '/docs/develop',
  '/docs/open-source/ecosystem-setup': '/docs/develop',
  '/docs/open-source/plugin-development': '/docs/develop/plugins',
  '/docs/open-source/vpm': '/docs/develop/vpm',
  '/docs/open-source/volt-client': '/docs/develop/voltclient',
  '/docs/open-source/python-client': '/docs/develop/python-sdk',
  '/docs/open-source/daemon-cluster-client': '/docs/develop/daemon-cluster-client',
  '/docs/open-source/core-toolkit': '/docs/architecture/libraries',
  '/docs/open-source/lammps-io': '/docs/architecture/libraries',
  '/docs/open-source/spatial-assembler': '/docs/architecture/libraries',
  '/docs/open-source/headless-rasterizer': '/docs/architecture/libraries',
  '/docs/plugins/plugin-system': '/docs/develop/plugins',
  '/docs/plugins/open-dxa': '/docs/plugins/opendxa',
  '/docs/plugins/pattern-structure-matcher': '/docs/plugins/pattern-structure-matching',
};

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
    return Object.entries(movedPages).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default withMDX(config);
