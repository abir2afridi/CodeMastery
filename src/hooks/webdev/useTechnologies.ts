import { useState, useEffect } from 'react';
import { technologies as defTechs, type Technology } from '@/data/webdev/technologies';

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>(defTechs);

  useEffect(() => {
    const loadTechs = () => {
      const storedTechs = localStorage.getItem('custom_technologies');
      if (storedTechs) {
        try {
          const customTechs = JSON.parse(storedTechs);
          const combined = [...defTechs, ...customTechs];
          const unique = combined.reduce((acc: Technology[], current) => {
            const x = acc.find(item => item.slug === current.slug);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
          setTechnologies(unique);
        } catch (e) {
          console.error('Failed to parse custom technologies', e);
          setTechnologies(defTechs);
        }
      } else {
        setTechnologies(defTechs);
      }
    };

    loadTechs();
    
    const handleStorage = () => loadTechs();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('tech-update', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('tech-update', handleStorage);
    };
  }, []);

  const getTechBySlug = (slug: string) => {
    return technologies.find(t => t.slug === slug);
  };

  const getTechsByCategory = (categoryId: string) => {
    return technologies.filter(t => t.categoryId === categoryId);
  };

  return { technologies, getTechBySlug, getTechsByCategory };
}
