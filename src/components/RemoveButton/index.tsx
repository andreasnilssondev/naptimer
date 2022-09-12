import { useNaps } from 'hooks/useNaps';
import { RemoveButtonProps } from './types';

export function RemoveButton(props: RemoveButtonProps) {
  const { startTime } = props;
  const { removeNap } = useNaps();

  const handleClick = () => {
    removeNap(startTime);
  };

  return (
    <button type="button" onClick={handleClick}>
      - Remove
    </button>
  );
}
