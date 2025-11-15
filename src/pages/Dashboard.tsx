import React from 'react'
import { Stat } from '@/components/ui/stat'
import { SiteShell } from '@/components/SiteShell'

export default function Dashboard(){
  return (
    <SiteShell><div className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat value="12" label="Active Orders" />
          <Stat value="₹1,20,000" label="Outstanding Loans" />
          <Stat value="8" label="Messages" />
        </div>
      </div>
    </div></SiteShell>
    
  )
}
