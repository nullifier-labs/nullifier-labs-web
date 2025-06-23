# Nullifier Labs Website

The official website for Nullifier Labs - a zero-knowledge research lab exploring the boundaries of cryptographic privacy.

## About

We're building the future of privacy through zero-knowledge experiments, from playful toys to serious infrastructure. Our focus areas include:

- **ZK Toys**: Educational games and interactive tools
- **Proof of Mystery**: Cryptographic storytelling and ARGs  
- **zkSocial**: Private social networks and reputation systems
- **Zero Knowledge IDE**: Developer tooling for ZK circuits
- **zkInfra**: Light clients, rollups, and bridges
- **zkML & AI**: Private inference and verifiable AI claims

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Fully typed with strict configuration

## Development

This project uses pnpm as the package manager.

### Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint

# Run tests
pnpm test
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── experiments/        # Experiment listing and detail pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # NavBar, Footer
│   └── ui/               # Reusable UI components (shadcn/ui)
└── lib/
    ├── experiments.tsx    # Experiment data and types
    └── utils.ts          # Utility functions
```

## Philosophy

- **Open Source First**: Build in public, attract community, share knowledge freely
- **Storytelling via ZK**: Puzzles, time capsules, and secret messages that engage and educate
- **Grants & Hackathons**: Build fun ZK projects to secure funding for bigger ideas
- **AI Crossover**: Exploring zkML, private inference, and verification of AI systems

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

- Email: nullifier-labs@proton.me
- GitHub: [@nullifier-labs](https://github.com/nullifier-labs)
