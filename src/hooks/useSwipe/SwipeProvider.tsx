import { ReactNode, useEffect, useRef, useState } from 'react';
import { Context } from './Context';

interface SwipeProviderProps {
  children: ReactNode;
}

export function SwipeProvider(props: SwipeProviderProps) {
  const { children } = props;
  const [percentageSwiped, setPercentageSwiped] = useState(0);
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  const touchStartRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartRef.current = event.changedTouches[0].screenX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (touchStartRef.current !== null) {
      const offsetX = event.changedTouches[0].screenX - touchStartRef.current;
      setPercentageSwiped((offsetX / window.innerWidth) * 100);
    }
  };

  const handleTouchEnd = () => {
    setTransitionInProgress(true);

    if (percentageSwiped > 10) {
      setPercentageSwiped(100);
    } else if (percentageSwiped < -10) {
      setPercentageSwiped(-100);
    } else {
      setPercentageSwiped(0);
    }

    touchStartRef.current = null;
  };

  const onTransitionEnd = () => {
    console.log('transitionEnd');
    setPercentageSwiped(0);
    setTransitionInProgress(false);
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

  const value = { percentageSwiped, transitionInProgress, onTransitionEnd };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
