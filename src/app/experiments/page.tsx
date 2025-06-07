import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Network, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { NavBar } from "@/components/layout/NavBar"

export const metadata = {
  title: 'Explore Experiments – Nullifier Labs',
  description: 'Discover and explore our collection of zero-knowledge experiments, tools, and playgrounds.',
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavBar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Experiments</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our collection of zero-knowledge experiments, tools, and playgrounds
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/experiments/zk-toys">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-white">ZK Toys</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Mini zk-apps including games, puzzles, and voting tools that make zero-knowledge fun and accessible
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/experiments/proof-of-mystery">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-pink-400" />
                  <CardTitle className="text-white">Proof of Mystery</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  ZK-based ARGs and time-locked puzzles that blend cryptography with storytelling
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/experiments/zk-social">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">zkSocial</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Private social graph and reputation system prototypes for the next generation of social networks
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/experiments/zk-ide">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <CardTitle className="text-white">Zero Knowledge IDE</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Developer tooling for building and verifying zk circuits with an intuitive interface
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/experiments/zk-infra">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Network className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-white">zkInfra</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Infrastructure experiments including zk light clients, rollups, and bridges
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/experiments/zk-ml">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-orange-400" />
                  <CardTitle className="text-white">zkML & AI</CardTitle>
                </div>
                <CardDescription className="text-slate-300">
                  Private inference, verification of LLM claims, and the intersection of ZK with AI
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
} 