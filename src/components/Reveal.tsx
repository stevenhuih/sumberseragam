import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'zoom';
}

export default function Reveal({ children, className = '', animation = 'fade-up' }: RevealProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const animationClass = animation === 'fade-up' ? 'reveal-scroll' : 'reveal-zoom';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
