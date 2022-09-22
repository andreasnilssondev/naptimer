import { useEffect, useRef, useState } from 'react';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays } from 'date-fns';

export function useSwipe() {
  const [offsetX, setOffsetX] = useState(0);
  const [transitionFinished, setTransitionFinished] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const touchStartRef = useRef<number | null>(null);
  const { selectedDate, setSelectedDate } = useSelectedDate();

  const handleTouchStart = (event: TouchEvent) => {
    touchStartRef.current = event.changedTouches[0].screenX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (touchStartRef.current !== null) {
      setOffsetX(event.changedTouches[0].screenX - touchStartRef.current);
    }
  };

  const handleTouchEnd = () => {
    setTransitionFinished(false);
    if (touchStartRef.current !== null) {
      if (offsetX > window.innerWidth * 0.25) {
        setOffsetX(window.innerWidth);
        setDirection('left');
      } else if (offsetX < window.innerWidth * -0.25) {
        setOffsetX(-window.innerWidth);
        setDirection('right');
      } else {
        setOffsetX(0);
        setDirection(null);
      }
    }
    touchStartRef.current = null;
  };

  const onTransitionEnd = () => {
    if (direction === 'left') {
      setSelectedDate(addDays(selectedDate, -1));
      setDirection(null);
    } else if (direction === 'right') {
      setSelectedDate(addDays(selectedDate, 1));
      setDirection(null);
    }

    setOffsetX(0);
    setTransitionFinished(true);
  };

  const style = {
    transform: `translate(${offsetX}px)`,
    transition: !transitionFinished ? 'transform 0.2s ease-in-out' : undefined,
  };

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return { style, onTransitionEnd };
}
