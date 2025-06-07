import { notFound } from 'next/navigation';
import { experiments, getExperiment } from '@/lib/experiments';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const experiment = getExperiment(params.slug);

  if (!experiment) {
    return {
      title: 'Experiment Not Found',
    };
  }

  return {
    title: `${experiment.title} – Nullifier Labs`,
    description: experiment.description,
  };
}

export async function generateStaticParams() {
  return experiments.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function ExperimentPage({ params }: Props) {
  const experiment = getExperiment(params.slug);

  if (!experiment) {
    notFound();
  }

  const Icon = experiment.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/experiments">
              <Button variant="ghost" className="text-slate-300 hover:bg-slate-800 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Experiments
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Icon className={`h-12 w-12 ${experiment.color}`} />
            </div>
            <h1 className="text-5xl font-bold mb-4">{experiment.title}</h1>
            <Badge variant="outline" className={`border-purple-500 text-purple-400`}>
              Experiment
            </Badge>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="prose prose-invert max-w-none text-slate-300 text-lg">
              {experiment.longDescription}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 