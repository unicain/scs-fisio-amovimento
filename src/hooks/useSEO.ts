import { useEffect } from 'react';
import { lpData } from '../data';

export function useSEO() {
  useEffect(() => {
    // Update Title
    const title = `${lpData.about.name} | ${lpData.hero.headline}`;
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', lpData.hero.subheadline);

    // Update Favicon
    if (lpData.theme.logoUrl) {
      let link = document.querySelector('link[rel~="icon"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = lpData.theme.logoUrl;
    }
  }, []);
}
