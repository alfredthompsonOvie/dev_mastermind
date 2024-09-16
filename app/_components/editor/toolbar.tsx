
import React from 'react';


export const Toolbar = ({ children }: { children: React.ReactNode }) => (
  <div className="toolbar">{children}</div>
);

// Copy button to copy code snippets
export const CopyButton = () => {
  const handleCopy = () => {
    const codeBlock = document.querySelector('pre code');
    if (codeBlock) {
      const text = codeBlock.textContent;
      navigator.clipboard.writeText(text || '');
      alert('Code copied to clipboard!');
    }
  };

  return <button onClick={handleCopy}>Copy Code</button>;
};
