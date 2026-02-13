import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education, achievements } from '../../data/data';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal label
      gsap.from('.about .section-label', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
        },
      });

      // Text paragraphs stagger in
      gsap.from('.about__paragraph', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__text',
          start: 'top 75%',
        },
      });

      // Education cards
      gsap.from('.about__edu-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__education',
          start: 'top 85%',
        },
      });

      // Photo
      gsap.from('.about__photo-wrapper', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__visual',
          start: 'top 75%',
        },
      });

      // Achievements
      gsap.from('.about__achievement', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__achievements',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__grid">
        <div className="about__text">
          <div className="section-label">About Me</div>
          <p className="about__paragraph">
            I'm a <strong>Software Engineer & ML Engineer</strong> passionate about building
            intelligent systems at the intersection of software engineering and machine learning.
          </p>
          <p className="about__paragraph">
            Currently a <strong>Software Engineer at Capital One</strong>, I've previously
            interned at <strong>Google</strong>, where I engineered LLM-based applications for content quality filtering , and built ML models at <strong>Capital One</strong>, <strong>Zeta Associates</strong>,
            and <strong>Obscurity Labs</strong>.
          </p>
          <p className="about__paragraph">
            I hold both a <strong>B.S. and M.Eng. in Computer Science</strong> from
            <strong> Virginia Tech</strong> with a perfect 4.0 GPA and a concentration in AI/ML.
          </p>

          <div className="about__education">
            {education.map((edu, i) => (
              <div className="about__edu-card" key={i}>
                <div className="about__edu-degree">{edu.degree}</div>
                <div className="about__edu-school">
                  {edu.school} — {edu.concentration}
                </div>
                <div className="about__edu-meta">
                  <span>{edu.period}</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about__achievements">
            {achievements.map((a, i) => (
              <span className="about__achievement" key={i}>
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="about__visual">
          <div className="about__photo-wrapper">
            <img 
              src="/headshot.jpg" 
              alt="Pierre Tran" 
              className="about__photo"
              onLoad={(e) => {
                // Ensure image fades in only after loading
                gsap.fromTo(e.currentTarget, { opacity: 0 }, { opacity: 1, duration: 1 });
              }}
            />
          </div>
          <div className="about__photo-accent" />
        </div>
      </div>
    </section>
  );
}
