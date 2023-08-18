import { useEffect } from 'react';
import anime from 'animejs';
import styles from './dotgrid.module.scss';

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const animateDots = (startIndex: number) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: 'easeOutSine', duration: 250 },
        { value: 0.35, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: startIndex,
      }),
    });
  };

  const handleDotInteraction = (startIndex: number) => {
    animateDots(startIndex);
  };

  useEffect(() => {
    animateDots(0);
  }, []);

  const dots = [];

  let i = 0;

  while (i < GRID_WIDTH) {
    let j = 0;

    while (j < GRID_HEIGHT) {
      const index = i * GRID_HEIGHT + j;

      dots.push(
        <div
          onClick={() => handleDotInteraction(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleDotInteraction(index);
            }
          }}
          className={styles.dotWrapper}
          data-index={index}
          role="button"
          tabIndex={0}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );

      j += 1;
    }

    i += 1;
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots}
    </div>
  );
};
