# pierretranva.github.io

Personal portfolio website for **Pierre Tran** — Software Engineer & ML Engineer.

**Live:** [pierretranva.github.io](https://pierretranva.github.io)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Animations | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| Styling | Vanilla CSS (custom design system) |
| Hosting | GitHub Pages (via `gh-pages`) |

## Project Structure

```
src/
├── components/
│   ├── Hero/          # Landing section with letter scatter animation
│   ├── About/         # Bio + headshot
│   ├── Experience/    # Work history timeline
│   ├── Projects/      # Horizontal scroll project cards
│   ├── Skills/        # Categorized skill tags
│   ├── Contact/       # CTA with email, LinkedIn, GitHub links
│   └── Navbar/        # Fixed top navigation
├── data/
│   └── data.ts        # All content (experience, projects, skills, socials)
├── hooks/
│   └── useSmoothScroll.ts
├── App.tsx
├── main.tsx
└── index.css          # Design system (colors, typography, spacing)
```

## Commands

### Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

### Deploy to GitHub Pages

```bash
# Build + deploy in one command
npm run deploy
```

This runs `npm run build` (via the `predeploy` script), then pushes the `dist/` folder to the `gh-pages` branch.

### Push Source Code

```bash
git add -A
git commit -m "your message"
git push origin master
```

## How to Update Content

All website content lives in a single file: **`src/data/data.ts`**

### Update Experience

Edit the `experiences` array. Each entry looks like:

```ts
{
    company: 'Company Name',
    role: 'Your Title',
    location: 'City, ST',
    period: 'Month Year – Month Year',
    current: true,  // optional, adds "Current" badge
    bullets: [
        'What you accomplished...',
    ],
},
```

> **Tip:** Keep the most recent experience first (reverse chronological).

### Update Projects

Edit the `projects` array. Each entry:

```ts
{
    title: 'Project Name',
    description: 'One paragraph about what it does and why it matters.',
    tech: ['React', 'Python', 'etc'],
    github: 'https://github.com/pierretranva/repo-name',  // optional
    link: 'https://live-demo.com',                          // optional
},
```

> **Tip:** Most impressive projects should be listed first.

### Update Skills

Edit the `skills` array to add/remove categories or items:

```ts
{
    category: 'Category Name',
    items: ['Skill 1', 'Skill 2', 'Skill 3'],
},
```

### Update Social Links

Edit the `socials` object at the top of `data.ts`:

```ts
export const socials = {
    email: 'your@email.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
};
```

### Update Headshot

Replace `public/headshot.jpg` with your new image. Keep the filename the same, or update the `src` in `src/components/About/About.tsx`.

> **Important:** Compress images before committing. Large images (>500KB) can cause `git push` failures.

### After Making Changes

```bash
# 1. Preview locally
npm run dev

# 2. Deploy
npm run deploy

# 3. Commit source code
git add -A
git commit -m "Update content"
git push origin master
```

## License

MIT
