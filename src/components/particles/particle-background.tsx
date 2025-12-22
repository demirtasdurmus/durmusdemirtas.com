'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export const ParticleBackground: React.FC = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Determine if dark mode is active
  // Default to checking system theme if theme is not yet determined
  const isDark =
    mounted &&
    (theme === 'dark' ||
      (theme === 'system' && systemTheme === 'dark') ||
      (!theme && systemTheme === 'dark'));

  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: {
            enable: true
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: isDark ? '#ffffff' : '#000000'
        },
        links: {
          color: isDark ? '#ffffff' : '#000000',
          distance: 150,
          enable: true,
          opacity: isDark ? 0.5 : 0.3,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: isDark ? 0.6 : 0.4
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 4 }
        }
      },
      detectRetina: true
    }),
    [isDark]
  );

  if (!mounted || !init) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
      <Particles
        key={isDark ? 'dark' : 'light'}
        id="tsparticles"
        className="h-full w-full"
        options={particlesOptions}
      />
    </div>
  );
};
