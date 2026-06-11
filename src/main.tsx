import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import App from './App.tsx';
import './index.css';
import { fetchAndApplyLeadData } from './fetchLeadData';

// Initialize PostHog
if (typeof window !== 'undefined' && import.meta.env.VITE_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
  });
}

async function init() {
  const params = new URLSearchParams(window.location.search);
  const leadId = params.get('lead');
  if (leadId) {
    await fetchAndApplyLeadData(leadId);
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <PostHogProvider client={posthog}>
        <App />
      </PostHogProvider>
    </StrictMode>,
  );
}

init();
