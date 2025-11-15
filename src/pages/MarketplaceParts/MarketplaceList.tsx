import React from 'react'
import { marketplaceSeed } from './data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function MarketplaceList(){
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Commodity Marketplace</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceSeed.map(m=>(
            <Card key={m.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>{m.origin}</Badge>
                  <span className="text-xs text-slate-500">{m.sku}</span>
                </div>
                <CardTitle>{m.name}</CardTitle>
                <CardDescription>Stock: {m.stock.toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold">{m.price} <span className="text-sm">{m.unit}</span></div>
                  <div className="text-xs text-slate-500">Ex-warehouse price</div>
                </div>
                <Button>Buy</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
