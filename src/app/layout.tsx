import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nullifier Labs – Zero Knowledge Experiments & Open Source ZK Playground",
  description:
    "Nullifier Labs is a zero\u2011knowledge research lab creating open-source tools and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nullifier-labs-logo.ico" type="image/x-icon" />
        <title>Nullifier Labs – Zero Knowledge Experiments &amp; Open Source ZK Playground</title>
        <meta name="description" content="Nullifier Labs is a zero-knowledge research lab for creative zk experiments, open source tools, and privacy innovation. Explore ZK Toys, Proof of Mystery, zkSocial, Zero Knowledge IDE, zkInfra, and more. Join us as we build in public, tell stories with cryptography, and push the boundaries of privacy and technology." />
        <meta name="keywords" content="zero knowledge, zk, cryptography, privacy, open source, zkSNARKs, zkML, puzzles, games, social graph, reputation, rollups, bridges, IDE, hackathons, grants, AI, LLM, time-locked puzzles, experiments, Nullifier Labs" />
        <meta name="author" content="Nullifier Labs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.nullifier-labs.xyz/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Nullifier Labs – Zero Knowledge Experiments &amp; Open Source ZK Playground" />
        <meta property="og:description" content="Zero-knowledge research lab for creative zk experiments, open source tools, and privacy innovation. ZK Toys, Proof of Mystery, zkSocial, Zero Knowledge IDE, zkInfra, and more." />
        <meta property="og:url" content="https://www.nullifier-labs.xyz/" />
        <meta property="og:site_name" content="Nullifier Labs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nullifier-labs.xyz/nullifier-labs-banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nullifierlabs" />
        <meta name="twitter:title" content="Nullifier Labs – Zero Knowledge Experiments &amp; Open Source ZK Playground" />
        <meta name="twitter:description" content="Zero-knowledge research lab for creative zk experiments, open source tools, and privacy innovation. ZK Toys, Proof of Mystery, zkSocial, Zero Knowledge IDE, zkInfra, and more." />
        <meta name="twitter:image" content="https://www.nullifier-labs.xyz/nullifier-labs-banner.png" />

        {/* Contact & Social */}
        <meta name="contact" content="nullifier-labs@proton.me" />
        <meta name="github" content="https://github.com/nullifier-labs" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
