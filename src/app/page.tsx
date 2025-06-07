import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Zap, Brain, Code, Network, Users } from "lucide-react"
import Link from "next/link"
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavBar />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="border-purple-500 text-purple-400 mb-4">
              Zero Knowledge Experiments
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Building the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                Privacy
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We&apos;re a zero-knowledge research lab pushing the boundaries of cryptographic privacy. From playful
              experiments to serious infrastructure, we build in public and explore what&apos;s possible when privacy meets
              innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/experiments">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Zap className="h-5 w-5 mr-2" />
                  Explore Experiments
                </Button>
              </Link>
              <Link href="mailto:nullifier-labs@proton.me">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-900 hover:bg-slate-800 hover:text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Experiments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Experiments</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From toys to tools, we&apos;re exploring every corner of the zero-knowledge universe
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
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Philosophy</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              How we approach zero-knowledge research and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Github className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Open Source First</h3>
              <p className="text-slate-300">Build in public, attract community, and share knowledge freely</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Storytelling via ZK</h3>
              <p className="text-slate-300">Puzzles, time capsules, and secret messages that engage and educate</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Grants & Hackathons</h3>
              <p className="text-slate-300">Build fun ZK projects and use them to secure funding for bigger ideas</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Network className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Crossover</h3>
              <p className="text-slate-300">Exploring zkML, private inference, and verification of AI systems</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join us in pushing the boundaries of what&apos;s possible with zero-knowledge proofs. Whether you&apos;re a
            researcher, developer, or just curious about privacy tech, there&apos;s a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/nullifier-labs"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Github className="h-5 w-5 mr-2" />
                View Our Projects
              </Button>
            </Link>
            <Link href="mailto:nullifier-labs@proton.me">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-900 hover:bg-slate-800 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
