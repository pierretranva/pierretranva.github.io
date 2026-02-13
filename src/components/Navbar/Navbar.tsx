import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 100);
      setScrolled(currentY > 50);
      lastScrollY.current = currentY;

      // Scroll spy
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navClasses = [
    'navbar',
    hidden && !mobileOpen ? 'navbar--hidden' : '',
    scrolled ? 'navbar--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav className={navClasses}>
        <button className="navbar__logo" onClick={scrollToTop}>
          PT
        </button>
        <div className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`navbar__mobile-overlay ${mobileOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="navbar__link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
