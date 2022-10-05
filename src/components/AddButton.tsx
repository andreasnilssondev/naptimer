import { FaPlus } from 'react-icons/fa';
import { useNaps } from 'hooks/useNaps';
import { Button } from 'components/Button';

export function AddButton() {
  const { addNap } = useNaps();

  return (
    <div className="fixed right-10 bottom-20 z-10">
      <Button rounded onClick={addNap}>
        <span className="w-8 h-8">
          <FaPlus size="100%" />
        </span>
      </Button>
    </div>
  );
}
