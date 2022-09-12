import { HTMLAttributes } from 'react';

type Appearance = 'primary' | 'secondary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  rounded?: boolean;
}

export interface StyledButtonProps {
  $rounded?: boolean;
  $appearance: Appearance;
}
