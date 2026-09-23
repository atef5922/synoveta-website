'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ConferenceMeetingShowcase() {
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          animationFrameRef.current = window.requestAnimationFrame(() => {
            animationFrameRef.current = window.requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`conference-meeting-showcase${isVisible ? ' is-visible' : ''}`}>
      <div className='conference-meeting-image'>
        <Image
          src='/Confeernce system/conference-system-setup-for-meeting-room.webp'
          alt='Synoveta conference system installed in a professional meeting room'
          fill
          sizes='(max-width: 760px) 100vw, 50vw'
        />
      </div>
      <div className='conference-meeting-copy'>
        <p className='conference-meeting-kicker'>Smart Meeting Environment</p>
        <h2>Professional Conference Setup for Modern Meeting Rooms</h2>
        <p>SYNOVETA conference systems deliver clear communication, reliable control and seamless integration for boardrooms, meeting spaces and professional discussion environments.</p>
        <div className='conference-meeting-tags'>
          <span>Clear Communication</span>
          <span>Centralized Control</span>
          <span>Seamless Integration</span>
        </div>
      </div>
    </section>
  );
}
