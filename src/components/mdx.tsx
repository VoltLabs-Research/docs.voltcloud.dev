import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
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

// A screen of the app, in the theme the reader has: `public/assets/screens/<name>-{light,dark}.webp`.
function Screenshot({ name, alt }: { name: string; alt: string }) {
  const frame = 'my-6 w-full rounded-xl border border-fd-border';

  return (
    <>
      <img src={`/assets/screens/${name}-light.webp`} alt={alt} width={2400} height={1350} loading="lazy" className={`${frame} dark:hidden`} />
      <img src={`/assets/screens/${name}-dark.webp`} alt={alt} width={2400} height={1350} loading="lazy" className={`${frame} hidden dark:block`} />
    </>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    File,
    Files,
    Folder,
    Step,
    Steps,
    Tab,
    Tabs,
    TypeTable,
    Mermaid,
    Screenshot,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
