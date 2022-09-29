import { HTMLAttributes } from 'react';
import classNames from 'classnames';

type Appearance = 'primary' | 'secondary' | 'icon';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  rounded?: boolean;
}

export function Button(props: ButtonProps) {
  const { rounded = false, appearance = 'primary', ...restProps } = props;

  return (
    <button
      className={classNames(
        'flex justify-center items-center gap-x-2',
        appearance === 'primary' && 'p-2 bg-sky-800 text-slate-50 shadow',
        appearance === 'secondary' && 'p-2',
        appearance === 'icon' && 'w-4 h-4',
        rounded && 'w-16 h-16 rounded-full p-4'
      )}
      type="button"
      {...restProps}
    />
  );
}
