import { useEffect, useRef } from 'react';

export default function IntroOverlay() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      overlay.classList.add('no-animation');
    } else {
      setTimeout(() => {
        overlay.classList.add('hide-overlay');
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 1900);
    }
  }, []);

  return (
    <div id="intro-overlay" ref={overlayRef}>
      <h1 className="intro-name">Hitkumar Chaudhary</h1>
    </div>
  );
}
