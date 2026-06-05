import React, { useEffect, useRef, useState } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

type RevealProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

const Reveal = <T extends React.ElementType = 'div'>({
  as,
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...props
}: RevealProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const Component = as || 'div';

  useEffect(() => {
    const element = ref.current;

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.18
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Component as React.ElementType,
    {
      ref,
      className: `reveal reveal-${direction}${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`,
      style: { '--reveal-delay': `${delay}ms` } as React.CSSProperties,
      ...props
    },
    children
  );
};

export default Reveal;
