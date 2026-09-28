<div align="center">

<img src="public/Paphangkorn_light.svg" alt="Logo" width="80" height="80" />

# Paphangkorn Thanakan (Aom) — Portfolio

### Roblox Game Developer · Lua · Game System Design

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Roblox](https://img.shields.io/badge/Roblox-Profile-E2231A?style=for-the-badge&logo=roblox&logoColor=white)](https://www.roblox.com/users/999846488/profile)

</div>

---

## About

My personal portfolio: the Roblox games I have built, the game camps I have helped teach, and the certificates I have earned along the way.

**Projects**

| Project | What it is |
|---------|------------|
| **Bronopoly** | Multiplayer Roblox game about economics — team leader & programmer, NSC 2026 regional round |
| **HEAT THIEVES** | Team battleground game built in three days for HamsterHub GameJamX |
| **Anime Royale** | Solo strategy game inspired by Clash Royale |
| **Escape Lab** | Early Roblox Bootcamp project |

## Tech

- **Next.js 16 (App Router)**, React 19, TypeScript
- **Tailwind CSS**, Framer Motion, GSAP, Lenis
- **Three.js / React Three Fiber / Rapier** for the 3D ID-card lanyard on the Contact page
- **next-intl** for English / Thai
- **AI chatbot** (`/api/chat`) that answers questions from `src/data/portfolio.ts`, using Groq with Gemini as a fallback

Almost all content (profile, projects, experience, certificates, gallery) lives in [`src/data/portfolio.ts`](src/data/portfolio.ts); UI copy lives in [`messages/`](messages).

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Optional `.env.local` for the chatbot and contact form:

```env
GROQ_API_KEY=
GEMINI_API_KEY=
EMAIL_USER=
EMAIL_APP_PASSWORD=
```

## Credits

Built on top of an open-source portfolio template by S. A. Almazril (MIT License). See [LICENSE](LICENSE).
