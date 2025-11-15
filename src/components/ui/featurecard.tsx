import React from 'react'
export const FeatureCard: React.FC<{icon: React.ComponentType<any>; title: string; desc: string}> = ({icon: Icon, title, desc}) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 mb-3">
      <Icon />
    </div>
    <div className="font-semibold">{title}</div>
    <div className="text-sm text-slate-500">{desc}</div>
  </div>
)
export default FeatureCard
