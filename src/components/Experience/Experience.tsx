import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../../data/data';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label
      gsap.from('.experience .section-label', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 80%',
        },
      });

      // Section title
      gsap.from('.experience .section-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 75%',
        },
      });

      // Each entry staggers in
      gsap.utils.toArray<HTMLElement>('.experience__entry').forEach((entry, i) => {
        gsap.from(entry, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 85%',
          },
          delay: i * 0.05,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience__container">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've Worked</h2>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div
              className={`experience__entry ${exp.current ? 'experience__entry--current' : ''}`}
              key={i}
            >
              <div className="experience__dot" />
              <div className="experience__header">
                <span className="experience__company">{exp.company}</span>
                {exp.current && <span className="experience__current-badge">Current</span>}
              </div>
              <div className="experience__role">{exp.role}</div>
              <div className="experience__meta">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
              <div className="experience__bullets">
                {exp.bullets.map((bullet, j) => (
                  <div className="experience__bullet" key={j}>
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
