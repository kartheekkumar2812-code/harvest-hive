import React from 'react'
export const DemoTile: React.FC<{icon: React.ComponentType<any>; title: string; subtitle?: string}> = ({icon: Icon, title, subtitle}) => (
  <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
        <Icon />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
    </div>
  </div>
)
export default DemoTile
