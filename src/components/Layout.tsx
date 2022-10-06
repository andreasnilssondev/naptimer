import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;

  return <div className="h-full">{children}</div>;
}
