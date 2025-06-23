# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development Server
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

### Package Management
This project uses pnpm as the preferred package manager (pnpm-lock.yaml is present).

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React
- **TypeScript**: Fully typed with strict configuration

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── experiments/        # Experiment listing and detail pages
│   │   ├── [slug]/        # Dynamic experiment detail pages
│   │   └── page.tsx       # Experiments overview page
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (NavBar, Footer)
│   └── ui/               # Reusable UI components (shadcn/ui)
└── lib/
    ├── experiments.tsx    # Experiment data and types
    └── utils.ts          # Utility functions
```

### Key Concepts

#### Experiment System
The site is built around showcasing various zero-knowledge experiments. Each experiment is defined in `src/lib/experiments.tsx` with:
- `slug`: URL-friendly identifier
- `title` and `description`: Display content
- `longDescription`: React component for detailed pages
- `icon`: Lucide React icon component
- `color`: Tailwind color class for theming

#### Design System
- **Color Palette**: Purple/pink gradients on dark slate backgrounds
- **Typography**: Geist font family (sans and mono variants)
- **Components**: Built with Radix UI + shadcn/ui for accessibility
- **Responsive**: Mobile-first design with Tailwind responsive classes

#### Routing
- `/` - Homepage with hero section and experiment grid
- `/experiments` - Experiment overview page
- `/experiments/[slug]` - Dynamic experiment detail pages

### shadcn/ui Configuration
The project uses shadcn/ui with:
- **Style**: "new-york" variant
- **Base Color**: neutral
- **CSS Variables**: enabled for theming
- **Aliases**: Configured for components (@/components), utils (@/lib/utils), etc.

## Company Context
Nullifier Labs is a zero-knowledge research lab focused on:
- ZK Toys: Educational games and tools
- Proof of Mystery: Cryptographic storytelling and ARGs
- zkSocial: Private social networks and reputation systems
- Zero Knowledge IDE: Developer tooling for ZK circuits
- zkInfra: Light clients, rollups, and bridges
- zkML & AI: Private inference and verifiable AI claims

The company philosophy emphasizes open source development, storytelling through cryptography, and building in public.