import React from 'react'
import MarketplaceList from './MarketplaceParts/MarketplaceList'
import { SiteShell } from '@/components/SiteShell'

export default function Marketplace(){
  return (
    <SiteShell>
      <MarketplaceList />
    </SiteShell>
  )
}
