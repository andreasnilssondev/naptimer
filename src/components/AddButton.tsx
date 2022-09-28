import { FaPlus } from 'react-icons/fa';
import { useNaps } from 'hooks/useNaps';
import { Button } from 'components/Button';

export function AddButton() {
  const { addNap } = useNaps();

  return (
    <div className="fixed right-10 bottom-20 z-10">
      <Button rounded onClick={addNap}>
        <FaPlus size="2rem" />
      </Button>
    </div>
  );
}
