import { ReactNode } from 'react';
import { Wrapper } from './index.styles';

interface IModal {
  children?: ReactNode;
}

export function Modal({ children }: IModal) {
  return <Wrapper>{children}</Wrapper>;
}
