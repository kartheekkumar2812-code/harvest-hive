import React from 'react'
import { Link } from 'react-router-dom'
import { Boxes } from 'lucide-react'
import { Button } from './ui/button'

export const SiteShell: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Boxes />
              </div>
              <div>
                <Link to="/" className="text-xl font-black">Harvest Hive</Link>
                <div className="text-xs text-slate-500">Rent • Trade • Finance</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link to="/market" className="hover:text-emerald-700">Marketplace</Link>
              <Link to="/" className="hover:text-emerald-700">Home</Link>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login"><Button variant="ghost">Sign in</Button></Link>
              <Link to="/dashboard"><Button>Dashboard</Button></Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex justify-between">
          <div>
            <div className="font-bold">Harvest Hive</div>
            <div className="text-xs text-slate-600">Made with 🌱 in India</div>
          </div>
          <div className="text-xs text-slate-600">© {new Date().getFullYear()} Harvest Hive Pvt Ltd</div>
        </div>
      </footer>
    </div>
  )
}
