
import React from 'react';

export const CodeElement = ({ attributes, children }: any) => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
);

// Custom leaf for formatting text
export const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  return <span {...attributes}>{children}</span>;
};
