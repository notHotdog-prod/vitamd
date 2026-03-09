# MaxLifeMD — Full-Stack Web Application

A production-ready telehealth & longevity medicine platform inspired by EllieMD, built with Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS variables |
| Database | PostgreSQL via Prisma ORM |
| Auth | JWT + HTTP-only cookies |
| Forms | Native React hooks + Zod validation |
| Email | Nodemailer (SMTP) |
| SEO | Next.js Metadata API, sitemap, robots |
| Fonts | Outfit (display) + Inter (body) via Google Fonts |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout + fonts + metadata
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # robots.txt
│   ├── about/page.tsx            # About page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual post
│   ├── contact/page.tsx          # Contact form
│   ├── services/page.tsx         # Services/Programs
│   ├── admin/
│   │   ├── page.tsx              # Login page
│   │   ├── dashboard/page.tsx    # Admin dashboard
│   │   ├── posts/                # Post management (list, new, edit)
│   │   └── messages/page.tsx     # Contact message inbox
│   └── api/
│       ├── contact/route.ts      # Contact form API
│       ├── posts/route.ts        # Posts CRUD
│       ├── posts/[id]/route.ts
│       └── admin/
│           ├── login/route.ts    # JWT auth
│           ├── logout/route.ts
│           └── stats/route.ts    # Dashboard stats
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav with dropdown
│   │   ├── Footer.tsx            # Footer with newsletter
│   │   └── SiteLayout.tsx        # Page wrapper
│   └── sections/
│       ├── Hero.tsx              # Animated hero
│       ├── ServicesPreview.tsx   # Service cards
│       ├── HowItWorks.tsx        # Step timeline
│       ├── Testimonials.tsx      # Patient reviews
│       └── CTABanner.tsx         # Call-to-action
├── lib/
│   ├── db.ts                     # Prisma singleton
│   ├── auth.ts                   # JWT utilities
│   └── utils.ts                  # Helpers
├── middleware.ts                  # Admin route protection
├── styles/globals.css             # Global styles + Tailwind
└── types/index.ts                 # TypeScript types
```

---

## ⚙️ Setup

### 1. Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or pnpm

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/maxlifemd"
JWT_SECRET="your-secret-here"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your@email.com"
SMTP_PASS="your-app-password"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Set up database
```bash
npm run db:push    # Push schema to PostgreSQL
npm run db:seed    # Seed demo data + admin user
```

### 5. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Admin Access

Navigate to `/admin` and sign in:
- **Email:** admin@maxlifemd.com
- **Password:** admin123!

> ⚠️ Change these immediately in production via `prisma db studio` or direct DB update.

---

## 🌐 Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services, testimonials |
| `/services` | Full program details with pricing |
| `/about` | Team, mission, values |
| `/blog` | Article listing with categories |
| `/blog/[slug]` | Individual article |
| `/contact` | Contact form |
| `/admin` | Admin login |
| `/admin/dashboard` | Stats overview |
| `/admin/posts` | Blog CMS |
| `/admin/messages` | Contact inbox |

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Cyan | `#00E5D1` | Primary accent, highlights |
| Teal | `#0099CC` | Mid gradient |
| Blue | `#1A2BCC` | Deep accent |
| Dark | `#080B1A` | Background |
| Card | `#0C1025` | Card backgrounds |

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```
Add all env vars in Vercel dashboard.

### Docker
```bash
docker build -t maxlifemd .
docker run -p 3000:3000 --env-file .env.local maxlifemd
```

---

## 📋 Production Checklist

- [ ] Change default admin password
- [ ] Set strong `JWT_SECRET` (32+ chars)
- [ ] Configure real SMTP credentials
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Enable HTTPS
- [ ] Add real OG image at `/public/images/og-image.jpg`
- [ ] Configure database backups
- [ ] Review and customize legal pages (Privacy, Terms, HIPAA)

---

## 📄 License

Proprietary — MaxLifeMD.com. All rights reserved.
