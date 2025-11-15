import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/SiteShell'


export default function Login(){
  return (
    <SiteShell>
<div className="py-24">
      <div className="mx-auto max-w-md px-4">
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button>Sign in</Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </SiteShell>
    
  )
}
