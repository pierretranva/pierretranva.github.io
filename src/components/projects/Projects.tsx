import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/data';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label & title
      gsap.from('.projects .section-label', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 80%',
        },
      });

      gsap.from('.projects .section-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 75%',
        },
      });

      // Horizontal scroll animation (desktop only)
      const track = trackRef.current;
      if (track && window.innerWidth > 768) {
        const totalScroll = track.scrollWidth - track.clientWidth;

        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: '.projects__scroll-wrapper',
            start: 'top 20%',
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }

      // Card stagger reveal
      const cards = gsap.utils.toArray<HTMLElement>('.projects__card');
      gsap.fromTo(cards, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.projects__track',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects__container">
        <div className="projects__header">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </div>

        <div className="projects__scroll-wrapper">
          <div className="projects__track" ref={trackRef}>
            {projects.map((project, i) => (
              <div className="projects__card" key={i}>
                <span className="projects__card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((t, j) => (
                    <span className="projects__tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
                {(project.github || project.link) && (
                  <div className="projects__card-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="projects__scroll-hint">
          <div className="projects__scroll-hint-line" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
