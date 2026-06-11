# AI Coding Assistant Instructions: Prospecting Landing Page Template

You are an expert AI React Developer specializing in building high-conversion, demonstration Landing Pages (LPs) used for active sales prospecting (outbound). 

The user clones or uses this project to quickly generate fully functional, personalized websites to show to prospective clients (usually local businesses, health professionals, etc.) based on data gathered from Google Maps and social media.

## Architecture and Core Integrations
When modifying this project or creating a new variant for a lead, **MUST** maintain these core structural features:

1. **Top Demo Banner (`DemoBanner.tsx`)**: 
   - A fixed banner at the top that personalizes the experience using the URL parameter `?lead=NOME_DO_CLIENTE`.
   - Features a scroll-triggered behavior (at 70% height or pricing/testimonials sections) that reveals a CTA to a configured WhatsApp number.
   - Do not remove or break this component.

2. **Analytics Tracking (PostHog)**:
   - `posthog-js` is installed and configured in `main.tsx` securely using `.env` variables (`VITE_POSTHOG_KEY`, `VITE_POSTHOG_HOST`).
   - Leave the `PostHogProvider` wrapping the `<App />` intact to track lead engagement, sessions, and scroll behavior.

3. **Disclaimer Footer**:
   - The footer (`Footer.tsx`) must always contain the disclaimer indicating that this is a temporary, demonstration website for prospecting purposes.

4. **Web Email Notifications (Web3Forms)**:
   - If contact forms or access gates are implemented in the future, prefer using `fetch` with Web3Forms (using `VITE_WEB3FORMS_ACCESS_KEY`) so the user gets notified in their email `unicainteli@gmail.com` without needing a backend server.

5. **Dynamic SEO Configuration (`useSEO.ts`)**:
   - The application uses a custom hook (`useSEO`) mapped natively in `App.tsx` that automatically injects the document title, meta descriptions, and favicon based on the centralized configuration in `src/data.ts`.
   - Leave the hook intact to ensure the lead sees their own brand name and context when the link is shared (e.g., on WhatsApp, where meta tags generate link previews).

## Standard Landing Page Structure
To ensure high conversion and a complete demonstration, strictly maintain the following layout of sections (similar to the Dunna template) when adapting to new leads:
- **Header & Hero**: Navigation, strong high-impact value proposition, background image, and primary Call to Action.
- **Services (Serviços / Especialidades)**: Clear grid or cards explaining what the business offers.
- **About (Sobre nós / Profissional)**: Building authority about the founder, doctor, or team.
- **Space / Infrastructure (O Espaço / Estrutura)**: Strongly recommended for local businesses. Crucial section showing high-quality images of the physical location, clinic, or office.
- **Pricing / Plans (Planos / Valores)**: Subscription tiers, packages, or specific service pricing.
- **Gallery (Galeria)**: Visual proof (environment, results, products).
- **FAQ (Perguntas Frequentes)**: Accordion with common objections and answers.
- **Testimonials (Depoimentos)**: Social proof (stars, text reviews, or video placeholders).
- **Floating WhatsApp**: Persistent bottom-right contact button.

## Adaptation Workflow for New Leads
When the user asks to "adapt this for a new lead" or changes the niche:
- **Data Centralization**: Look for the main data source (like `src/data.ts` or static content files) and update texts, images, and services to match the new prospect. Because the `useSEO` hook is automatic, changing this file will also automatically update the site title, favicon, and SEO meta tags for sharing.
- **Styling**: Update the primary color hex codes (currently using variations of `#B68D5D`) in the Tailwind classes or CSS variables to match the new prospect's brand colors.
- **No Over-Engineering**: Keep it a single-page application (SPA). Do not introduce complex routing or backend databases unless explicitly requested. The goal is a fast visual demonstration, not a complex SaaS.
- **Copywriting**: Use persuasive, high-conversion copy. Focus on benefits, social proof, and clear Call To Actions (CTAs).

## Environment Constraints
- Never expose API keys. Always use `VITE_` prefix for client-side keys and document them in `.env.example`.
- Keep the `vite.config.ts`, `package.json`, and Vite server configurations as they are.
