import { Github, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/nullifier-labs-logo-small.svg"
              alt="Nullifier Labs Logo"
              width={48}
              height={48}
              className="h-12 w-12 filter invert"
            />
            <span className="text-xl font-bold text-white">Nullifier Labs</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/nullifier-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/nullifierlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Image
                src="/x-social-media-black-icon.svg"
                alt="X"
                width={20}
                height={20}
                className="h-5 w-5 filter invert opacity-50"
              />
            </Link>
            <Link
              href="mailto:nullifier-labs@proton.me"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2025 Nullifier Labs. Building the future of privacy, one proof at a time.</p>
        </div>
      </div>
    </footer>
  )
} 