import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { socials } from '../../data/data';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact .section-label', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact', start: 'top 80%' },
      });

      gsap.from('.contact__heading', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__cta', start: 'top 80%' },
      });

      gsap.from('.contact__description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__cta', start: 'top 75%' },
      });

      gsap.from('.contact__email-display', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__cta', start: 'top 70%' },
      });

      gsap.from('.contact__actions .contact__cta-btn', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__actions', start: 'top 90%' },
      });

      gsap.from('.contact__links .contact__link', {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__links', start: 'top 95%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container">
        <div className="section-label">Contact</div>

        <div className="contact__cta">
          <h2 className="contact__heading">
            Let's <span>connect</span>
          </h2>
          <p className="contact__description">
            I'm always open to new opportunities, interesting projects,
            and conversations about software engineering and machine learning.
          </p>

          <div className="contact__email-display">
            <span className="contact__email-icon">✉</span>
            <a href={`mailto:${socials.email}`} className="contact__email-text">
              {socials.email}
            </a>
          </div>

          <div className="contact__actions">
            <a
              href={`mailto:${socials.email}`}
              className="contact__cta-btn contact__cta-btn--primary"
            >
              Send me an email
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__cta-btn contact__cta-btn--secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="contact__links">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              GitHub ↗
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="contact__link"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="contact__footer">
          <span className="contact__footer-text">
            © {new Date().getFullYear()} Pierre Tran. Built with React & GSAP.
          </span>
        </div>
      </div>
    </section>
  );
}
