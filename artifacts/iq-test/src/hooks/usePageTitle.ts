import { useEffect } from 'react';

const SITE_NAME = 'FreeIQTest.online';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${SITE_NAME}`
      : `Free IQ Test — Scientifically Calibrated Intelligence Assessment | ${SITE_NAME}`;
    return () => {
      document.title = `Free IQ Test — ${SITE_NAME}`;
    };
  }, [title]);
}
