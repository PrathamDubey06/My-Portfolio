# 🏗️ PORTFOLIO ARCHITECTURE - LOCKED

## ✅ Frontend Structure (Next.js App Router)

```
frontend/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Single-page scroll (orchestrates all sections)
│   └── globals.css                # Global styles + Tailwind
│
├── components/
│   ├── sections/                  # Section components
│   │   ├── Hero/                  # Interactive image hover reveal
│   │   ├── File/                  # About section
│   │   ├── Experiments/           # Projects section
│   │   ├── Abilities/             # Skills section
│   │   ├── Battles/               # Experience section
│   │   └── Signal/                # Contact section
│   │
│   ├── animations/                # GSAP animation wrappers
│   ├── ui/                        # Reusable UI components
│   └── layout/                    # Layout components (Header, Footer, Nav)
│
├── lib/
│   ├── api/                       # API client functions
│   │   ├── client.ts              # Axios/Fetch instance
│   │   ├── endpoints.ts           # API endpoint constants
│   │   └── services/              # Service layer
│   │       ├── projects.service.ts
│   │       ├── experience.service.ts
│   │       └── contact.service.ts
│   ├── hooks/                     # Custom React hooks
│   ├── utils/                     # Utility functions
│   └── types/                     # TypeScript types
│
├── store/                         # State management
│   ├── context/                   # React Context providers
│   └── query/                     # React Query configuration
│
├── public/                        # Static assets
└── styles/                        # Additional stylesheets (if needed)
```

---

## ✅ Backend Structure (NestJS)

```
backend/
├── src/
│   ├── modules/                   # Feature modules
│   │   ├── projects/              # Experiments data
│   │   │   ├── projects.module.ts
│   │   │   ├── projects.controller.ts
│   │   │   ├── projects.service.ts
│   │   │   ├── projects.repository.ts
│   │   │   ├── entities/
│   │   │   │   └── project.entity.ts
│   │   │   └── dto/
│   │   │
│   │   ├── experience/            # Battles data
│   │   │   ├── experience.module.ts
│   │   │   ├── experience.controller.ts
│   │   │   ├── experience.service.ts
│   │   │   ├── experience.repository.ts
│   │   │   ├── entities/
│   │   │   └── dto/
│   │   │
│   │   └── contact/               # Signal/Contact form
│   │       ├── contact.module.ts
│   │       ├── contact.controller.ts
│   │       ├── contact.service.ts
│   │       └── dto/
│   │
│   ├── common/                    # Shared utilities
│   │   ├── decorators/
│   │   ├── filters/               # Exception filters
│   │   ├── interceptors/          # Logging, transformation
│   │   └── pipes/                  # Validation pipes
│   │
│   ├── config/                    # Configuration
│   │   ├── database.config.ts
│   │   └── app.config.ts
│   │
│   ├── database/                  # Database setup
│   │   ├── migrations/
│   │   └── seeds/
│   │
│   └── main.ts                    # Application entry point
│
└── test/                          # E2E tests
```

---

## ✅ State Management Strategy

### **React Query** → Server Data
- Projects (Experiments)
- Experience (Battles)
- Skills (Abilities) - if dynamic
- Any API-fetched data

### **React Context** → UI State + Toggles
- Theme (light/dark)
- Navigation state (mobile menu open/close)
- Modal states
- Section visibility toggles
- Any client-side UI state

### **GSAP** → Animation-Local Only
- Animation state stored in component refs
- No global animation state
- Timeline refs scoped to components
- Animation wrappers manage their own state

---

## ✅ Animation Responsibility Separation

**Strategy: Wrapper Components**

```
components/
├── animations/
│   ├── ScrollReveal.tsx           # Scroll-triggered animations
│   ├── ImageHover.tsx              # Hero image hover reveal
│   ├── FadeIn.tsx                  # Fade-in animations
│   ├── StaggerChildren.tsx        # Staggered children
│   └── hooks/
│       ├── useScrollAnimation.ts
│       ├── useHoverAnimation.ts
│       └── useGSAP.ts
```

**Principles:**
1. Components define WHAT to animate (via props)
2. Animation wrappers handle HOW to animate (GSAP logic)
3. Custom hooks encapsulate common patterns
4. GSAP utilities are pure, reusable functions

---

## ✅ Data Flow

```
Frontend (Next.js)
    ↓ HTTP/REST API (JSON)
Backend (NestJS)
    ↓ TypeORM/Prisma
PostgreSQL Database
```

**Flow Details:**
- Frontend service layer (`lib/api/services/`) calls NestJS endpoints
- Backend controllers → services → repositories → database
- Standardized response format: `{ data, message, status }`
- React Query handles caching, refetching, error states

---

## ✅ Environment & Deployment

### Environment Variables

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=https://api.yourportfolio.com
NEXT_PUBLIC_ENVIRONMENT=production
```

**Backend (.env):**
```
DATABASE_URL=postgresql://user:pass@host:5432/portfolio
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://yourportfolio.com
```

### Deployment Strategy
- **Frontend:** Vercel (Next.js optimized)
- **Backend:** Railway/Render (NestJS)
- **Database:** Railway PostgreSQL or Supabase

---

## 📋 Section Mapping

| Section Name | Component | Backend Module | Description |
|-------------|-----------|---------------|-------------|
| Hero | `Hero/` | None | Interactive image hover reveal |
| The File | `File/` | None | About section (static content) |
| Experiments | `Experiments/` | `projects/` | Projects showcase |
| Abilities | `Abilities/` | None (or static) | Skills section |
| Battles | `Battles/` | `experience/` | Experience/work history |
| Signal | `Signal/` | `contact/` | Contact form |

---

## 🔒 ARCHITECTURE LOCKED

This architecture is now the single source of truth for implementation.

**Key Decisions:**
- ✅ Single-page scroll design (all sections in `app/page.tsx`)
- ✅ Modular component structure
- ✅ Clean separation: React Query (server) + Context (UI) + GSAP (local)
- ✅ Animation wrapper strategy maintained
- ✅ Feature-based backend modules
- ✅ Type-safe API layer

---

**Status:** ✅ READY FOR IMPLEMENTATION

