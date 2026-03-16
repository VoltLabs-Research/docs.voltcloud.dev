import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
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
        text: 'API Spec',
        url: 'https://server.voltcloud.dev/api-docs',
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
