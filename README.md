# My-portfolio

Live site: https://nafisa-333.github.io/My-portfolio/

Personal academic portfolio of **Nafisa Siddiquee**, Zoology graduate of Noakhali Government College (National University, Bangladesh).

Built with React, TypeScript, Vite, Tailwind CSS v4, Motion for React and Lucide icons.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Editing content

All text content — education, research interests, publications, fieldwork, skills, volunteer roles and activities — lives in [`src/data/content.ts`](src/data/content.ts). Update facts there; the sections render from it.

## Project structure

```
public/
  favicon.svg
  images/                 original photographs (unaltered)
  images/optimized/       responsive WebP variants + Open Graph image
src/
  data/content.ts         all portfolio content
  hooks/                  theme (localStorage + system preference), active-section tracking
  components/             navigation, theme toggle, reveal animations, SVG landscape, photo
  sections/               Hero, About, Journey, Research, Publications, Fieldwork,
                          Skills, Engagement (Projects), Contact
```

## Images

The originals in `public/images/` are served as fallbacks. The WebP files in `public/images/optimized/` were resized from them without changing framing or content. If you replace a photograph, regenerate the variants at the widths listed in `photos` in `src/data/content.ts`.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which installs dependencies, builds the site and publishes `dist/` to GitHub Pages. The Vite `base` in `vite.config.ts` is `/My-portfolio/` to match the repository name; change it if the repository is renamed or moved to a custom domain.
