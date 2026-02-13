import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/data';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label & title
      gsap.from('.skills .section-label', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills',
          start: 'top 80%',
        },
      });

      gsap.from('.skills .section-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills',
          start: 'top 75%',
        },
      });

      // Category cards stagger
      gsap.from('.skills__category', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills__grid',
          start: 'top 80%',
        },
      });

      // Skill items stagger within each category
      gsap.utils.toArray<HTMLElement>('.skills__category').forEach((cat) => {
        const items = cat.querySelectorAll('.skills__item');
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cat,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills__container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Tools & Technologies</h2>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <div className="skills__category" key={i}>
              <div className="skills__category-name">{group.category}</div>
              <div className="skills__list">
                {group.items.map((item, j) => (
                  <span className="skills__item" key={j}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
