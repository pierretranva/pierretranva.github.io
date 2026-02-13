import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7; // 0.8 to 1.5
}

function getRandomRotation() {
  return Math.random() * 60 - 30; // -30 to 30 degrees
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance: letters slide up into view
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          // After entrance finishes, set up scroll scatter
          setupScrollScatter();
        },
      });

      tl.to('.hero__letter', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power4.out',
        onComplete: () => {
          document.querySelectorAll('.hero__name-line, .hero__subtitle').forEach((el) => {
            (el as HTMLElement).style.overflow = 'visible';
          });
        },
      });

      tl.to(
        '.hero__sub-letter',
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.02,
          ease: 'power4.out',
        },
        '-=0.3'
      );

      tl.to(
        '.hero__line',
        { height: 80, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.6'
      );

      tl.to(
        '.hero__glow',
        { opacity: 1, duration: 1.5, ease: 'power2.out' },
        '-=1'
      );

      tl.to(
        '.hero__scroll',
        { opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

      function setupScrollScatter() {
        // Clear entrance transforms so ScrollTrigger has clean control
        const allLetters = lettersRef.current?.querySelectorAll('.hero__letter, .hero__sub-letter');
        if (!allLetters) return;

        allLetters.forEach((letter) => {
          gsap.set(letter, { clearProps: 'y,rotation' });
        });

        // Bettina-style scroll scatter: each letter flies at a different speed
        allLetters.forEach((letter) => {
          const speed = getRandomSpeed();
          const rotation = getRandomRotation();

          gsap.fromTo(
            letter,
            { y: 0, rotation: 0 },
            {
              y: () => (1 - speed) * ScrollTrigger.maxScroll(window) * 0.3,
              rotation: rotation,
              ease: 'none',
              scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                invalidateOnRefresh: true,
                scrub: 0.5,
              },
            }
          );
        });

        gsap.to('.hero__line', {
          opacity: 0,
          scaleY: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight * 0.5,
            scrub: 0.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderLetters = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="hero__letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  const renderSubLetters = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="hero__sub-letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero__glow" />
      <div ref={lettersRef}>
        <h1 className="hero__name">
          <span className="hero__name-line">{renderLetters('pierre')}</span>
          <span className="hero__name-line">{renderLetters('tran')}</span>
        </h1>
        <p className="hero__subtitle">
          <span className="hero__subtitle--blue">{renderSubLetters('software engineer')}</span>
          {renderSubLetters(' · ')}
          <span className="hero__subtitle--purple">{renderSubLetters('ml engineer')}</span>
        </p>
      </div>
      <div className="hero__line" />
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
