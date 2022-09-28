import { HTMLAttributes } from 'react';
import classNames from 'classnames';

type Appearance = 'primary' | 'secondary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  rounded?: boolean;
}

export function Button(props: ButtonProps) {
  const { rounded = false, appearance = 'primary', ...restProps } = props;

  return (
    <button
      className={classNames(
        'flex justify-center items-center gap-x-2 p-2',
        appearance === 'primary' && 'bg-indigo-600 text-slate-50 shadow', // TODO: fix shadow class
        appearance === 'secondary' && 'border border-slate-400 border-solid',
        rounded && 'w-16 h-16 rounded-full p-4'
      )}
      type="button"
      {...restProps}
    />
  );
}
