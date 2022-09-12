import { useNaps } from 'hooks/useNaps';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'components/Button';
import { RemoveButtonProps } from './types';

export function RemoveButton(props: RemoveButtonProps) {
  const { startTime } = props;
  const { removeNap } = useNaps();

  const handleClick = () => {
    removeNap(startTime);
  };

  return (
    <Button onClick={handleClick} appearance="secondary">
      <FaTrash color="#333" />
    </Button>
  );
}
