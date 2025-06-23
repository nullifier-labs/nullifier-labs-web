import React from 'react';
import { Brain, Code2, Cpu, Network, Shield, Terminal, CloudSun } from 'lucide-react';

export interface Experiment {
  slug: string;
  title: string;
  description: string;
  longDescription: React.ReactNode;
  icon: React.ElementType;
  color: string;
}

export const experiments: Experiment[] = [
  {
    slug: 'zktls-weather',
    title: 'zkTLS Weather',
    description: 'Prove weather conditions privately using zero-knowledge proofs of TLS connections.',
    longDescription: (
      <div>
        <p className="mb-4">
          The zkTLS Weather demo showcases how zero-knowledge proofs can be used to verify real-world data 
          without revealing the underlying information. This project demonstrates proving that the weather 
          temperature is above a specific threshold without exposing the exact temperature or location.
        </p>
        <p className="mb-4">
          Using zkTLS (zero-knowledge Transport Layer Security), we can create cryptographic proofs about 
          data fetched from weather APIs while maintaining privacy. This opens up possibilities for 
          conditional payments, insurance claims, and other applications that depend on verifiable real-world data.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Generate zero-knowledge proofs of weather conditions</li>
          <li>Verify proofs without revealing exact temperature or location</li>
          <li>Demonstrate practical applications of zkTLS technology</li>
          <li>Privacy-preserving verification of external data sources</li>
        </ul>
        <p className="mt-4">
          <a 
            href="https://github.com/nullifier-labs/zktls-weather" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            View the project on GitHub →
          </a>
        </p>
      </div>
    ),
    icon: CloudSun,
    color: 'text-cyan-400',
  },
  {
    slug: 'zk-toys',
    title: 'ZK Toys',
    description: 'Mini zk-apps including games, puzzles, and voting tools that make zero-knowledge fun and accessible.',
    longDescription: (
      <p>
        ZK Toys is a collection of interactive zero-knowledge proof playgrounds and educational tools. 
        Our goal is to make complex cryptographic concepts fun and accessible to everyone, regardless of their technical background.
        Explore simple games, puzzles, and voting applications to get a hands-on understanding of how ZK proofs work.
      </p>
    ),
    icon: Code2,
    color: 'text-purple-400',
  },
  {
    slug: 'proof-of-mystery',
    title: 'Proof of Mystery',
    description: 'ZK-based ARGs and time-locked puzzles that blend cryptography with storytelling.',
    longDescription: (
      <p>
        Proof of Mystery is a series of Alternate Reality Games (ARGs) and time-locked puzzles that use zero-knowledge cryptography
        as a core mechanic. We believe that cryptography can be a powerful tool for storytelling, creating engaging experiences
        that are both challenging and educational.
      </p>
    ),
    icon: Brain,
    color: 'text-pink-400',
  },
  {
    slug: 'zk-social',
    title: 'zkSocial',
    description: 'Private social graph and reputation system prototypes for the next generation of social networks.',
    longDescription: (
      <p>
        How can we build social networks that are private by default? zkSocial is our exploration into privacy-preserving
        social graphs and reputation systems. We are experimenting with different cryptographic primitives to enable features
        like private posts, anonymous-but-verified credentials, and spam resistance without compromising user data.
      </p>
    ),
    icon: Shield,
    color: 'text-blue-400',
  },
  {
    slug: 'zk-ide',
    title: 'Zero Knowledge IDE',
    description: 'Developer tooling for building and verifying zk circuits with an intuitive interface.',
    longDescription: (
      <p>
        The Zero Knowledge IDE aims to simplify the developer experience for building and verifying ZK circuits. 
        We are building an intuitive, web-based interface that abstracts away much of the complexity of writing
        and testing circuits, making it easier for developers to integrate privacy-preserving features into their applications.
      </p>
    ),
    icon: Terminal,
    color: 'text-yellow-400',
  },
  {
    slug: 'zk-infra',
    title: 'zkInfra',
    description: 'Infrastructure experiments including zk light clients, rollups, and bridges.',
    longDescription: (
      <p>
        zkInfra is our playground for foundational zero-knowledge infrastructure. This includes experiments with
        zk-powered light clients, novel rollup designs for scalability, and trust-minimized bridges between blockchains.
        Our goal is to contribute to the core infrastructure that will power the next wave of decentralized applications.
      </p>
    ),
    icon: Network,
    color: 'text-green-400',
  },
  {
    slug: 'zk-ml',
    title: 'zkML & AI',
    description: 'Private inference, verification of LLM claims, and the intersection of ZK with AI.',
    longDescription: (
      <p>
        The intersection of Zero Knowledge and AI/ML is one of the most exciting frontiers in technology.
        With zkML, we are exploring private inference (running models on private data without revealing it),
        verifiable computation for model outputs, and ways to prove claims made by Large Language Models (LLMs).
      </p>
    ),
    icon: Cpu,
    color: 'text-orange-400',
  },
];

export const getExperiment = (slug: string) => {
  return experiments.find((exp) => exp.slug === slug);
} 