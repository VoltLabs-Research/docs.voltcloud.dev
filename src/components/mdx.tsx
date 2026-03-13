import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid as MermaidBase } from 'fumadocs-mermaid/ui';
import type { ComponentProps } from 'react';
import type { MDXComponents } from 'mdx/types';

const transparentBgConfig = JSON.stringify({
  config: JSON.stringify({
    themeVariables: {
      background: 'transparent',
      clusterBkg: 'transparent',
      clusterBorder: 'transparent',
    },
  }),
});

function Mermaid(props: ComponentProps<typeof MermaidBase>) {
  return <MermaidBase {...props} config={props.config ?? transparentBgConfig} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
