import { InlineMath } from 'react-katex';

interface MathProps {
  children: string;
}

export function Math({ children }: MathProps) {
  return <InlineMath math={children} />;
}

export function renderMathInText(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\$([^$]+)\$/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<InlineMath key={match.index} math={match[1]} />);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

