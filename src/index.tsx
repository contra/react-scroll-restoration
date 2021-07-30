import React, { useRef } from 'react';
import ScrollRestoration from './scroll-restoration';

export default function Wrapper({ node }: { node?: HTMLElement }) {
  const visitedUrl = useRef(new Map());

  return <ScrollRestoration node={node} visitedUrl={visitedUrl.current} />;
}
