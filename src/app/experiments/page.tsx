import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { NavBar } from "@/components/layout/NavBar"
import { experiments } from "@/lib/experiments"

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
          {experiments.map((experiment) => {
            const Icon = experiment.icon;
            return (
              <Link key={experiment.slug} href={`/experiments/${experiment.slug}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-6 w-6 ${experiment.color}`} />
                      <CardTitle className="text-white">{experiment.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-300">
                      {experiment.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
} 