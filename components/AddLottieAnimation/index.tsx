'use client';

import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import type { IAddLottieAnimation } from './index.d';

const AddLottieAnimation: React.FC<IAddLottieAnimation> = ({
  animationConfig,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        ...animationConfig,
      });

      return () => animation.destroy();
    }
  }, [animationConfig, lottie]);

  return <div ref={ref} {...props} />;
};

export default AddLottieAnimation;
