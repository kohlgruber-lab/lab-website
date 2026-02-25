import welcome from '../data/welcome.json';
import home from '../data/home.json';
import researchPage from '../data/research-page.json';
import researchLegacy from '../data/research.json';
import contactPage from '../data/contact-page.json';

export interface WelcomeContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlight_label?: string;
    primary_cta: { label: string; href: string };
    secondary_cta: { label: string; href: string };
  };
  culture_preview: string;
  news_preview_title: string;
}

function normalizeWelcome(): WelcomeContent {
  if ('primary_cta' in welcome.hero) {
    return welcome as WelcomeContent;
  }

  return {
    hero: {
      eyebrow: home.hero.subtitle ?? 'Welcome',
      title: home.hero.title,
      description: home.hero.description,
      primary_cta: { label: 'Join Us', href: '/join' },
      secondary_cta: { label: 'Contact', href: '/contact' }
    },
    culture_preview: 'Explore lab values, traditions, and team moments.',
    news_preview_title: 'Latest updates from the lab'
  };
}

export const welcomeContent = normalizeWelcome();

export const researchContent = {
  intro: (researchPage as any).intro ?? 'Our research programs span discovery immunology to preclinical translation.',
  themes: (researchPage as any).themes ?? (researchLegacy as any).themes ?? []
};

export const contactContent = {
  title: (contactPage as any).title ?? 'Contact',
  intro: (contactPage as any).intro ?? 'We welcome inquiries about collaboration and training opportunities.',
  map_note: (contactPage as any).map_note ?? ''
};
