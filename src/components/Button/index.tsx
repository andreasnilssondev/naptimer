import { ButtonProps } from './types';
import { StyledButton } from './styled';

export function Button(props: ButtonProps) {
  const { rounded, appearance = 'primary', ...restProps } = props;

  return <StyledButton type="button" $rounded={rounded} $appearance={appearance} {...restProps} />;
}
