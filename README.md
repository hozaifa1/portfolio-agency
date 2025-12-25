# TechNova Solutions - Portfolio & Agency Website

Premium software development portfolio and agency website showcasing full-stack development, AI/ML integration, and cross-platform solutions.

## 🎯 Overview

This is a modern, responsive portfolio website built with Next.js 14, featuring:
- **Animated hero section** with particle effects
- **Interactive project showcases** with detailed case studies
- **Bangladesh-optimized pricing** subscription model (BDT 15,000 - 75,000/month)
- **Service offerings**: Web Development, Mobile Apps, AI/ML, Desktop Applications
- **Contact form** for client inquiries
- **SEO-optimized** for Bangladesh and international markets

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel (Hobby Plan compatible)

## 📁 Project Structure

```
portfolio-agency/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout with navbar/footer
│   ├── pricing/             # Pricing page
│   └── portfolio/           # Portfolio pages
│       ├── page.tsx         # Portfolio overview
│       └── [id]/            # Individual project details
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Portfolio.tsx       # Portfolio section
│   ├── Pricing.tsx         # Pricing tiers
│   ├── Contact.tsx         # Contact form
│   ├── Navbar.tsx          # Navigation
│   └── Footer.tsx          # Footer
├── lib/                     # Utilities and data
│   └── data.ts             # Projects, services, pricing data
└── public/                  # Static assets
    └── projects/           # Project screenshots

```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding Project Screenshots

Replace the empty placeholder images in `public/projects/` with your actual project screenshots:

1. **prova-erp.png** - Textile Supply Chain ERP screenshot
2. **igmis-lms.png** - University LMS dashboard
3. **voicelink.png** - Voice Link Android app
4. **torbiz.png** - Torbiz desktop application
5. **research-pose.png** - Research visualization

**Recommended specs**: 1200x800px, PNG/WebP format, optimized for web

## 🎨 Customization

### Update Personal Information
Edit `lib/data.ts` to update:
- Projects and case studies
- Service offerings
- Pricing tiers
- Testimonials
- Contact information

### Modify Branding
- Update company name in `components/Navbar.tsx` and `components/Footer.tsx`
- Adjust color scheme in Tailwind classes (cyan/blue theme)
- Update metadata in `app/layout.tsx`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Next.js configuration
4. Deploy!

Vercel configuration is already included in `vercel.json`.

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 📊 Features

### Homepage Sections
- **Hero**: Animated hero with stats and CTA
- **Services**: 4 core service offerings
- **Portfolio**: Featured projects with impact metrics
- **Pricing**: 3 subscription tiers (Starter, Growth, Enterprise)
- **Contact**: Multi-field contact form

### Pricing Model
- **Starter**: ৳15,000/month (~$175 USD)
- **Growth**: ৳35,000/month (~$400 USD) - Most Popular
- **Enterprise**: ৳75,000/month (~$850 USD)

All plans include source code ownership and transparent pricing.

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Project Data

All project information is centralized in `lib/data.ts`:
- **5 Featured Projects** from your CV
- **4 Service Categories**
- **3 Pricing Tiers**
- **Testimonials** and impact metrics

## 🌐 SEO

Optimized for:
- Bangladesh software development market
- International clients
- Keywords: full-stack, AI/ML, mobile apps, Django, React, Next.js

## 📄 License

All rights reserved. Portfolio website for TechNova Solutions.

## 👤 Developer

**S. M. Hozaifa Hossain**
- Email: 20hozaifa02@gmail.com
- GitHub: [github.com/hozaifa1](https://github.com/hozaifa1)
- LinkedIn: [linkedin.com/in/hozaifa1](https://linkedin.com/in/hozaifa1)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
