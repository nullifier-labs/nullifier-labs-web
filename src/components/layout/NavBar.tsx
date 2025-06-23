import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/nullifier-labs-logo-small.svg"
              alt="Nullifier Labs Logo"
              width={64}
              height={64}
              className="h-16 w-16 filter invert"
            />
            <span className="text-2xl font-bold text-white">Nullifier Labs</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/nullifier-labs"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Github className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/nullifierlabs"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Image
                  src="/x-social-media-black-icon.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className="h-4 w-4 mr-2 filter invert opacity-70"
                />
                <span className="hidden sm:inline">X</span>
              </Button>
            </Link>
            <Link href="mailto:nullifier-labs@proton.me">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500 text-slate-900 hover:bg-purple-500 hover:text-white"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 