import { useNaps } from 'hooks/useNaps';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'components/Button';

interface RemoveButtonProps {
  id: string;
}

export function RemoveButton(props: RemoveButtonProps) {
  const { id } = props;
  const { removeNap } = useNaps();

  const handleClick = () => {
    removeNap(id);
  };

  return (
    <Button onClick={handleClick} appearance="secondary">
      <FaTrash size="100%" color="#ff5a5a" />
    </Button>
  );
}
