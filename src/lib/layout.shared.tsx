import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'VoltLabs-Research',
  repo: 'docs.voltcloud.dev',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'VOLT',
    },
    links: [
      {
        text: 'Download',
        url: 'https://github.com/VoltLabs-Research/VOLT/releases/latest',
        external: true,
      },
      {
        text: 'Plugin registry',
        url: 'https://packages.voltcloud.dev',
        external: true,
      },
    ],
    githubUrl: 'https://github.com/VoltLabs-Research/VOLT',
  };
}
